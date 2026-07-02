---
title: Dashboard
description: Cek saldo, performa bulan ini, aktivitas terbaru, dan ringkasan usaha.
---

Halaman **Dashboard** adalah layar utama setelah login. Di sini owner atau kasir bisa melihat kondisi cabang aktif: saldo, kuota, pendapatan hari ini, pendapatan bulan ini, aktivitas terbaru, dan grafik performa.

![Tampilan Dashboard Utama](/images/dashboard.png)

## 1. Cabang Aktif

Data dashboard mengikuti cabang yang aktif di sidebar.

- Owner bisa memilih cabang lain.
- Kasir non-owner hanya melihat cabang yang diberikan owner.
- Semua transaksi, stok, arus kas, dan laporan otomatis mengikuti cabang tersebut.

## 2. Kartu Saldo

Bagian atas menampilkan:
- **Total Saldo**: gabungan saldo akun kas dan rekening cabang.
- **Saldo akun kas/bank utama**: contoh laci kas atau EDC bank yang paling penting.
- **Persentase naik/turun**: dibandingkan bulan lalu.

Warna indikator:
- Hijau berarti naik.
- Merah berarti turun.
- Abu-abu berarti tidak berubah atau belum ada pembanding.

## 3. Kuota Cabang dan User

Kartu kuota hanya muncul untuk owner. Kasir tidak melihat informasi limit paket.

- **Kuota Cabang** menunjukkan jumlah cabang terpakai dari batas paket.
- **Kuota User** menunjukkan jumlah user aktif dari batas paket.

## 4. Pendapatan Agen dan Fisik

Bagian pendapatan dipisah agar mudah dibaca:

- **Pendapatan Agen** berisi omzet, pendapatan kotor, admin bank/provider, pendapatan bersih, hutang belum lunas, dan jumlah transaksi agen.
- **Pendapatan Fisik** berisi pendapatan kotor, keuntungan, hutang belum lunas, dan jumlah transaksi fisik.

Setiap kartu menampilkan nilai **Hari ini** dan **Bulan ini**.

## 5. Aktivitas Terbaru

Panel aktivitas terbaru menampilkan transaksi agen dan transaksi fisik paling baru di cabang aktif. Jam yang tampil mengikuti waktu lokal perangkat.

## 6. Performa Bulan Ini

Grafik performa menampilkan ringkasan bulan berjalan, seperti pendapatan bersih dan jumlah transaksi. Gunakan grafik ini untuk melihat hari mana yang paling ramai.

## 7. Cara Memakai Dashboard untuk Kontrol Harian

Owner bisa memakai dashboard sebagai layar cek cepat:

1. Cek total saldo akun kas.
2. Bandingkan pendapatan hari ini dan bulan ini.
3. Lihat transaksi terbaru untuk memastikan aktivitas kasir normal.
4. Cek hutang belum lunas.
5. Cek grafik performa untuk melihat tren ramai atau sepi.

## 8. Jika Angka Terlihat Tidak Sesuai

Coba cek beberapa hal berikut:

- Cabang aktif sudah benar.
- Filter tanggal di halaman laporan sudah sesuai.
- Transaksi belum di-void atau belum tersimpan.
- Hutang belum lunas belum dihitung sebagai uang masuk.
- Akun kas yang dipilih saat transaksi sudah benar.

> [!TIP]
> Untuk audit detail, buka **Arus Kas** karena setiap perubahan saldo akun akan punya riwayat mutasi.
