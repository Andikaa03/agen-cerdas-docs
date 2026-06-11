---
title: Setup dan Pengenalan
description: Panduan awal memakai Budceipt.
---

Selamat datang di Budceipt, aplikasi pencatatan transaksi agen, POS barang fisik, arus kas, stok, hutang, cabang, user, role, dan laporan usaha.

Panduan ini ditujukan untuk owner, admin, dan kasir yang memakai aplikasi dari browser. Semua data mengikuti cabang aktif dan hak akses user yang sedang login.

## Alur Awal Owner

1. **Login atau daftar akun.** Owner akan otomatis punya akses penuh.
2. **Cek cabang aktif.** Pilih cabang dari sidebar jika usaha punya lebih dari satu cabang.
3. **Buat akun kas.** Tambahkan laci kas, rekening bank, EDC, atau akun top up yang dipakai transaksi.
4. **Atur preferensi akun.** Isi header/footer struk dan mode input transaksi.
5. **Buat user dan role.** Tentukan cabang user dan izin aksesnya.
6. **Input item dan kategori.** Ini diperlukan jika toko memakai Transaksi Fisik.

## Alur Awal Kasir

1. **Login dengan akun dari owner.**
2. **Pastikan cabang sudah benar.** Kasir non-owner hanya melihat cabang yang diberikan owner.
3. **Buka shift jika cabang memakai Mode Shift.** Kalau Mode Shift tidak aktif, kasir bisa langsung bertransaksi.
4. **Catat transaksi sesuai menu yang tampil.** Menu yang tidak diberi akses tidak akan muncul.

## Tentang Cabang dan Akses

Owner bisa melihat dan memilih semua cabang. User non-owner dikunci ke cabang yang diberikan di menu **User & Karyawan**, jadi data transaksi, stok, arus kas, dan laporan tidak bercampur antar cabang.

Hak akses diatur dari **Role Akses**. Nama role bisa bebas, misalnya "Kasir Pagi" atau "Admin Cabang"; yang menentukan akses adalah permission yang dinyalakan di role tersebut.
