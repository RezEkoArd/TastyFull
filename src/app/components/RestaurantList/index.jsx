'use client'
import { Star } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import {  useState } from "react"
import Pagination from "../utils/Pagination"
import ImageLoader from "@/app/libs/imageLoader"
import { motion } from 'framer-motion';




const index = ({api}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = api.data.slice(firstPostIndex,lastPostIndex)
    
  return (
    <div>
        {/* Wrapping */}
        <motion.div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-col-2 md:gap-4 gap-3 p-4 justify-center items-center" id="first-section">
         
            {/* Card Restaurant */}
              {currentPosts.map((item,index) => (
                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="cursor-pointer text-color-primary w-[300px] h-[370px] bg-color-accent transition-all p-3 flex flex-col gap-5 rounded-2xl justify-between items-center hover:scale-105 shadow-lg mt-2" key={index}>
                  <h3 className="text-center font-medium text-xl">{item.name}</h3>
                  <div className="w-full h-[200px]  ">
                        <Image 
                        loader={ImageLoader}
                        src={item.pictureId}
                        width={150}
                        height={150}
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
                </motion.div>
              ))}
        </motion.div>
          <Pagination totalPosts={api.data.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>

    </div>
  )
}

export default index