import React from 'react'

function Navebar({menuList , filteritem}) {



  return (
    <div>
      <div className='flex bg-white w-fit flex-col md:flex-row rounded-[4vw] my-[5vw]  overflow-hidden md:rounded-[1vw] mx-auto md:my-[2vw]'>

{ menuList.map((curElem)=>{
    console.log(curElem)
    return(
 <button onClick={() => filteritem(curElem)} className='text-[8vw] py-[1vw] px-[10vw] md:py-[.5vw] md:px-[1.3vw] md:text-[1.5vw] uppercase font-bold font-mono hover:bg-purple-500 transition-[2s] border-none outline-none'>{curElem}</button>
    )
})}

      </div>
    </div>
  )
}

export default Navebar
