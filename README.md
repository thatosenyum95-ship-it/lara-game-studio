# Lara Studio — Katalog APK Android

Lara Studio adalah katalog APK Android bergaya modern, dibuat untuk menyimpan, menampilkan, dan mendistribusikan aplikasi Android buatan Lara Studio.

## ✨ Fitur

- 📱 Katalog APK dinamis
- 🔍 Pencarian aplikasi
- 📂 Filter kategori otomatis
- ⭐ Featured
- 🔥 Popular
- 🆕 Latest
- 📸 Screenshot aplikasi
- 📦 Informasi versi, ukuran, dan minimum Android
- ⬇️ Download APK
- 📱 Responsive untuk mobile
- 💰 Slot iklan untuk monetisasi
- 🧩 Data aplikasi terpusat di `apps.json`

## 📁 Struktur

```
/
├── index.html
├── apps.json
├── apps/
│   ├── contoh.html
│   └── contoh/
│       ├── icon.webp
│       ├── app.apk
│       └── screenshots/
│           ├── 01.webp
│           ├── 02.webp
│           ├── 03.webp
│           └── 04.webp
└── README.md
```

## ➕ Menambahkan APK

Setiap aplikasi menggunakan satu objek di `apps.json`.

Field utama:

- `id` — ID unik aplikasi
- `name` — nama aplikasi
- `shortDescription` — deskripsi singkat
- `description` — deskripsi lengkap
- `category` — kategori
- `version` — versi
- `size` — ukuran APK
- `android` — minimum Android
- `iconUrl` — lokasi icon
- `screenshots` — daftar screenshot
- `downloadUrl` — lokasi APK
- `status` — misalnya `SEGERA HADIR` atau `TERSEDIA`
- `page` — halaman detail

Halaman detail yang sama dapat menerima ID melalui:

`apps/contoh.html?id=ID_APLIKASI`

## 💡 Catatan APK

Untuk APK yang sudah besar, sebaiknya binary tidak disimpan langsung di deployment website. Gunakan storage atau release hosting khusus dan masukkan URL download-nya ke `downloadUrl`.

## 🎨 Identitas

**Lara Studio**

Tema: dark, modern, digital  
Warna utama: deep purple + electric blue
