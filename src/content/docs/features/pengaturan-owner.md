---
title: Pengaturan Owner
description: Atur user, role akses, cabang, dan shift.
---

Menu **Pengaturan Owner** dipakai owner untuk mengatur user, role akses, cabang, dan shift. Menu ini hanya tampil jika user punya izin yang sesuai.

![Pengaturan Owner](/images/pengaturan-owner.png)

## 1. User vs Role
Biar nggak bingung:
- **User**: orang yang login ke aplikasi. User punya nama, email, password, role, dan cabang.
- **Role**: kumpulan izin akses. Nama role bebas, tetapi yang menentukan akses adalah tombol permission yang aktif.
- **Cabang**: lokasi kerja user. Kasir non-owner hanya melihat data cabang yang diberikan.

## 2. Membuat Role

Misal kamu mau kasir cuma bisa transaksi, tapi tidak bisa mengubah cabang:

1. Di menu Pengaturan Owner, masuk ke tab **Role Akses**.
2. Klik tombol **Tambah**.
3. Ketik nama role, misal "Kasir Toko".
4. Nyalakan permission yang dibutuhkan:
   - **Lihat Transaksi Agen** dan **Buat Transaksi Agen**.
   - **Lihat Akun Kas** jika kasir perlu memilih laci/rekening.
   - **Pilihan Rekening**, **Pilihan Item**, atau **Pilihan Customer** jika form membutuhkan pilihan tersebut.
   - Matikan **Cabang**, **Role**, atau **User** jika kasir tidak boleh mengatur data owner.
5. Klik **Simpan**. Selesai deh!

## 3. Daftarkan User

1. Masuk ke menu **User & Karyawan**, terus klik **Tambah**.
2. Masukin nama, email, dan password buat mereka login.
3. Pilih **Akses Cabang** tempat user bekerja.
4. Pilih **Role** yang sudah dibuat.
5. Klik **Simpan**.

Menu yang tidak diberi izin akan otomatis hilang dari sidebar user tersebut.

> [!IMPORTANT]
> Jangan mengandalkan nama role saja. Role bisa dibuat bebas oleh owner. Akses user ditentukan oleh permission yang aktif di role tersebut.

## 4. Mengubah User

Owner bisa mengubah data user jika ada perubahan nama, cabang, atau role.

Langkah umum:

1. Buka **User & Karyawan**.
2. Cari user yang ingin diubah.
3. Klik aksi edit.
4. Ubah cabang atau role jika diperlukan.
5. Simpan.

Jika user berpindah cabang, data baru yang dibuat setelah perubahan akan mengikuti cabang baru.

## 5. Menonaktifkan Akses Karyawan

Jika karyawan sudah tidak bekerja, owner sebaiknya segera mencabut aksesnya. Jika tersedia, nonaktifkan user. Jika tidak ada tombol nonaktif, ubah password atau hapus user sesuai kebutuhan operasional.

## 6. Rekomendasi Keamanan

- Jangan memakai satu akun untuk banyak kasir.
- Berikan role sesuai tugas, bukan akses penuh.
- Matikan izin hapus dan void untuk kasir biasa.
- Review role secara berkala.
- Pisahkan user per cabang agar laporan lebih jelas.
