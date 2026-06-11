---
title: Perubahan Stok (Koreksi & Transfer)
description: Nambah stok, nyatet barang rusak, atau transfer barang antar cabang.
---

Kalo kamu buka menu **Perubahan Stok**, kamu bakal liat sejarah naik turunnya stok setiap produk. Entah itu berkurang otomatis karena terjual di kasir, nambah karena refund, atau karena kamu edit manual.

Di sini juga tempatnya kalo kamu mau menambah stok dari supplier, mengurangi stok barang rusak, atau mendistribusikan stok dari satu cabang ke banyak cabang tujuan.

![Halaman Perubahan Stok](/images/perubahan-stok.png)

## 1. Nambah / Ngurangin Stok (Koreksi Manual)
Misal ada kiriman 10 kardus Indomie dari agen, atau ada 2 pcs rusak digigit tikus:
1. Klik tombol **Tambah** biru di halaman ini.
2. Pilih barang yang mau diubah stoknya.
3. Jenis Perubahan: Biarin di **Koreksi manual**.
4. Di kolom **Tambah/Kurangi Stok**, masukin angkanya:
   - Ketik `10` kalo barang nambah.
   - Ketik `-2` kalo barang rusak/dibuang (pake minus).
5. Tulis **Catatan** biar kasir lain tau (misal: "Indomie digigit tikus").
6. *(Opsional)* Kalo kulakan barang ini ngeluarin duit dari laci kasir/rekening, centang **Biaya tambah stok** lalu pilih akun kas yang dipakai. Sistem akan membuat arus kas keluar.
7. Klik **Simpan**.

## 2. Transfer / Distribusi ke Cabang

Kalo kamu punya lebih dari 1 cabang, stok dari cabang aktif bisa dibagi ke beberapa cabang tujuan sekaligus:

1. Pastiin kamu lagi buka Cabang A (sumber barang).
2. Klik tombol **Tambah**.
3. Pilih barangnya.
4. Jenis Perubahan: Pilih **Transfer / distribusi ke cabang**.
5. Tabel cabang tujuan akan muncul.
6. Isi jumlah transfer di cabang yang ingin menerima stok. Cabang yang kosong akan dilewati.
7. Klik **Simpan**.

Sistem akan mengurangi stok cabang sumber dan menambah stok di setiap cabang tujuan yang diisi.

> [!CAUTION]
> Kalau total distribusi melebihi stok sumber, tabel akan berubah merah dan tombol simpan tidak bisa dipakai sampai jumlah transfer dikurangi.
