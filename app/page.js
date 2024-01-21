'use client'


import Banner from '@/components/Banner';
import { useTheme } from 'next-themes';
import Image from "next/legacy/image"

const Home = ({}) => {
  
  
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='mt-28 px-4 lg:px-10 3xl:px-40'>
      <div className=''>
        <div className='absolute top-0 left-0 w-[46rem] h-[32rem] overflow-hidden'>
          <div className='absolute -top-60 -left-44 h-[50rem] w-[50rem] rounded-full bg-gradient-to-b from-emerald-400/20 to-emerald-400/5 -z-10'>
          </div>

        </div>


        

        <div className='flex gap-8'>

          <div className='relative w-[40%] px-20'>
            <h1 className='font-lobster text-xl'>Selamat Datang di Situs Kami!</h1>
            <h1 className='font-roboto text-4xl font-bold py-2'>KEMENTERIAN <br /> PERINDUSTRIAN</h1>
            <h1 className='font-roboto text-xl'>REPUBLIK INDONESIA</h1>
            <div className='absolute bottom-0 right-10 opacity-70'>
              <Image src="/analogy2.svg" alt="analogy1" width={250} height={250} layout="fixed" loading="lazy" />
            </div>
          </div>

          <div className='w-[60%]'>
            <Banner />
          </div>
        </div>
      </div>


      <div className='w-full my-20 bg-white'>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>

      </div>
    </div>
  );
};

export default Home;
