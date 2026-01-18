const SERVER_URL = 'http://localhost:3000';
let allProducts = []; 

document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENT SELECTORS ---
    const grid = document.getElementById('productGrid');
    const featuredGrid = document.getElementById('featuredGrid');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const catBtns = document.querySelectorAll('.cat-btn');
    
    // Selector untuk Hamburger Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // --- 1. FUNGSI MASTER PINDAH HALAMAN ---
    function tampilkanHalaman(targetId) {
        document.querySelectorAll('.page').forEach(hal => {
            hal.style.display = 'none';
            hal.classList.remove('active');
        });

        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.style.display = 'block';
            targetPage.classList.add('active');
            window.scrollTo(0, 0);
        }
    }

    // --- 2. FUNGSI BUKA DETAIL (FIXED TYPO & LOGIKA) ---
    window.bukaHalamanDetail = (namaProduk) => {
        // Hapus tulisan 'hamburhambur' yang tadi bikin error di sini
        const p = allProducts.find(item => item.name === namaProduk);
        if(!p) return;

        tampilkanHalaman('halaman-detail');

        // Isi Data Teks
        document.getElementById('detailJudul').innerText = p.name;
        document.getElementById('detailKategori').innerText = p.category;
        document.getElementById('detailHarga').innerText = "Rp " + Number(p.price).toLocaleString('id-ID');
        document.getElementById('detailDeskripsi').innerText = p.description || "Tidak ada deskripsi.";

        // Logika Galeri Gambar
        const mainImg = document.getElementById('detailImg');
        const thumbGallery = document.getElementById('thumbGallery');
        thumbGallery.innerHTML = ''; 

        if (p.images && p.images.length > 0) {
            let firstImg = p.images[0].trim();
            // Fix path double slash
            mainImg.src = firstImg.startsWith('/uploads') ? SERVER_URL + firstImg : firstImg;

            p.images.forEach((imgUrl) => {
                const cleanUrl = imgUrl.trim();
                const fullUrl = cleanUrl.startsWith('/uploads') ? SERVER_URL + cleanUrl : cleanUrl;

                const thumb = document.createElement('img');
                thumb.src = fullUrl;
                // Style thumbnail dipindah ke CSS nanti lebih baik, tapi ini oke
                thumb.style = "width: 70px; height: 70px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 2px solid rgba(255,255,255,0.1); transition: 0.3s;";
                
                thumb.onclick = () => {
                    mainImg.src = fullUrl;
                    document.querySelectorAll('#thumbGallery img').forEach(i => i.style.borderColor = "rgba(255,255,255,0.1)");
                    thumb.style.borderColor = "#00ff88";
                };
                thumbGallery.appendChild(thumb);
            });
        }
        
        // Update Link WA
        const pesan = `Halo VoltGreen, saya tertarik dengan produk: *${p.name}*`;
        const waBtn = document.getElementById('detailWaBtn');
        if(waBtn) waBtn.href = `https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`;
    };

    window.kembaliKeKatalog = () => {
        tampilkanHalaman('produk'); 
    };

    // --- 3. RENDER PRODUK ---
    function renderProductsUI(filterCat = 'all', searchText = '') {
        if (!grid) return;
        grid.innerHTML = ''; 
        
        const filtered = allProducts.filter(p => {
            const kategoriProduk = p.category ? p.category.toLowerCase().trim() : '';
            const kategoriFilter = filterCat.toLowerCase().trim();
            const matchesCat = filterCat === 'all' || kategoriProduk === kategoriFilter;
            const matchesSearch = p.name.toLowerCase().includes(searchText.toLowerCase());
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `<p style="color:gray; text-align:center; grid-column: 1/-1; padding: 20px;">Produk tidak ditemukan.</p>`;
            return;
        }

        filtered.forEach((p) => {
            let img = p.images[0]?.trim() || '';
            let src = img.startsWith('/uploads') ? SERVER_URL + img : img;

            const card = document.createElement('div');
            card.className = 'product-card glass-card';
            card.onclick = () => bukaHalamanDetail(p.name); 

            card.innerHTML = `
                <img src="${src}" style="width:100%; height:200px; object-fit:cover; border-radius:15px;">
                <div style="padding:15px;">
                    <span style="font-size:10px; color:#00ff88; text-transform:uppercase; font-weight:bold;">${p.category}</span>
                    <h3 style="margin-top:5px; color:white; font-size:1.1rem;">${p.name}</h3>
                    <p style="color:#00ff88; font-weight:bold; margin-top:10px;">Rp ${Number(p.price).toLocaleString('id-ID')}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // --- 4. LOAD DATA ---
    async function loadProductsFromDB() {
        try {
            const response = await fetch(`${SERVER_URL}/api/products`);
            allProducts = await response.json();
            renderProductsUI('all', ''); 
            
            if (featuredGrid) {
                featuredGrid.innerHTML = '';
                allProducts.slice(0, 3).forEach(p => {
                    let img = p.images[0]?.trim() || '';
                    let src = img.startsWith('/uploads') ? SERVER_URL + img : img;
                    const card = document.createElement('div');
                    card.className = 'product-card glass-card';
                    card.onclick = () => bukaHalamanDetail(p.name);
                    card.innerHTML = `
                        <img src="${src}" style="width:100%; height:180px; object-fit:cover; border-radius:10px;">
                        <h4>${p.name}</h4>
                        <p style="color:#00ff88;">Rp ${Number(p.price).toLocaleString('id-ID')}</p>
                    `;
                    featuredGrid.appendChild(card);
                });
            }
        } catch (err) {
            console.error("Gagal ambil data:", err);
        }
    }

    // --- 5. EVENT LISTENERS (SEARCH & FILTER) ---
    catBtns.forEach(btn => {
        btn.onclick = () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProductsUI(btn.dataset.cat, searchInput.value);
        };
    });

    if(searchButton) {
        searchButton.onclick = () => renderProductsUI(document.querySelector('.cat-btn.active').dataset.cat, searchInput.value);
    }

    // --- 6. NAVIGASI & HAMBURGER MENU (INI BARU DITAMBAHKAN) ---
    
    // A. Logika Tombol Hamburger
    if (menuToggle && navMenu) {
        menuToggle.onclick = () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        };
    }

    // B. Logika Klik Menu (Termasuk Logo)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.onclick = function(e) {
            e.preventDefault();
            const target = this.dataset.target;
            
            if(target) {
                tampilkanHalaman(target);
                
                // Update status active di navbar
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active'); // Logo juga akan dapat class active (tak masalah)
                
                // Tutup menu mobile jika sedang terbuka
                if (navMenu) navMenu.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            }
        };
    });

    loadProductsFromDB();
});