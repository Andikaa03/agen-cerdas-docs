---
title: Arus Kas
description: Lacak mutasi uang masuk dan keluar per akun kas.
---

Pernah ngerasa bingung, "Perasaan tadi jualan banyak, kok duit di laci kasir cuma segini? Sisanya ke mana ya?" 
Nah, di menu **Arus Kas** kamu bisa melihat semua mutasi uang masuk dan keluar dari akun kas cabang aktif.

![Laporan Arus Kas](/images/arus-kas.png)

## 1. Log Mutasi Uang
Semua transaksi sekecil apapun bakal ninggalin jejak di sini:
- Penjualan fisik tunai membuat uang masuk ke laci.
- Transaksi agen membuat mutasi sesuai tipe transaksi dan akun yang dipilih.
- Pembayaran hutang membuat uang masuk ke akun kas.
- Koreksi saldo akun kas membuat catatan masuk atau keluar.
- Biaya tambah stok membuat arus kas keluar.

Setiap baris menampilkan waktu, akun, sumber, arah, jumlah, saldo akhir, dan tombol detail transaksi jika tersedia.

## 2. Filter dan Grafik

Gunakan filter tanggal untuk melihat arus kas pada periode tertentu. Tombol **Tampilkan Grafik** membantu melihat pergerakan saldo akun secara visual.

## 3. Kenapa Fitur Ini Penting?

Arus Kas membantu owner mencocokkan saldo laci, bank, dan EDC dengan transaksi harian. Kalau ada selisih, owner bisa melihat jam, sumber transaksi, akun yang berubah, dan saldo akhir setelah mutasi.

## 4. Sumber Arus Kas

Arus kas bisa dibuat otomatis dari beberapa menu:

- Transaksi Agen.
- Transaksi Fisik.
- Pembayaran hutang.
- Perubahan stok dengan biaya pembelian.
- Ubah Saldo di Akun Kas.
- Transfer saldo antar akun.
- Transfer saldo antar cabang.

## 5. Tips Audit Harian

1. Filter tanggal ke hari yang ingin dicek.
2. Pilih akun kas tertentu, misalnya `Laci`.
3. Bandingkan saldo akhir sistem dengan uang fisik.
4. Jika ada selisih, cek mutasi terakhir satu per satu.
5. Gunakan catatan transaksi untuk menelusuri penyebabnya.

> [!TIP]
> Jika sering ada selisih, biasakan kasir mencatat transaksi langsung saat terjadi dan menutup shift setiap selesai kerja.
