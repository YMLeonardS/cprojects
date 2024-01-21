'use client'
import DoubleBar from '@/components/DoubleBar'
import HorizontalStackBar from '@/components/HorizontalStackBar'

import dynamic from 'next/dynamic'
const Map = dynamic(async () => await import('@/components/Map'), { ssr: false })

import React from 'react'

const tkdn = () => {

  

  const data1 = [
    { group_barang:"Bahan Penunjang Pertanian",active_cert:1160,total_cert:1356,tkdn_under_25:61,tkdn_25_to_40:172,tkdn_over_40:1353 },
    { group_barang:"Mesin dan Peralatan Pertanian",active_cert:633,total_cert:933,tkdn_under_25:42,tkdn_25_to_40:304,tkdn_over_40:450 },
    { group_barang:"Mesin dan Peralatan Pertambangan",active_cert:24,total_cert:55,tkdn_under_25:12,tkdn_25_to_40:25,tkdn_over_40:20 },
    { group_barang:"Mesin dan Peralatan Migas",active_cert:935,total_cert:2067,tkdn_under_25:290,tkdn_25_to_40:623,tkdn_over_40:492 },
    { group_barang:"Alat Berat, Konstruksi dan Material Handling",active_cert:82,total_cert:139,tkdn_under_25:16,tkdn_25_to_40:55,tkdn_over_40:26 },
    { group_barang:"Mesin dan Peralatan Pabrik",active_cert:96,total_cert:200,tkdn_under_25:11,tkdn_25_to_40:51,tkdn_over_40:45 },
    { group_barang:"Bahan Bangunan/Konstruksi",active_cert:3342,total_cert:4261,tkdn_under_25:125,tkdn_25_to_40:353,tkdn_over_40:4882 },
    { group_barang:"Logam dan Barang Logam",active_cert:1951,total_cert:3209,tkdn_under_25:107,tkdn_25_to_40:510,tkdn_over_40:2384 },
    { group_barang:"Bahan Kimia dan Barang Kimia",active_cert:2349,total_cert:4226,tkdn_under_25:590,tkdn_25_to_40:931,tkdn_over_40:1553 },
    { group_barang:"Peralatan Elektronika",active_cert:1751,total_cert:2085,tkdn_under_25:476,tkdn_25_to_40:1258,tkdn_over_40:986 },
    { group_barang:"Peralatan Kelistrikan",active_cert:2419,total_cert:5306,tkdn_under_25:284,tkdn_25_to_40:855,tkdn_over_40:3249 },
    { group_barang:"Peralatan Telekomunikasi",active_cert:752,total_cert:1835,tkdn_under_25:56,tkdn_25_to_40:700,tkdn_over_40:161 },
    { group_barang:"Alat Transport",active_cert:346,total_cert:478,tkdn_under_25:27,tkdn_25_to_40:163,tkdn_over_40:190 },
    { group_barang:"Bahan dan Peralatan Kesehatan",active_cert:4317,total_cert:5535,tkdn_under_25:377,tkdn_25_to_40:5270,tkdn_over_40:3671 },
    { group_barang:"Peralatan Laboratrorium",active_cert:5,total_cert:9,tkdn_under_25:0,tkdn_25_to_40:4,tkdn_over_40:1 },
    { group_barang:"Komputer dan Peralatan Kantor",active_cert:603,total_cert:787,tkdn_under_25:33,tkdn_25_to_40:193,tkdn_over_40:828 },
    { group_barang:"Pakaian dan Perlengkapan Kerja",active_cert:835,total_cert:1055,tkdn_under_25:9,tkdn_25_to_40:113,tkdn_over_40:852 },
    { group_barang:"Peralatan Olahraga dan Pendidikan",active_cert:444,total_cert:561,tkdn_under_25:13,tkdn_25_to_40:259,tkdn_over_40:351 },
    { group_barang:"Sarana Pertahanan",active_cert:66,total_cert:169,tkdn_under_25:1,tkdn_25_to_40:5,tkdn_over_40:156 },
    { group_barang:"Barang Lainnya",active_cert:7822,total_cert:8983,tkdn_under_25:526,tkdn_25_to_40:1863,tkdn_over_40:7763 }
  ]

  const data2 = [{"tahun":2011,"total_sertifikat":2042,"total_produk":2481},{"tahun":2012,"total_sertifikat":1546,"total_produk":3140},{"tahun":2013,"total_sertifikat":578,"total_produk":1285},{"tahun":2014,"total_sertifikat":444,"total_produk":1103},{"tahun":2015,"total_sertifikat":1002,"total_produk":2735},{"tahun":2016,"total_sertifikat":1441,"total_produk":2901},{"tahun":2017,"total_sertifikat":949,"total_produk":1654},{"tahun":2018,"total_sertifikat":1543,"total_produk":2714},{"tahun":2019,"total_sertifikat":1207,"total_produk":3207},{"tahun":2020,"total_sertifikat":2459,"total_produk":5886},{"tahun":2021,"total_sertifikat":11596,"total_produk":15018},{"tahun":2022,"total_sertifikat":8254,"total_produk":14767},{"tahun":2023,"total_sertifikat":10757,"total_produk":17344},{"tahun":2024,"total_sertifikat":189,"total_produk":241}]

  return (
    <div className='w-full my-20 px-4 lg:px-10 3xl:px-40'>

      <div className='flex gap-8 pb-4'>
        <div className='flex justify-evenly items-center w-1/6 h-20 card bg-[--foreground]'>
          <div className='w-full text-center'>
            <h1 className='font-bold'>43,249</h1>
            <p className='text-xs py-1'>Total Sertifikat</p>
          </div>
          <div className='w-full text-center'>
            <h1 className='font-bold'>29,924</h1>
            <p className='text-xs py-1'>Sertifikat Aktif</p>
          </div>
        </div>

        <div className='flex justify-evenly items-center w-40 h-20 card bg-[--foreground]'>
          <div className='w-full text-center'>
            <h1 className='font-bold'>4,382</h1>
            <p className='text-xs py-1'>Jumlah Perusahaan</p>
          </div>
        </div>

        <div className='flex justify-evenly items-center w-1/4 h-20 card bg-[--foreground]'>
          <div className='w-full text-center'>
            <h1 className='font-bold'>3,055</h1>
            <p className='text-xs py-1'>{`TKDN < 25%`}</p>
          </div>
          <div className='w-full text-center'>
            <h1 className='font-bold'>13,700</h1>
            <p className='text-xs py-1'>{`TKDN > 25% - 40%`}</p>
          </div>
          <div className='w-full text-center'>
            <h1 className='font-bold'>29,412	</h1>
            <p className='text-xs py-1'>{`TKDN > 40%`}</p>
          </div>
        </div>
        
      </div>

      
      <div className='flex gap-2 w-full'>
        <div className='w-full card'>
          <h1 className='p-2 pb-4'>Rekapitulasi Berdasarkan Tahun Penerbitan Sertifikat</h1>
          <DoubleBar datas={data2} column={['tahun', 'total_sertifikat', 'total_produk']}/>
        </div>
        <div className='w-full card'>
          <h1 className='p-2 pb-4'>Rekapitulasi Berdasarkan Kelompok Barang</h1>
          <HorizontalStackBar />
        </div>
      </div>

      {data1.map((a, idx) => (
        <div key={idx}>{a.group_barang}</div>
      ))}

      <div className='w-full h-[30rem] bg-red-700/10'>
        <h1>Map of Indonesia</h1>
        <Map height={"30vh"} />
      </div>

    </div>
  )
}

export default tkdn

