"use client"

import ImageLoader from "@/app/libs/imageLoader"
import Navbar from "../Navbar/Navbar"
import Image from "next/image"
import Categories from "@/app/detail/[id]/Categories"
import { Star } from "@phosphor-icons/react"
import MasterMenu from "../Menu/MasterMenu"
import Review from "../Review/Review"
import {motion} from "framer-motion";


const DetailRestaurant = ({data}) => {

  return (
    <div className='w-full max-h-max px-5 bg-color-secondary'>
      <Navbar />
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
              className='w-full px-5 flex flex-col gap-5 justify-center items-center '>
          <h3 className='font-bold text-2xl '>{data.name}</h3>
          <Image 
            loader={ImageLoader}
            src={data.pictureId}
            width={200}
            height={300}
            alt={data.name}
            className="object-cover w-full md:w-[700px] h-full rounded-sm"
            />          
          <div className='flex justify-between items-center gap-5 md:w-2/4 '>
            <div className='flex flex-col justify-center items-center gap-2 text-center'>
              <p className='font-semibold '>Category Restaurant: </p> <Categories name={data.categories}/>
            </div>
            <div className='min-w-max flex flex-col gap-2 text-center'>
              <p className='font-semibold'>Rating:</p>
              <p> {data.rating}/5 <span className="inline-block ml-1"><Star size={14} weight="fill" /></span> </p>
              
            </div>
            <div className='flex flex-col gap-2 text-center'>
              <p className='font-semibold'>Lokasi: </p>
              <p>{data.address}, {data.city} </p>
              <p></p>
            </div>
           
          </div>
          <p className='leading-7 text-ellipsis overflow-hidden md:w-3/5 text-justify'>{data.description}</p>
          <MasterMenu drinks={data.menus.drinks} foods={data.menus.foods}/>
          <Review review={data.customerReviews} reviewId={data.id}/>
      </motion.div>
    </div>
  )
}

export default DetailRestaurant