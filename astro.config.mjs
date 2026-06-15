import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Agen Cerdas Docs',
      head: [],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Mulai Cepat',
          items: [
            { label: 'Pengenalan', link: '/' },
            { label: 'Instalasi & Setup', link: '/guides/setup/' }
          ],
        },
        {
          label: 'Dashboard', link: '/features/dashboard/'
        },
        {
          label: 'Transaksi Agen',
          items: [
            { label: 'Transaksi', link: '/features/transaksi-agen/' },
            { label: 'Dashboard Laporan', link: '/features/laporan-pendapatan/' },
            { label: 'Arus Kas', link: '/features/arus-kas/' },
            { label: 'Akun Kas', link: '/features/akun-kas/' },
          ],
        },
        {
          label: 'Transaksi Fisik',
          items: [
            { label: 'Transaksi', link: '/features/transaksi-fisik/' },
            { label: 'Item', link: '/features/inventaris/' },
            { label: 'Kategori', link: '/features/kategori/' },
            { label: 'Perubahan Stok', link: '/features/perubahan-stok/' },
          ],
        },
        {
          label: 'Pengaturan Owner',
          items: [
            { label: 'User & Karyawan', link: '/features/pengaturan-owner/' },
            { label: 'Role Akses', link: '/features/role-akses/' },
            { label: 'Daftar Cabang', link: '/features/pengaturan-cabang/' },
            { label: 'Shift & Rekapan', link: '/features/rekapan-shift/' },
          ],
        },
        {
          label: 'Hutang & Nasabah',
          items: [
            { label: 'Daftar Hutang', link: '/features/hutang-nasabah/' },
            { label: 'Buku Pelanggan', link: '/features/buku-pelanggan/' },
          ],
        },
        { label: 'Preferensi Akun', link: '/features/preferensi-akun/' },
        { label: 'Langganan Paket', link: '/features/langganan-paket/' },
      ],
    }),
  ],
});
