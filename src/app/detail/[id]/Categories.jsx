import React from 'react'

const Categories = ({name}) => {
   
  return (
    <div className='flex w-full gap-2'>
        {name.map((item,index) => (
            <div className='px-3 min-w-max bg-color-accent text-color-primary  rounded-2xl' key={index}>
                <p>{item.name}</p>
            </div>
        )
        )}
    </div>
    
  )
}

export default Categories