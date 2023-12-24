"use client"
import { FileSearch } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  return (
    <div className='flex justify-center items-center min-h-screen bg-color-secondary'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <FileSearch size={50} />
        <h3 className="text-color-accent text-2xl font-bold"> 404 NOT FOUND </h3>
        <button onClick={() => router.back()} className="text-color-accent hover:scale-110 transition-all cursor-pointer">Kembali</button>
      </div>
    </div>
  )
}

export default Page