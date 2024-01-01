
import {  ArrowFatLineDown, ArrowFatLineUp, UserCircle } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import FormReview from '../FormReview/FormReview';

const Review = ({review, reviewId}) => {
    
    const [selected, setSelected] = useState(false);
    const [data, setData] = useState([]);

    const prevData = review.slice(0,3);
    
    
    useEffect(()=> {

        switch(selected){
          case false: 
          setData(prevData)
          break;
          case true: 
          setData(review)
          break;
          default:
            setData(prevData)
        }
    
      },[selected])
    
    return (
    <div className='flex flex-col justify-center items-center w-full md:w-2/5 gap-4 '>
        <h3 className='font-semibold text-2xl mb-5'>Review</h3>
        <FormReview reviewId={reviewId}/>
        { data.map((item,index) => (
            <div className='w-full min-h-max bg-color-accent rounded-lg text-color-primary p-5 flex flex-row gap-5 ' key={index}>
                <div><UserCircle size={50} weight="duotone" /></div>
                <div className=''>
                    <div className='flex flex-col'>
                        <h5 className='font-medium text-lg'>{item.name}</h5>
                        <p className='font-light text-xs'>{item.date}</p>
                    </div>
                    <div className='text-wrap'>
                        {item.review}
                    </div>
                </div>
            </div>
        ))}

        {
            !selected ? 
            <div className='w-full min-h-max bg-color-accent rounded-lg text-color-primary p-3 flex flex-row gapd-5 justify-center items-center cursor-pointer  hover:bg-color-secondary hover:text-color-light hover:border-2 hover:border-color-accent transition-all ease-out duration-75'
            onClick={()=> setSelected(true)}>
            <span className='flex flex-col justify-center items-center'>See More 
            <ArrowFatLineDown size={32} weight="duotone" /></span>
            </div>
            : 
            <div className='w-full min-h-max bg-color-accent rounded-lg text-color-primary p-3 flex flex-row gapd-5 justify-center items-center cursor-pointer  hover:bg-color-secondary hover:text-color-light hover:border-2 hover:border-color-accent transition-all ease-out duration-75'
            onClick={()=> setSelected(false)}>
            <span className='flex flex-col justify-center items-center'>Kembali 
            <ArrowFatLineUp size={32} weight="duotone" /></span>
            </div>
        }

       
    </div> 
  )
}

export default Review