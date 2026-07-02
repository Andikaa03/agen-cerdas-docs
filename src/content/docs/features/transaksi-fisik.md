---
title: Transaksi Fisik
description: Catat penjualan barang fisik dan pembayaran pelanggan.
---

Menu **Transaksi Fisik** dipakai untuk mencatat penjualan barang toko. Barang yang bisa dijual berasal dari menu **Item**, stok mengikuti cabang aktif, dan hasil pembayaran akan masuk ke akun kas yang dipilih.

![Tampilan Kasir POS](/images/transaksi-fisik.png)

## 1. Menambahkan Item ke Keranjang

1. Buka menu **Transaksi Fisik**.
2. Pilih kategori jika ingin menyaring item.
3. Pilih item yang dibeli pelanggan.
4. Isi jumlah barang.
5. Klik **Tambah** agar item masuk ke keranjang.

Kalau stok item kosong, item tidak bisa dijual sampai stok ditambah dari menu **Perubahan Stok**.

Kolom pilih item bisa dicari berdasarkan nama item. Ini membantu saat jumlah produk sudah banyak.

## 2. Pembayaran

Saat checkout, pilih metode pembayaran:

- **Cash**: uang masuk ke laci kas.
- **Transfer / Bank**: uang masuk ke rekening bank.
- **E-Wallet**: uang masuk ke akun e-wallet.
- **Hutang**: transaksi masuk ke daftar hutang customer.

Pilih customer jika transaksi perlu dicatat atas nama pelanggan tertentu.

Pilihan **Kas Tujuan** bisa dicari berdasarkan nama akun kas. Akun bernama **Laci** muncul paling atas agar transaksi tunai lebih cepat.

## 3. Setelah Checkout

Saat transaksi berhasil disimpan:

> [!NOTE]
> 1. Stok item di cabang aktif berkurang.
> 2. Riwayat penjualan masuk ke daftar Transaksi Fisik.
> 3. Arus kas dibuat sesuai metode pembayaran.
> 4. Hutang customer dibuat jika pembayaran dicatat sebagai hutang.
> 5. Profit dihitung dari harga jual dikurangi modal/HPP jika data modal item tersedia.

## 4. Diskon dan Catatan

Gunakan kolom diskon jika pelanggan mendapat potongan harga. Catatan dipakai untuk informasi tambahan, misalnya nomor pesanan, alasan diskon, atau permintaan khusus pelanggan.

## 5. Cetak Struk

Centang **Cetak struk** jika ingin mencetak bukti transaksi. Jika memakai printer Bluetooth, sambungkan printer terlebih dahulu dari tombol Bluetooth di form transaksi.

> [!TIP]
> Atur header dan footer struk dari menu **Preferensi Akun** agar struk menampilkan nama toko, alamat, atau ucapan terima kasih.
