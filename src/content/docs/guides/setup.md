---
title: Setup dan Pengenalan
description: Panduan awal memakai Agen Cerdas.
---

Selamat datang di Agen Cerdas, aplikasi pencatatan transaksi agen, POS barang fisik, arus kas, stok, hutang, cabang, user, role, dan laporan usaha.

Panduan ini ditujukan untuk owner, admin, dan kasir yang memakai aplikasi dari browser. Semua data mengikuti cabang aktif dan hak akses user yang sedang login.

## Konsep Penting

Sebelum mulai, pahami beberapa istilah yang sering muncul di aplikasi:

- **Cabang**: lokasi usaha. Transaksi, akun kas, stok, laporan, dan hutang mengikuti cabang aktif.
- **Akun Kas**: tempat uang dicatat, misalnya Laci, rekening bank, EDC, e-wallet, atau saldo provider.
- **Laci**: akun kas tunai utama yang biasa dipakai kasir.
- **User**: orang yang login ke aplikasi.
- **Role**: kumpulan izin yang menentukan menu dan aksi apa saja yang boleh dipakai user.
- **Transaksi Agen**: transaksi layanan keuangan seperti tarik tunai, setor, transfer, top up, pulsa, dan pembayaran.
- **Transaksi Fisik**: penjualan barang toko/POS.

## Alur Awal Owner

1. **Login atau daftar akun.** Owner akan otomatis punya akses penuh.
2. **Cek cabang aktif.** Pilih cabang dari sidebar jika usaha punya lebih dari satu cabang.
3. **Buat akun kas.** Tambahkan laci kas, rekening bank, EDC, atau akun top up yang dipakai transaksi.
4. **Atur preferensi akun.** Isi header/footer struk dan mode input transaksi.
5. **Buat user dan role.** Tentukan cabang user dan izin aksesnya.
6. **Input item dan kategori.** Ini diperlukan jika toko memakai Transaksi Fisik.

## Setup Akun Kas yang Disarankan

Minimal buat satu akun **Laci** agar kasir punya tempat mencatat uang tunai.

Contoh akun yang umum dibuat:

- **Laci (Kas)** untuk uang tunai di meja kasir.
- **BRI EDC** atau **BCA EDC** untuk saldo mesin EDC/bank.
- **DANA/OVO/Gopay** jika menerima pembayaran e-wallet.
- **Server Pulsa** jika melayani pulsa, token, atau paket data.
- **Akun Top Up** untuk saldo provider pembayaran.

> [!TIP]
> Gunakan nama akun yang mudah dikenali kasir. Contoh: `Laci Cabang Utama`, `BRI EDC Nurul`, atau `DANA Mosriah`.

## Alur Awal Kasir

1. **Login dengan akun dari owner.**
2. **Pastikan cabang sudah benar.** Kasir non-owner hanya melihat cabang yang diberikan owner.
3. **Buka shift jika cabang memakai Mode Shift.** Kalau Mode Shift tidak aktif, kasir bisa langsung bertransaksi.
4. **Catat transaksi sesuai menu yang tampil.** Menu yang tidak diberi akses tidak akan muncul.

## Tentang Cabang dan Akses

Owner bisa melihat dan memilih semua cabang. User non-owner dikunci ke cabang yang diberikan di menu **User & Karyawan**, jadi data transaksi, stok, arus kas, dan laporan tidak bercampur antar cabang.

Hak akses diatur dari **Role Akses**. Nama role bisa bebas, misalnya "Kasir Pagi" atau "Admin Cabang"; yang menentukan akses adalah permission yang dinyalakan di role tersebut.

## Setup Role Kasir Minimal

Untuk kasir yang hanya bertugas transaksi, aktifkan permission sesuai kebutuhan toko:

- Lihat Dashboard.
- Lihat dan buat Transaksi Agen.
- Lihat dan buat Transaksi Fisik jika memakai POS.
- Pilihan Rekening/Akun Kas.
- Pilihan Item dan Kategori jika memakai POS.
- Pilihan Customer jika transaksi bisa hutang.
- Lihat Hutang jika kasir boleh menerima pembayaran hutang.
- Shift jika cabang memakai Mode Shift.

Matikan permission sensitif seperti hapus data, pengaturan owner, role akses, dan langganan jika tidak diperlukan.

## Setelah Setup Selesai

Lanjutkan dengan membaca **Operasional Harian** untuk memahami alur kerja harian dari buka toko sampai tutup shift.
