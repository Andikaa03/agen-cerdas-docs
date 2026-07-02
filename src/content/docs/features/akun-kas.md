---
title: Akun Kas
description: Atur laci duit dan rekening bank yang kamu pake buat mutasi.
---

Menu **Akun Kas** dipakai untuk mengelola laci kas, rekening bank, EDC, e-wallet, atau akun top up yang dipakai transaksi. Setiap akun kas terikat ke cabang, sehingga saldo cabang tidak bercampur.

![Daftar Akun Kas](/images/akun-kas.png)

## 1. Tambah Akun Kas Baru
Misalnya kamu baru buka rekening Mandiri khusus buat usaha agen, cara masukinnya gini:
1. Klik menu **Akun Kas**.
2. Klik tombol **Tambah**.
3. Di kotak yang muncul, ketik nama akunnya (Contoh: "Bank Mandiri" atau "Laci Toko Depan").
4. Pilih tipe akun, misalnya Kas, Bank, EDC, atau akun lain sesuai kebutuhan.
5. Isi saldo awal jika akun sudah punya saldo.
6. Jika perlu, isi provider, nomor rekening, dan catatan.
7. Klik **Simpan**.

![Tambah Akun Kas](/images/akun-kas-create.png)

## 2. Gunanya Buat Apa?
Kalo kamu nyatet tarik tunai, setor tunai, top up, pembayaran, atau penjualan fisik, sistem akan meminta akun kas yang dipakai. Dari pilihan itu, saldo dan arus kas akan otomatis berubah sesuai transaksi.

## 3. Ubah Saldo

Owner atau user yang diberi akses bisa melakukan **Ubah Saldo** untuk koreksi saldo akun. Setiap perubahan saldo akan tercatat di Arus Kas agar riwayatnya tetap jelas.

Jenis aksi yang umum tersedia:

- **Saldo Baru**: menyetel saldo akun ke nominal tertentu.
- **Penambahan**: menambah saldo karena ada uang masuk manual.
- **Penarikan**: mengurangi saldo karena uang keluar manual.
- **Pindah Saldo**: memindahkan saldo dari satu akun ke akun lain.
- **Transfer Cabang**: memindahkan saldo ke akun cabang lain jika fitur cabang aktif.

## 4. Prioritas Laci

Akun dengan nama **Laci** diprioritaskan di daftar pilihan akun kas. Ini memudahkan kasir memilih akun tunai utama tanpa perlu mencari terlalu lama.

Contoh penamaan yang disarankan:

- `Laci (Kas)`
- `Laci Cabang Utama`
- `Laci Shift Pagi`

## 5. Kapan Harus Koreksi Saldo?

Koreksi saldo sebaiknya dipakai untuk kondisi khusus, misalnya:

- Saldo awal akun baru belum sesuai.
- Ada selisih setelah cocokkan uang fisik.
- Ada transaksi lama yang tidak sempat dicatat.
- Ada uang masuk/keluar non-transaksi yang perlu dicatat.

> [!CAUTION]
> Jika transaksi aslinya masih bisa dibuat dari menu transaksi, lebih baik catat dari menu transaksi. Koreksi saldo hanya dipakai jika memang butuh penyesuaian manual.
