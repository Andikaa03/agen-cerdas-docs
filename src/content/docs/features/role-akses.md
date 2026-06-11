---
title: Role Akses
description: Bikin jabatan khusus dan batesin apa aja yang bisa karyawan buka.
---

Biar toko aman, karyawan nggak boleh asal buka semua menu, kan? Nah, di menu **Role Akses**, bos bisa nentuin menu apa aja yang boleh diklik sama si karyawan (misalnya jabatannya "Kasir").

![Role Akses](/images/role-akses.png)

## Cara Bikin Role Baru

1. Di menu Pengaturan Owner, klik tab **Role Akses**.
2. Klik tombol **Tambah**. Nanti bakal muncul kotak.

![Tambah Role Akses](/images/role-akses-create.png)

3. Ketik nama role, misalnya "Kasir Shift Pagi".
4. Nyalakan permission yang diperlukan.
5. Klik **Simpan**.

Nanti pas kamu daftarin user baru, tinggal pilih role ini di menu **User & Karyawan**.

## Modul Permission

Role Akses terdiri dari beberapa grup:

- **Role**: melihat, membuat, mengubah, dan menghapus role.
- **User**: melihat, membuat, mengubah, dan menghapus user.
- **Cabang**: melihat, membuat, mengubah, dan menghapus cabang.
- **Item** dan **Kategori Item**: mengelola data barang fisik.
- **Akun Kas**: melihat dan mengubah laci/rekening.
- **Transaksi Agen**: melihat, membuat, dan void transaksi agen.
- **Dashboard**: melihat dashboard dan dashboard laporan.
- **Transaksi Fisik**: melihat, membuat, dan void transaksi POS.
- **Perubahan Stok**: melihat riwayat stok dan melakukan penyesuaian stok.
- **Customer** dan **Hutang**: mengelola pelanggan dan tagihan.
- **Shift**: membuka, menutup, melihat, dan menghapus shift.
- **Preferensi**: melihat dan mengubah pengaturan akun.

## Pilihan Select

Grup **Pilihan Select** mengatur apakah user boleh memilih data tertentu di form, misalnya kategori, item, rekening, cabang, role, atau customer.

Contoh: user boleh membuat transaksi agen, tetapi permission **Pilihan Rekening** mati. Akibatnya user tidak bisa memilih laci atau rekening di form transaksi. Jadi untuk role kasir, pastikan permission select yang dibutuhkan ikut dinyalakan.

> [!IMPORTANT]
> Role tidak boleh dicek dari nama seperti "Kasir" saja. Owner bisa membuat nama role apa pun. Yang benar adalah mengikuti permission yang aktif di role tersebut.
