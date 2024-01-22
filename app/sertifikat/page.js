// pages/index.js
import React from 'react';
import Table from '../../components/Table';
import data from '../../public/data'

const columns = [
  // {
  //   accessor: 'kode_hs',
  //   Header: 'Kode HS',
  // },
  // {
  //   accessor: 'kbli',
  //   Header: 'KBLI',
  // },
  // {
  //   accessor: 'kelompok_barang',
  //   Header: 'Kelompok Barang',
    
  // },
  {
    accessor: 'nama_perusahaan',
    Header: 'Nama Perusahaan',
    size: 220,
    align: 'left',
  },
  {
    accessor: 'alamat',
    Header: 'Alamat',
    size: 320,
    align: 'left',
  },
  // {
  //   accessor: 'provinsi',
  //   Header: 'Provinsi',
  // },
  {
    accessor: 'produk',
    Header: 'Produk',
    size: 150,
    align: 'center',
  },
  {
    accessor: 'spesifikasi',
    Header: 'Spesifikasi',
    size: 300,
    align: 'left',
  },
  // {
  //   accessor: 'tipe',
  //   Header: 'Tipe',
  // },
  // {
  //   accessor: 'merk',
  //   Header: 'Merk',
  // },
  {
    accessor: 'nilai_tkdn',
    Header: 'Nilai TKDN',
    size: 60,
    align: 'center',
  },
  {
    accessor: 'tanggal_kadaluarsa',
    Header: 'Tanggal Kadaluarsa',
    size: 100,
    align: 'center',
  },
]


const Home = () => {
  return (
    <>
      <div style={{backgroundImage: 'url(/bla.png)'}}
        className='fixed h-full w-full top-10 -z-10 bg-center bg-cover bg-repeat opacity-30' />

      <div className='mx-40 font-roboto mt-24 mb-10 px-4 lg:px-10 3xl:px-40 '>
        <h1 className='text-2xl pb-4'>Rekapitulasi Sertifikat</h1>
        <div className='w-full h-full'>
          <Table columns={columns} data={data} />

        </div>
      </div>
   </>
  );
};

export default Home;
