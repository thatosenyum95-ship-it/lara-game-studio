# LARA APK — Katalog APK Android

Website katalog untuk aplikasi Android yang kami buat.

## Struktur
- `index.html` — halaman utama katalog
- `apps.json` — data semua aplikasi
- `apps/<slug>.html` — halaman detail tiap aplikasi
- `assets/screenshots/<slug>/` — screenshot aplikasi

## Menambah APK
Tambahkan objek baru ke `apps.json`, lalu buat halaman detail di `apps/<slug>.html`.

Untuk file APK berukuran besar, gunakan storage/release hosting khusus dan simpan URL download di data aplikasi; jangan menjadikan deployment Vercel sebagai penyimpanan binary APK.
