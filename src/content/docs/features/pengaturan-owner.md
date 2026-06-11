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
