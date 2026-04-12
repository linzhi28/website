// products.js
const allProducts = [
    {
        name: "Hexa Power® Baterai 55ah",
        price: 12000000,
        category: "Baterai",
        description: "Baterai Lithium performa tinggi dengan kapasitas 60V 20Ah. Cocok untuk modifikasi motor listrik harian. Tahan hingga 1000 cycle pengisian.",
        images: ["uploads/baterai.jpg"]
    },   
    {
        name: "Hexa Power® Baterai 80ah",
        price: 18000000,
        category: "Baterai",
        description: "Baterai Lithium performa tinggi dengan kapasitas 60V 20Ah. Cocok untuk modifikasi motor listrik harian. Tahan hingga 1000 cycle pengisian.",
        images: ["uploads/baterai80ah.jpeg"]
    },
    {
        name: "Hexa Power® Baterai 66AH +GPS",
        price: 13500000,
        category: "Baterai",
        description: "Baterai Lithium performa tinggi dengan kapasitas 60V 20Ah. Cocok untuk modifikasi motor listrik harian. Tahan hingga 1000 cycle pengisian.",
        images: ["uploads/baterai 66AH +GPS.jpeg"]
    },
    {
        name: "Hexa Power® charger pro 2800",
        price: 2200000,
        category: "Charger",
        description: "Charger Motor Listrik WiFi Hexa Power Pro+ 30A<br>Adjustable 3-30A 3-20A 24-92V XT90 M23 EU Supports<br>Bisa untuk :<br>Li-ion<br>83-84V M23<br>83-84V XT90<br>Gesits <br>Polytron FoxR <br>BRT<br><br><br>LiFePO4 :<br>87.6V M23<br>87.6V XT90",
        images: ["uploads/charger pro 2800 ukuran.jpeg", "uploads/spec charger pro 2800.jpeg", "uploads/fisik charger pro 2800.jpeg"]
    },
    {
        name: "Hexa Power® charger pro 1850",
        price: 1200000,
        category: "Charger",
        description: "Charger Motor Listrik Knop Putar<br>Hexa Power Air<br>Adjustable Tegangan 10-92.4V<br>Adjustable Arus 3-20A <br>Socket XT90 M23 EU Supports<br>Bisa untuk :<br>Li-ion<br>84V M23<br>83-84V XT90<br>Gesits <br>Polytron FoxR <br>BRT<br>Alva Cervo (with Adapter)<br><br><br>Note : <br>1. Charger Garansi 1 bulan",
        images: ["uploads/ukuran charger pro 1850.jpeg", "uploads/spec charger pro 1850.jpeg", "uploads/fisik charger pro 1850.jpeg"]
    },
    {
        name: "Hexa Power® Smart Keyless Motor Listrik 72V ",
        price: 2000000,
        category: "Aksesoris",
        description: "🔑 Smart Keyless Motor Listrik 72V | Aman & Modern (HEXA POWER)<br>Smart Keyless 72V HEXA POWER adalah sistem kunci pintar khusus motor listrik 72V yang memberikan keamanan ekstra dan kemudahan penggunaan. Tanpa anak kunci, cukup dengan remote – motor lebih aman, praktis, dan modern.<br>⭐ Keunggulan Produk:<br>✅ Sistem keyless remote (tanpa kunci)<br>✅ Khusus motor listrik 72V<br>✅ Keamanan lebih tinggi, anti maling<br>✅ Respon cepat & stabil<br>✅ Desain ringkas & kuat<br>✅ Mudah dipasang<br>🔧 Spesifikasi Singkat:<br>Tipe: Smart Keyless System<br>Tegangan: 72V<br>Kontrol: Remote wireless<br>Aplikasi: Motor listrik<br>🎯 Cocok Untuk:<br>Motor listrik 72V<br>Upgrade sistem keamanan<br>Pengganti kunci manual<br>Penggunaan harian & profesional<br>📦 Isi Paket:<br>1x Modul Smart Keyless<br>2x Remote HEXA POWER<br>Kabel & aksesoris standar<br>💯 Produk berkualitas & siap pakai<br>Aman | Praktis | Tampilan modern",
        images: ["uploads/keyless chain.jpeg"]
    },
    {
        name: "Hexa Power® Smart Solder JBC 470",
        price: 1600000,
        category: "Elektronika",
        description: "🔥 Smart Solder JBC 470 | Solder Station Profesional Presisi Tinggi<br>Smart Solder JBC 470 adalah solder station profesional dengan teknologi pintar untuk hasil solder rapi, cepat, dan stabil. Cocok untuk teknisi elektronik, servis PCB, hingga industri manufaktur.<br>⭐ Keunggulan Produk:<br>✅ Pemanasan super cepat<br>✅ Suhu stabil & presisi tinggi<br>✅ Teknologi smart – hemat daya<br>✅ Aman untuk komponen sensitif<br>✅ Kompatibel berbagai mata solder JBC<br>✅ Kualitas industri & tahan lama<br>🔧 Spesifikasi Singkat:<br>Tipe: Smart Solder Station<br>Model: JBC 470<br>Kontrol suhu digital<br>Desain profesional & ergonomis<br>🎯 Cocok Digunakan Untuk:<br>Servis HP & laptop<br>Perbaikan PCB & SMD<br>Bengkel elektronik<br>Produksi & maintenance industri<br>📦 Isi Paket:<br>1x Unit Smart Solder JBC 470<br>1x Handle solder<br>Kabel & aksesoris standar<br>(Isi paket dapat menyesuaikan)<br>💯 Original & kualitas premium<br>Siap pakai | Pengiriman aman | Support teknisi",
        images: ["uploads/solder.jpeg"]
    },
    {
        name: "Hexa Power® Adapter SPKLU Type 2",
        price: 270000,
        category: "Aksesoris",
        description: "🔌 Adapter SPKLU Type 2 | Pin Tembaga | Untuk Motor Listrik<br>Adapter SPKLU Type 2 ini dirancang khusus untuk memudahkan pengisian daya motor listrik di stasiun pengisian umum (SPKLU) dengan konektor Type 2. Menggunakan pin berbahan tembaga murni untuk konduktivitas maksimal, pengisian lebih stabil, aman, dan efisien.<br>⭐ Keunggulan Produk:<br>✅ Kompatibel SPKLU konektor Type 2<br>✅ Pin tembaga berkualitas tinggi – arus lebih stabil<br>✅ Minim panas & tahan arus besar<br>✅ Konstruksi kuat & presisi<br>✅ Aman untuk penggunaan harian<br>✅ Plug & play, mudah digunakan<br>🔧 Spesifikasi Singkat:<br>Tipe: Adapter Charger SPKLU<br>Konektor: Type 2<br>Material pin: Tembaga<br>Aplikasi: Motor listrik<br>Fungsi: Penghubung charger SPKLU ke motor listrik<br>🎯 Cocok Digunakan Untuk:<br>Pengisian motor listrik di SPKLU umum<br>Upgrade sistem charging motor listrik<br>Pengguna motor listrik harian & fleet<br>📦 Isi Paket:<br>1x Adapter SPKLU Type 2<br>⚠️ Catatan Penting:<br>Pastikan kompatibilitas dengan sistem motor listrik Anda<br>Disarankan pemasangan & penggunaan sesuai standar keamanan<br>💯 Solusi praktis & aman untuk charging motor listrik di SPKLU.<br>Kuat | Stabil | Tahan lama",
        images: ["uploads/tempat kabel.jpeg", "uploads/tempat kabel2.jpeg",]
    },
    {
        name: "Hexa Power® Smart BMS Support CANBUS GESITS 50/100A Aktif dan pasif balancer 1A",
        price: 1000000,
        category: "BMS",
        description: "BMS Smart Hexa Power HP-B24S-100P Support 10S-24S Active Passive Balance 1A<br>Deskripsi Produk:<br>Lindungi dan optimalkan performa baterai rakitan Anda dengan HEXA POWER Smart BMS.<br>Hexa Power Smart BMS seri HP-B24S-100P adalah solusi manajemen baterai canggih yang dirancang untuk sistem baterai Lithium (Li-ion/LiFePO4) dengan konfigurasi seri yang fleksibel (10S hingga 24S). Dilengkapi dengan teknologi penyeimbang ganda (Aktif & Pasif), BMS ini memastikan setiap sel baterai Anda tetap awet dan memiliki performa maksimal.<br>Sangat cocok untuk aplikasi PLTS (Solar Home System), Sepeda/Motor Listrik (EV), dan Power Wall.<br>Fitur Unggulan:<br>✅ Dual Balancing Technology: Memiliki fitur penyeimbang Aktif dan Pasif (1A) yang bekerja efektif meratakan tegangan antar sel, memperpanjang umur baterai secara signifikan.<br>✅ High Power Output: Mampu menangani arus kontinu hingga 100A dan arus puncak (peak) hingga 200A, cocok untuk beban berat.<br>✅ Flexible Series: Dapat digunakan untuk berbagai konfigurasi baterai mulai dari 10 Seri hingga 24 Seri.<br>✅ Smart Interfaces: Dilengkapi berbagai port koneksi lengkap:<br>LCD: Untuk layar monitoring eksternal.<br>GPS: Support modul GPS (untuk tracking lokasi pada kendaraan listrik).<br>TEMP: Sensor suhu untuk proteksi panas berlebih.<br>SW: Port switch on/off.<br>COM: Port komunikasi data.<br>Spesifikasi Teknis:<br>Merk: HEXA POWER®<br>Model/Tipe: HP-B24S-100P<br>Jenis: Smart BMS,<br>Jumlah Seri Baterai: 10S ~ 24S (Adjustable)<br>Arus Kontinu (Continuous Current): 100A<br>Arus Puncak (Peak Current): 200A<br>Tipe Balancing: Aktif - Pasif (Hybrid)<br>Arus Balancing: 1A<br>Port Koneksi: HEAT, COM, SW, LCD, TEMP, GPS<br>Kelengkapan dalam Paket:<br>1x Unit Smart BMS HEXA POWER HP-B24S-100P<br>1x Kabel/Socket Wiring (Balancing Wires)<br>(Tambahkan item lain jika ada, misal: Sensor suhu, Modul Bluetooth, atau Baut)<br>Catatan Penting:<br>Pemasangan Profesional: Pastikan pemasangan dilakukan oleh teknisi yang mengerti skema kelistrikan baterai lithium. Kesalahan pemasangan kabel (wiring) dapat merusak BMS.<br>Konfigurasi: Pastikan urutan kabel balancing (B-, B1, B2... dst) sesuai dengan diagram yang tertera pada unit.<br>Segera amankan investasi baterai Anda dengan BMS berkualitas tinggi dari Hexa Power! Stok terbatas, silakan diorder.",
        images: ["uploads/BMS 50A.jpeg"]
    },  
    {
        name: "Hexa Power® Smart BMS Support UART / CAN / RS485 100/200A Aktif dan pasif balancer 1A",
        price:850000,
        category: "BMS",
        description: "BMS Smart Hexa Power HP-B24S-100P Support 10S-24S Active Passive Balance 1A<br>Deskripsi Produk:<br>Lindungi dan optimalkan performa baterai rakitan Anda dengan HEXA POWER Smart BMS.<br>Hexa Power Smart BMS seri HP-B24S-100P adalah solusi manajemen baterai canggih yang dirancang untuk sistem baterai Lithium (Li-ion/LiFePO4) dengan konfigurasi seri yang fleksibel (10S hingga 24S). Dilengkapi dengan teknologi penyeimbang ganda (Aktif & Pasif), BMS ini memastikan setiap sel baterai Anda tetap awet dan memiliki performa maksimal.<br>Sangat cocok untuk aplikasi PLTS (Solar Home System), Sepeda/Motor Listrik (EV), dan Power Wall.<br>Fitur Unggulan:<br>✅ Dual Balancing Technology: Memiliki fitur penyeimbang Aktif dan Pasif (1A) yang bekerja efektif meratakan tegangan antar sel, memperpanjang umur baterai secara signifikan.<br>✅ High Power Output: Mampu menangani arus kontinu hingga 100A dan arus puncak (peak) hingga 200A, cocok untuk beban berat.<br>✅ Flexible Series: Dapat digunakan untuk berbagai konfigurasi baterai mulai dari 10 Seri hingga 24 Seri.<br>✅ Smart Interfaces: Dilengkapi berbagai port koneksi lengkap:<br>LCD: Untuk layar monitoring eksternal.<br>GPS: Support modul GPS (untuk tracking lokasi pada kendaraan listrik).<br>TEMP: Sensor suhu untuk proteksi panas berlebih.<br>SW: Port switch on/off.<br>COM: Port komunikasi data.<br>Spesifikasi Teknis:<br>Merk: HEXA POWER®<br>Model/Tipe: HP-B24S-100P<br>Jenis: Smart BMS,<br>Jumlah Seri Baterai: 10S ~ 24S (Adjustable)<br>Arus Kontinu (Continuous Current): 100A<br>Arus Puncak (Peak Current): 200A<br>Tipe Balancing: Aktif - Pasif (Hybrid)<br>Arus Balancing: 1A<br>Port Koneksi: HEAT, COM, SW, LCD, TEMP, GPS<br>Kelengkapan dalam Paket:<br>1x Unit Smart BMS HEXA POWER HP-B24S-100P<br>1x Kabel/Socket Wiring (Balancing Wires)<br>(Tambahkan item lain jika ada, misal: Sensor suhu, Modul Bluetooth, atau Baut)<br>Catatan Penting:<br>Pemasangan Profesional: Pastikan pemasangan dilakukan oleh teknisi yang mengerti skema kelistrikan baterai lithium. Kesalahan pemasangan kabel (wiring) dapat merusak BMS.<br>Konfigurasi: Pastikan urutan kabel balancing (B-, B1, B2... dst) sesuai dengan diagram yang tertera pada unit.<br>Segera amankan investasi baterai Anda dengan BMS berkualitas tinggi dari Hexa Power! Stok terbatas, silakan diorder.",
        images: ["uploads/BMS 100A(1).jpeg"]
    },        
];