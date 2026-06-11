---
title: Item
description: Kelola item produk, harga jual, modal, SKU, kategori, dan stok cabang.
---

Menu **Item** dipakai untuk mendaftarkan barang yang dijual di **Transaksi Fisik**. Setiap item bisa punya harga jual, modal/HPP, SKU, barcode, kategori, dan stok sesuai cabang aktif.

![Halaman Produk](/images/inventaris.png)

## 1. Buat Kategori Dulu

Biar item gampang dicari saat transaksi, buat kategori terlebih dahulu.

1. Buka menu **Kategori**.
2. Klik tombol **Tambah**.
3. Ketik nama kategori, misalnya "Sembako", "Minuman", atau "Aksesoris".
4. Klik **Simpan**.

## 2. Tambah Item Baru

1. Buka menu **Item**.
2. Klik tombol **Tambah**.
3. Isi data item:
   - **Nama Item**
   - **Kategori**
   - **Harga Jual**
   - **Modal / HPP** jika ingin profit dihitung otomatis
   - **SKU atau Barcode** jika dipakai
   - **Stok awal** untuk cabang aktif
4. Klik **Simpan**.

> [!TIP]
> **Punya banyak barang?** 
> Gunakan fitur import jika tersedia di halaman Item untuk memasukkan banyak produk sekaligus dari file spreadsheet.

## 3. Mengubah Stok

Setelah item dibuat, penambahan, pengurangan, atau transfer stok sebaiknya dilakukan dari menu **Perubahan Stok**. Dengan begitu semua riwayat stok tetap tercatat rapi.

## 4. Akses Kasir

Kasir hanya bisa melihat item sesuai cabang yang diberikan. Kalau permission **Pilihan Item** dimatikan di Role Akses, kasir tidak bisa memilih item di form yang membutuhkan pilihan item.
