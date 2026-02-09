// --- 1. DATA PRODUK (TAMBAH PRODUK BARU DI SINI) ---
// Kamu cukup menambah objek baru di dalam kurung [ ] ini.


let slideIndex = 1; 
let slideInterval;

// --- 2. FUNGSI NAVIGASI & HALAMAN ---
window.tampilkanHalaman = (targetId) => {
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

    // Update Garis Navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.target === targetId) link.classList.add('active');
    });

    // Kontrol Slider (Hanya muncul di Home)
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        slider.style.display = (targetId === 'home') ? 'flex' : 'none';
    }
};

window.kembaliKeKatalog = () => {
    window.tampilkanHalaman('produk'); 
};

// --- 3. LOGIKA DETAIL PRODUK (DINAMIS & MULTI-GAMBAR) ---
window.bukaHalamanDetail = (namaProduk) => {
    const p = allProducts.find(item => item.name === namaProduk);
    if(!p) return; 

    window.tampilkanHalaman('halaman-detail'); 

    document.getElementById('detailJudul').innerText = p.name;
    document.getElementById('detailKategori').innerText = p.category;
    document.getElementById('detailHarga').innerText = "Rp " + p.price.toLocaleString('id-ID');
    document.getElementById('detailDeskripsi').innerHTML = p.description;

    const mainImg = document.getElementById('detailImg');
    const thumbGallery = document.getElementById('thumbGallery');
    thumbGallery.innerHTML = '';  

    if (p.images && p.images.length > 0) {
        // Set gambar utama dari index pertama
        mainImg.src = p.images[0];

        // Buat thumbnail jika gambar lebih dari 1
        p.images.forEach((url, index) => {
            const thumb = document.createElement('img');
            thumb.src = url;
            thumb.className = "thumb-item";
            thumb.style = "width: 70px; height: 70px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 2px solid rgba(255,255,255,0.1); margin-right: 5px;";
            
            thumb.onclick = () => { 
                mainImg.src = url; 
                // Reset border semua thumb lalu beri warna ke yang aktif
                document.querySelectorAll('.thumb-item').forEach(img => img.style.borderColor = "rgba(255,255,255,0.1)");
                thumb.style.borderColor = "#00ff88";
            };
            thumbGallery.appendChild(thumb);
        });
    }
    
    // Link WhatsApp Otomatis
    const waBtn = document.getElementById('detailWaBtn');
    if(waBtn) {
        const pesan = `Halo VoltGreen, saya tertarik dengan produk: *${p.name}* (Rp ${p.price.toLocaleString('id-ID')})`;
        waBtn.href = `https://wa.me/6285178098989?text=${encodeURIComponent(pesan)}`;
    }
};

// --- 4. RENDER KATALOG & SEARCH ---
function renderProductsUI(filterCat = 'all', searchText = '') {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    grid.innerHTML = '';  
    
    const filtered = allProducts.filter(p => {
        const matchesCat = filterCat === 'all' || p.category.toLowerCase() === filterCat.toLowerCase();
        const matchesSearch = p.name.toLowerCase().includes(searchText.toLowerCase());
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="color:gray; text-align:center; grid-column: 1/-1; padding: 20px;">Produk tidak ditemukan.</p>`;
        return;
    }

    filtered.forEach((p) => {
        const card = document.createElement('div');
        card.className = 'product-card glass-card';
        card.onclick = () => window.bukaHalamanDetail(p.name); 
        card.innerHTML = `
            <img src="${p.images[0]}" style="width:100%; height:200px; object-fit:cover; border-radius:15px;">
            <div style="padding:15px;">
                <span style="font-size:10px; color:#00ff88; text-transform:uppercase; font-weight:bold;">${p.category}</span>
                <h3 style="margin-top:5px; color:white; font-size:1.1rem;">${p.name}</h3>
                <p style="color:#00ff88; font-weight:bold; margin-top:10px;">Rp ${p.price.toLocaleString('id-ID')}</p>
            </div>`;
        grid.appendChild(card);
    });
}

// --- 5. LOGIKA SLIDER (HERO SECTION) ---
window.moveSlide = (n) => { showSlides(slideIndex += n); resetAutoSlide(); };
window.currentSlide = (n) => { showSlides(slideIndex = n); resetAutoSlide(); };

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (slides.length === 0) return; 

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "flex";
    setTimeout(() => { slides[slideIndex-1].classList.add("active"); }, 10);
    if (dots[slideIndex-1]) dots[slideIndex-1].className += " active";
}

function startAutoSlide() { slideInterval = setInterval(() => window.moveSlide(1), 5000); }
function resetAutoSlide() { clearInterval(slideInterval); startAutoSlide(); }

// --- 6. INITIALIZATION (DOM CONTENT LOADED) ---
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    startAutoSlide();

    // Render Awal Katalog
    renderProductsUI();

    // Render Produk Unggulan di Home (Ambil 3 produk pertama)
    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid) {
        allProducts.slice(0, 3).forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card glass-card';
            card.onclick = () => window.bukaHalamanDetail(p.name);
            card.innerHTML = `
                <img src="${p.images[0]}" style="width:100%; height:180px; object-fit:cover; border-radius:10px;">
                <h4>${p.name}</h4>
                <p style="color:#00ff88;">Rp ${p.price.toLocaleString('id-ID')}</p>`;
            featuredGrid.appendChild(card);
        });
    }

    // Listener Kategori
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProductsUI(btn.dataset.cat, document.getElementById('searchInput').value);
        };
    });

    // Listener Search
    const searchBtn = document.getElementById('searchButton');
    if(searchBtn) {
        searchBtn.onclick = () => {
            const activeCat = document.querySelector('.cat-btn.active')?.dataset.cat || 'all';
            renderProductsUI(activeCat, document.getElementById('searchInput').value);
        };
    }

    // Hamburger Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.onclick = () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        };
    }

    // Link Navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.onclick = function(e) {
            e.preventDefault();
            window.tampilkanHalaman(this.dataset.target);
            if (navMenu) navMenu.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        };
    });
    window.perbesarFoto = (src) => {
        const modal = document.getElementById("fotoModal");
        const modalImg = document.getElementById("imgFull");
        if(modal && modalImg) {
            modal.style.display = "flex"; // Gunakan flex agar gambar di tengah
            modalImg.src = src;
        }
    };
    // Fungsi untuk Membuka Modal (Perbesar Foto)
    window.perbesarFoto = (src) => {
        const modal = document.getElementById("fotoModal");
        const modalImg = document.getElementById("imgFull");
        if(modal && modalImg) {
            // Gunakan 'flex' agar CSS align-items: center berfungsi
            modal.style.display = "flex"; 
            modalImg.src = src;
        }
    };

    // Fungsi Baru untuk Menutup Modal
    window.tutupModal = (event) => {
        // Tutup hanya jika yang diklik adalah background modal ATAU tombol close
        // (Kita sudah mencegah klik pada gambar dengan event.stopPropagation() di HTML)
        document.getElementById("fotoModal").style.display = "none";
    };
});