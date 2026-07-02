---
title: Preferensi Akun (Pengaturan)
description: Atur format struk kasir dan cara input transaksi harian kamu.
---

Menu **Preferensi Akun** adalah tempat mengatur teks struk dan mode input transaksi. Pengaturan ini membantu form transaksi mengikuti kebiasaan toko.

![Halaman Preferensi Akun](/images/preferensi-akun.png)

## 1. Atur Teks Struk (Header & Footer)

Biar kelihatan lebih profesional pas nge-print struk buat pelanggan, kamu bisa tambahin nama toko atau ucapan terima kasih:

- **Header Struk**: Ini teks yang muncul di paling atas struk. Cocok buat diisi Nama Toko, Alamat, atau Nomer WhatsApp. 
  *(Contoh: Toko Berkah - Jl. Mawar No. 12 | WA: 0812345678)*
- **Footer Struk**: Ini teks yang muncul di paling bawah struk. Cocok buat ucapan terima kasih atau info garansi.
  *(Contoh: Terima kasih sudah belanja. Barang yang sudah dibeli tidak dapat ditukar)*

Kalo udah diganti, klik **Simpan**. Struk yang dicetak dari Transaksi Agen dan Transaksi Fisik akan mengikuti teks ini.

## 2. Preferensi Transaksi (Pilih Mode Input)

Tiap agen punya kebiasaan beda-beda pas ngitung untung. Di bagian **Preferensi Transaksi**, kamu bisa memilih mode input bawaan untuk jenis layanan seperti Tarik Tunai, Pulsa, atau Transfer.

Ada 2 pilihan mode:

### Mode "Biaya Admin" (Paling Sering Dipake)
Kalo kamu pilih mode ini, kasir mengisi **Nominal** dan **Biaya Admin**. Aplikasi menghitung total yang harus dibayar nasabah.
- *Contoh Kasus:* Ada orang tarik tunai Rp 1.000.000. Kamu minta jasa Rp 10.000. Kamu tinggal ketik 1.000.000 di kolom nominal, dan 10.000 di kolom admin. Aplikasi otomatis nyatet uang masuk dari pelanggan Rp 1.010.000.

### Mode "Harga Jual" (Buat Jualan Pulsa/Token)
Kalo kamu pilih mode ini, kasir mengisi **Nominal Modal** dan **Harga Jual**. Aplikasi menghitung selisihnya sebagai admin/profit.
- *Contoh Kasus:* Ada orang beli pulsa 50 ribu (modal kamu Rp 49.500), tapi kamu jual Rp 52.000. Kamu tinggal ketik 49.500 di nominal, dan 52.000 di harga jual. Aplikasi bakal otomatis tau kalo untung (admin) kamu Rp 2.500.

Tinggal geser-geser aja tombol biru nya sesuai kebiasaan toko kamu biar kasir nggak bingung!

## 3. Pengaruh ke Form Transaksi

Preferensi transaksi mengubah label dan cara hitung form. Contohnya:

- Pada mode **Biaya Admin**, kasir mengisi nominal dan biaya jasa.
- Pada mode **Harga Jual**, kasir mengisi modal/nominal dan harga jual ke customer.

Pengaturan ini membantu mengurangi salah input karena tiap jenis layanan bisa punya kebiasaan hitung yang berbeda.

## 4. Tips Pengaturan Struk

Isi header dan footer singkat agar struk tetap mudah dibaca di printer thermal.

Contoh header:

```text
Agen Cerdas Cell
Jl. Melati No. 10
WA 0812-0000-0000
```

Contoh footer:

```text
Terima kasih sudah bertransaksi
Simpan struk ini sebagai bukti
```

> [!NOTE]
> Struk yang dicetak lewat Bluetooth mengikuti kemampuan printer dan browser yang dipakai.
