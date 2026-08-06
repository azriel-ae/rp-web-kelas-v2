# XI TKJ 1 - Refactor

Versi ini tetap memakai HTML, CSS, JavaScript, dan Bootstrap. Kodenya dipisah berdasarkan tanggung jawab supaya satu section bisa diubah tanpa membongkar seluruh proyek.

## Jalankan lokal

```bash
node server.js
```

Buka `http://localhost:3000`.

Jangan membuka `index.html` langsung lewat `file://`, karena browser biasanya memblokir `fetch()` ke file JSON lokal.

## Mengisi konten

- Data siswa: `data/siswa.json`
- Struktur kelas: `data/struktur.json`
- Daftar galeri: `data/gallery.json`
- Logo: `assets/img/logo/smkn1gempol.png`
- Foto siswa: `assets/img/siswa/siswa1.png` sampai `siswa36.png`
- Foto galeri: `assets/img/galeri/fotokelas1.png` dan seterusnya

## Mengubah UI

Setiap bagian punya file CSS sendiri. Hero berada di `assets/css/hero.css`, daftar siswa di `assets/css/siswa.css`, dan seterusnya. Variabel global seperti warna, radius, dan shadow berada di `assets/css/variables.css`.
