import Image from "next/legacy/image"
import Link from "next/link"


const Header = () => {
  const list = [
    { name: 'HOME', link: '/'},
    { name: 'REFERENSI', link: '/referensi'},
    { name: 'SERTIFIKAT', link: '/sertifikat'},
    { name: 'TKDN IK', link: '/tkdn-ik'},
  ]
  return (
    
    <div className="flex items-center w-full h-14 topbar">
      <div className="fixed px-4 lg:px-10 3xl:px-40">
        <div className="flex items-center gap-4">
          <div className="w-32">
            <Image src="/kemenperin.svg" alt="kemenperin" width={14} height={6} layout="responsive" loading="lazy" />
          </div>
          {/* <div>
            <h1 className="font-semibold">Kementerian Perindustrian</h1>
            <h2 className="text-xs tracking-widest">REPUBLIK INDONESIA</h2>
          </div> */}
        </div>
      </div>
      

      <div className="fixed flex gap-8 right-0 px-4 lg:px-10 3xl:px-40">
        {list.map((a, idx) => (
          <Link href={a.link} key={idx} className="text-sm p-2 rounded-md hover:bg-emerald-400/20">{a.name}</Link>
        ))}
      </div>
      
    </div>
  )
}

export default Header