import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'


const MasterMenu = ({drinks, foods}) => {
  const [selected, setSelected] = useState('foods')
  const [data,setData] = useState([])

  useEffect(()=> {
    switch(selected){
      case "foods": 
       setData(foods)
      break;
      case "drinks": 
       setData(drinks)
      break;
      default:
        setData(foods)
    }

  },[selected])

  return (
    <div className='flex flex-col justify-center items-center w-full md:w-2/5 gap-4'>
     <h3 className='font-semibold text-2xl mb-5'>Menus</h3>
       <div className='flex flex-row justify-around items-center w-full  '>
          <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
           className='px-5 py-2 bg-color-dark text-color-primary rounded-lg cursor-pointer hover:bg-color-secondary hover:text-color-light hover:border-2 hover:border-color-accent'
            onClick={()=> setSelected('foods')}
            >Foods
           </motion.div>
          <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='px-5 py-2 bg-color-dark text-color-primary rounded-lg cursor-pointer hover:bg-color-secondary hover:text-color-light hover:border-2 hover:border-color-accent'
          onClick={()=> setSelected('drinks')}
          >Drinks
          </motion.div>
       </div>
       {/* Border */}
       <div
        className='w-full flex flex-col text-justify'>
          <AnimatePresence mode='popLayout'>
            <motion.ol
              layout
              className='list-decimal list-inside p-4 bg-color-accent rounded-lg text-color-primary'>

              {data.map((item,index) => (
                <motion.li 
                transition={{delay:0.05 * index}}
                key={index}
                >{item.name}</motion.li>
              ))}
            </motion.ol>
          </AnimatePresence>
        </div>
       
       
    </div>  
  )
}

export default MasterMenu