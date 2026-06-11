---
title: Pengaturan Owner (Karyawan & Role)
description: Atur siapa aja yang bisa login dan menu apa aja yang boleh mereka buka.
---

Buat ngebantu jalanin toko, kamu pasti butuh karyawan atau kasir kan? Di menu **Pengaturan Owner** ini, kamu bisa bikinin mereka akun buat login, sekaligus ngebatesin fitur apa aja yang boleh mereka pake.

![Pengaturan Owner](/images/pengaturan-owner.png)

## 1. Role (Jabatan) vs Karyawan
Biar nggak bingung:
- **Karyawan**: Ini orangnya. Kamu masukin email dan password mereka di sini.
- **Role**: Ini "kunci" izin aksesnya. Kamu bikin Role (misal: "Kasir"), terus kamu atur menu apa aja yang boleh dibuka sama si Kasir. Terus Role ini dikasih ke Karyawan.

## 2. Bikin Role Baru
Misal kamu mau kasir cuma bisa jualan, tapi nggak boleh liat laporan pendapatan:
1. Di menu Pengaturan Owner, masuk ke tab **Role Akses**.
2. Klik tombol **Tambah**.
3. Ketik nama jabatannya, misal "Kasir Toko".
4. Tinggal geser tombol (ON/OFF) buat ngasih izin:
   - **Kasir Fisik**: Nyalain (ON)
   - **Rekapan & Shift**: Nyalain (ON)
   - **Laporan Laba/Rugi**: Matiin (OFF)
5. Klik **Simpan**. Selesai deh!

## 3. Daftarin Karyawan
1. Masuk ke tab **Daftar Karyawan**, terus klik **Tambah**.
2. Masukin nama, email, dan password buat mereka login.
3. Di pilihan **Lokasi Cabang Aktif**, pilih toko tempat mereka jaga (biar stoknya nggak nyampur ke toko lain).
4. Di pilihan **Role**, pilih "Kasir Toko" yang tadi udah dibuat.
5. Selesai! Karyawan kamu udah bisa login pake email dan password itu. Menu yang dilarang bakal otomatis ngilang dari layar mereka!
