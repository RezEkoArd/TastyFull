"use client"
import ImageLoader from '@/app/libs/imageLoader'
import { Star } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = ({resp}) => {
  return (
    <>
         {resp.map((item,index) => (
             <div className="cursor-pointer text-color-primary w-[310px] h-[390px] bg-color-accent transition-all p-3 flex flex-col gap-5 rounded-2xl justify-between items-center hover:scale-105 shadow-lg mt-2" key={index}>
               <h3 className="text-center font-medium text-2xl">{item.name}</h3>
               <div className="w-full ">
                    <Image 
                    loader={ImageLoader}
                    src={item.pictureId}
                    width={200}
                    height={300}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-sm"
                    />
               </div>
               <div className="w-full flex justify-between items-center">
                    <p>Kota: {item.city}</p>
                    <p>Rating: {item.rating} /5  
                    <span className="inline-block ml-1"><Star size={14} weight="duotone" /></span>
                    </p>
               </div>
               <Link href={`/detail/${item.id}`} className="text-center border-none rounded-lg p-2 bg-color-secondary text-color-dark w-full hover:bg-color-light  hover: hover:text-color-primary transition-all duration-1">
                See Details
               </Link>
               
             </div>
           ))}
    </>
  )
}

export default page