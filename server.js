const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); // Untuk menghapus file lama jika diperlukan

const app = express();
app.use(cors());
app.use(express.json());

// 1. BUAT FOLDER UPLOADS JIKA BELUM ADA
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// 2. AKSES STATIC FOLDER (Supaya gambar bisa dipanggil di browser)
app.use('/uploads', express.static('uploads'));

// Konfigurasi Database
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres', 
    password: 'Linzhi2803', 
    port: 5432,
});

pool.connect((err, client, release) => {
    if (err) return console.error('Gagal koneksi ke Database:', err.stack);
    console.log('Koneksi ke Database BERHASIL!');
    release();
});

// --- 3. KONFIGURASI MULTER (PENYIMPANAN GAMBAR) ---
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        // Nama file jadi unik: tanggal-angkaacak.ekstensi
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// API Ambil Produk
app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products ORDER BY id DESC');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- 4. API TAMBAH PRODUK (DENGAN UPLOAD) ---
app.post('/api/products', upload.array('images', 5), async (req, res) => {
    const { name, category, price, description } = req.body;
    
    // Ambil path file yang diupload dan simpan sebagai array string
    // Ganti baris 64 yang error:
    let imagePaths = [];
    if (req.files && req.files.length > 0) {
        imagePaths = req.files.map(file => `/uploads/${file.filename}`);
    } else if (req.file) { // Jika pakai upload.single
        imagePaths = [`/uploads/${req.file.filename}`];
    }
    
    try {
        await pool.query(
            'INSERT INTO products (name, category, price, images, description) VALUES ($1, $2, $3, $4, $5)',
            [name, category, price, imagePaths, description]
        );
        res.json({ message: "Produk & Gambar Berhasil Ditambah!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// --- 5. API UPDATE PRODUK (EDIT DENGAN/TANPA UPLOAD BARU) ---
app.put('/api/products/:id', upload.array('images', 5), async (req, res) => {
    const { id } = req.params;
    const { name, category, price, description } = req.body;
    
    try {
        let imagePaths;
        
        // Jika ada file baru yang diupload
        if (req.files && req.files.length > 0) {
            imagePaths = req.files.map(file => `/uploads/${file.filename}`);
            // Jalankan update termasuk kolom images
            await pool.query(
                'UPDATE products SET name=$1, category=$2, price=$3, images=$4, description=$5 WHERE id=$6',
                [name, category, price, imagePaths, description, id]
            );
        } else {
            // Jika tidak ada upload baru, biarkan gambar lama (hanya update teks)
            await pool.query(
                'UPDATE products SET name=$1, category=$2, price=$3, description=$4 WHERE id=$5',
                [name, category, price, description, id]
            );
        }
        
        res.json({ message: "Produk Berhasil Diupdate!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// API Hapus Produk
app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM products WHERE id = $1', [id]);
        res.json({ message: "Produk Berhasil Dihapus!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});