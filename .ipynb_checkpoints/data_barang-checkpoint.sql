
-- Create the Product Table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL, -- Untuk filter: baterai, bms, charger, dll.
    price DECIMAL(12, 2) NOT NULL, -- Menggunakan decimal agar akurat untuk mata uang
    images TEXT[] NOT NULL,        -- Array untuk menampung banyak URL gambar
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexing untuk mempercepat pencarian nama produk (search engine)
CREATE INDEX idx_product_name ON products(name);
CREATE INDEX idx_product_category ON products(category);

INSERT INTO products (name, category, price, images, description)
VALUES (
    'LFP Battery 12V 100Ah', 
    'baterai', 
    3200000.00, 
    ARRAY[
        'https://link-gambar-1.jpg', 
        'https://link-gambar-2.jpg', 
        'https://link-gambar-3.jpg'
    ], 
    'Baterai Lithium Iron Phosphate dengan siklus hidup 3000+.'
);

SELECT * FROM products;