import React from 'react' 
import Relesaes from '../releases.json' 

const Redising = ({sort}) => {
    let releasesFiltradas
    if (sort === 'All'){
         releasesFiltradas = Relesaes
    }else if (sort === 'Feat'){
         releasesFiltradas = Relesaes.filter((release) => release.type==='Feat');
    }else{
         releasesFiltradas = Relesaes.filter((release) => release.type==='Fix');

    }
    return ( 
    <>
        {releasesFiltradas.map(release =>  
        <div key={release.index} className='animacion-block'> 
        <div className='rounded-full bg-[#39D3BB] md:w-[25px] md:h-[25px] h-[18px] w-[18px] absolute left-10 '/>
        <div className='border-l-2 border-[#39D3BB] pl-4'> 
            <h2 className='md:text-[36px] text-[17px]'>{release.title}</h2>  
            <div className='flex text-[14px] space-x-2 mt-4'>
                <p className={` ${release.type === 'Feat'?"bg-[#D3FFF5] text-[#1CB59C]" : "bg-[#FFF8E5] text-[#FFB800]"} inline-block px-2 rounded-lg font-bold`}>{release.type}</p> 
                <p className='text-[#7D879C]'>{release.date}</p>
            </div>  
            <p className='text-[#7D879C] text-[14px] mt-4'>{release.description}</p>  
            { release.image ?
            <img src={release.image} alt="Foto de los cambios en el update" width={974} height={641} className='mt-4 pb-4' /> 
            : 
            <ul className='mt-4 text-[#2B3445] text-semibold text-[14px] space-y-4 list-disc pl-4 pb-4'>
                <li>{release.list.itemUno}</li>
                <li>{release.list.itemDos}</li>
                <li>{release.list.itemTres}</li>
                <li>{release.list.itemCuatro}</li>
                <li>{release.list.itemCinco}</li>
                <li>{release.list.itemSeis}</li>
                <li>{release.list.itemSiete}</li>
                <li>{release.list.itemOcho}</li>
                <li>{release.list.itemNueve}</li>
            </ul>
            }
        </div>  
        </div>
    )} 
    </>
  )
}

export default Redising