import React from 'react' 
import notes from '../releasesNotes.json'

const Notes = () => { 
  const listNotes = notes.map((note) =>
    <p className={`justify-center w-[80%] my-1 font-bold text-[14px] ${note==='Release 6.5: New features and enhanced algorith...'? "text-[#2B3445]" :"text-[#7D879C]"} `}>{note}</p>
  );
  return (
    <div className='flex flex-col items-center md:fixed'>
        <h3 className='text-[25px] font-bold mt-8'>All release notes</h3>
        <div className='flex flex-col items-center'>{listNotes}</div>
    </div>
  )
}

export default Notes