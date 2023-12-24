"use client"

import { MagnifyingGlass } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'

const SearchBar = () => {
  const searchRef = useRef();
  const router = useRouter();
  
  const handleSearch = () => {
    const keyword = searchRef.current.value;

    if(!keyword || !keyword.trim() ) return 
    
    if(event.key === "Enter" || event.type === "click"){
          event.preventDefault();
          
          router.push(`/search/${keyword}`)
      }
  }

  return (
    <>
        <div className='relative'>
          <form>           
          <input type="text"
             className='w-full text-white bg-color-light p-2 ' 
             placeholder='Search ...'
             ref={searchRef}
             onKeyDown={handleSearch}
             />
             <button>
              <MagnifyingGlass size={24}  className='absolute right-1 top-2' onClick={handleSearch}/>
             </button>
          </form>

        </div>
    </>
  )
}

export default SearchBar