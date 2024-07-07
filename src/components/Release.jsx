import React, { useState } from 'react'
import Redising from './Redising' 
import Notes from './Notes'
const Release = () => { 
    const [sort, setSort] = useState("All")
    
    const handleSort = (e) =>{
        setSort(e.target.value) 
    }
  return (  
    <div className='md:flex md:space-x-14'>
        <div className='mt-8 ml-12 w-[70%] flex flex-col'>
            <div className='md:flex md:justify-between border-b'>
                < h2 className='md:text-[44px] text-[20px]'>Release 6.5</h2>
                <div className='space-x-2'>
                    <span className='text-[14px] font-semibold'>Sort by:</span>
                    <select className='border-2 rounded-lg px-4' onChange={handleSort}>
                        <option value="All">All</option>
                        <option value="Feat">Feat</option>
                        <option value="Fix">Fix</option>
                    </select>
                </div> 
            </div>
            <div className=''> 
                <Redising sort={sort}/>
            </div>
        </div> 
        <div className='pb-8'>
        <Notes/>
        </div>
    </div> 
  )
}

export default Release