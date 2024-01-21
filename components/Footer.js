

const Footer = () => {
  const list = [
    {
      company: "Pusat Peningkatan Penggunaan Produk Dalam Negeri",
      address: "Gedung Kementerian Perindustrian lt. 3 Jl. Jenderal Gatot Subroto Kav. 52-53, Jakarta Selatan",
      contact: "021 - 5255509 ext 4017",
      person: "Arnes Lukman",
    },
    {
      company: "PT. Surveyor Indonesia",
      address: "Unit Bisnis Industri dan Fasilitas Jl. Jend. Gatot Subroto Kav. 56, Lantai 7. Jakarta Selatan",
      contact: "021 - 5265526 ext 818",
      person: "Lebrina Eka Fitriani / Raden Andini Putri",
    },
    {
      company: "PT. Sucofindo (Persero)",
      address: "Unit Bisnis Perdagangan, Industri, dan Kelautan Bagian Fasilitasi Kandungan Lokal Jl. Raya Pasar Minggu Km. 34, Lantai 4, Jakarta Selatan",
      contact: "021 - 7983666 ext 2390",
      person: "Nano Suprayogi / Shasti",
    },
    {
      company: "BSKJI (Badan Standardisasi dan Kebijakan Jasa Industri)",
      address: "Jl. Jenderal Gatot Subroto Kav. 52-53, Lt. 19, Jakarta Selatan",
      contact: "021 - 5251132, 5255509 Pes. 4007",
      person: "-",
    },
  ]
  return (
    <div className="w-full p-6 bg-[--footer] px-4 lg:px-10 3xl:px-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((a, idx) => (
          <div key={idx} className="grid text-xs p-4 text-slate-50">
            <div>{a.company}</div>
            <div className="w-56">{a.address}</div>
            <div>{a.contact}</div>
            <div>{a.person}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer