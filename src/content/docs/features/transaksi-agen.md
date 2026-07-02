---
title: Transaksi Agen
description: Catat tarik tunai, setor tunai, transfer, pembayaran, top up, dan pulsa.
---

Menu **Transaksi Agen** dipakai untuk mencatat layanan keuangan seperti tarik tunai, setor tunai, transfer, pembayaran, top up, pulsa, dan transaksi lainnya. Setiap transaksi akan masuk ke daftar transaksi, mempengaruhi akun kas/bank yang dipilih, dan membuat riwayat arus kas.

![Daftar Transaksi Agen](/images/transaksi-agen.png)

## 1. Ringkasan Halaman

Di bagian atas ada kartu ringkasan per tipe transaksi:

- **Semua**
- **Tarik Tunai**
- **Setor Tunai**
- **Transfer**
- **Pembayaran**
- **Top Up**
- **Pulsa & Kuota**

Setiap kartu menampilkan jumlah transaksi, nominal, dan profit sesuai filter tanggal yang aktif.

> [!NOTE]
> Filter tanggal tersimpan per halaman. Jika di halaman Transaksi Agen kamu memilih **Hari ini**, pilihan itu akan dipakai lagi saat halaman dibuka ulang tanpa mempengaruhi filter tanggal halaman lain.

## 2. Membuat Transaksi

![Tambah Transaksi Agen](/images/transaksi-agen-create.png)

Klik **Transaksi Baru**, lalu isi form:

1. **Tipe Transaksi**: pilih Tarik Tunai, Setor Tunai, Transfer, Pembayaran, Top Up, Pulsa & Kuota, atau Lainnya.
2. **Laci**: pilih akun kas fisik yang dipakai.
3. **Mesin EDC / Bank** atau **Akun Top Up / Pulsa**: pilih rekening atau akun provider yang terlibat.
4. **Nominal**: isi nilai pokok transaksi.
5. **Harga Jual / Biaya Admin**: isi nominal yang dibayar nasabah atau biaya jasa sesuai mode input.
6. **Admin Dalam**: isi biaya dari provider jika ada.
7. **Isi detail tambahan** jika ingin memilih customer atau menambahkan catatan.
8. Klik **Simpan**.

Pilihan **Laci**, **Mesin EDC / Bank**, dan akun provider bisa dicari berdasarkan nama akun. Akun bernama **Laci** diprioritaskan agar lebih cepat dipilih kasir.

## 3. Cara Hitungan Saldo

Sistem memisahkan uang pokok, admin customer, admin provider, dan profit bersih.

Contoh tarik tunai:
- Nasabah transfer ke rekening/EDC agen.
- Laci kas mengeluarkan uang tunai ke nasabah.
- Biaya admin menjadi profit setelah dikurangi admin provider.

Contoh top up atau pembayaran:
- Laci menerima uang dari nasabah.
- Akun top up/provider berkurang sesuai nominal.
- Selisih harga jual dan admin provider menjadi profit.

## 4. Hutang dan Customer

Untuk tipe **Top Up** dan **Pembayaran**, transaksi bisa dicatat sebagai hutang. Jika dicentang, pilih customer agar tagihan masuk ke menu **Daftar Hutang**.

## 5. Cetak Struk

Centang **Cetak struk** jika ingin mencetak setelah transaksi disimpan. Tombol Bluetooth dipakai untuk menghubungkan printer thermal melalui Web Bluetooth. Jika printer belum terhubung, ikon Bluetooth akan menunjukkan status belum tersambung.

> [!NOTE]
> Web Bluetooth hanya berjalan di browser yang mendukung, seperti Chrome atau Edge, dan perangkat harus punya Bluetooth aktif.

> [!IMPORTANT]
> Setelah transaksi tersimpan, data akan masuk ke daftar transaksi dan arus kas cabang aktif. Kalau kasir hanya punya akses satu cabang, transaksi hanya dibuat di cabang tersebut.

## 6. Void atau Batalkan Transaksi

Jika terjadi salah input, user yang punya izin dapat melakukan void transaksi. Void akan membuat penyesuaian agar saldo dan laporan tidak dobel.

Sebelum void, cek kembali:

- Tipe transaksi.
- Nominal pokok.
- Akun laci dan akun provider.
- Biaya admin dan admin dalam.
- Customer atau status hutang.

> [!CAUTION]
> Jangan menghapus atau void transaksi tanpa alasan jelas. Gunakan catatan internal agar owner tahu penyebab perubahan.
