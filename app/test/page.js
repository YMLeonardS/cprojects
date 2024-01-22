'use client'
import dynamic from 'next/dynamic'
const Map = dynamic(async () => await import('@/components/Map'), { ssr: false })

import Card from "./Card"
import datas2 from '@/public/data2'
import DoubleBar from '@/components/DoubleBar'
import HorizontalStackBar from '@/components/HorizontalStackBar'

const test = () => {
  const data1 = [
    { name: 'Jumlah Perusahaan', value: 4382 },
  ]

  const data2 = [
    { name: 'Total Sertifikat', value: 43249 },
    { name: 'Sertifikat Aktif', value: 29924 },
  ]

  const data3 = [
    { name: 'TKDN < 25%', value: 3055 },
    { name: 'TKDN > 25% - 40%', value: 13700 },
    { name: 'TKDN > 40%', value: 29412 },
  ]

  return (
    <div className='w-full h-full'>
      <div className="flex gap-4">
        <Card datas={data1}/>
        <Card datas={data2}/>
        <Card datas={data3}/>
      </div>
      <div className='w-full h-[32rem] my-8 mb-10 rounded-lg shadow-md overflow-hidden'>
        <h1 className='p-2 px-4'>Rekapitulasi Berdasarkan Lokasi Perusahaan</h1>
        <Map />
      </div>


      <div className='flex gap-2 w-full pb-8'>
        <div className='w-full card'>
          <h1 className='p-2 pb-4'>Rekapitulasi Berdasarkan Tahun Penerbitan Sertifikat</h1>
          <DoubleBar datas={datas2} column={['tahun', 'total_sertifikat', 'total_produk']}/>
        </div>
        <div className='w-full card'>
          <h1 className='p-2 pb-4'>Rekapitulasi Berdasarkan Kelompok Barang</h1>
          <HorizontalStackBar />
        </div>
      </div>
    </div>
  )
}

export default test