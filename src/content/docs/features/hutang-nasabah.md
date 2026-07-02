---
title: Hutang & Nasabah
description: Kelola daftar hutang dan pembayaran customer.
---

Menu **Hutang & Nasabah** berisi **Daftar Hutang** dan **Buku Pelanggan**. Fitur ini dipakai saat transaksi agen atau transaksi fisik belum dibayar penuh oleh customer.

![Halaman Hutang Nasabah](/images/hutang-nasabah.png)

## 1. Daftarin Nasabahnya Dulu

Sebelum ngasih kasbon, pastiin nama orangnya udah ada di sistem. Ibaratnya bikin buku kontak dulu.

1. Buka menu **Buku Pelanggan**.
2. Klik tombol **Tambah**.
3. Ketik nama orangnya (misal: "Bapak Budi"). Kalo mau lebih jelas, masukin nomor HP atau alamatnya juga boleh.
4. Klik **Simpan**.

## 2. Cara Nyatet Pas Dia Ngutang

Anggap aja Pak Budi beli token listrik harganya 50 ribu, tapi dia bilang "Ngutang dulu ya". 
Cara nyatetnya pas di kasir (POS atau Transaksi Agen):

1. Di Transaksi Agen, centang **Catat sebagai hutang** untuk tipe yang mendukung.
2. Di Transaksi Fisik, pilih metode pembayaran **Hutang**.
3. Pilih customer yang berhutang.
4. Simpan transaksi.
5. Sistem akan membuat tagihan di **Daftar Hutang**.

## 3. Pas Dia Bayar Utang (Nyicil)

Eh ternyata besoknya Pak Budi mampir dan bayar utangnya 20 ribu dulu (nyicil). Begini cara nyatetnya:

1. Buka menu **Daftar Hutang**.
2. Cari tagihan Pak Budi yang statusnya `Belum Lunas`.
3. Klik aksi bayar di barisan tagihan itu.
4. Masukin duit yang dia kasih: `20000`.
5. Klik konfirmasi.
6. Beres! Nanti sistem bakal otomatis **nambahin 20 ribu ke Kas Laci** kamu, dan sisa utang Pak Budi tinggal 30 ribu.

> [!NOTE]
> Pembayaran hutang akan membuat arus kas masuk. Sisa hutang otomatis berkurang sesuai nominal yang dibayar.

## 4. Status Hutang

Status hutang membantu membaca kondisi tagihan:

- **Belum Lunas**: belum ada pembayaran atau belum cukup lunas.
- **Sebagian**: pelanggan sudah membayar sebagian.
- **Lunas**: hutang sudah terbayar penuh.

## 5. Masuk ke Akun Kas

Saat menerima pembayaran hutang, pilih akun kas tujuan agar uang masuk tercatat jelas. Jika pembayaran tidak ingin mempengaruhi kas, pilih opsi untuk tidak memasukkan ke kas.

Pilihan akun kas bisa dicari berdasarkan nama, dan akun **Laci** muncul di urutan atas.

## 6. Tips Mengelola Kasbon

- Pilih customer sebelum menyimpan hutang.
- Isi catatan agar alasan hutang jelas.
- Catat pembayaran cicilan segera saat uang diterima.
- Cek daftar hutang secara rutin agar tagihan tidak menumpuk.
- Gunakan Buku Pelanggan untuk menyimpan nomor HP pelanggan.
