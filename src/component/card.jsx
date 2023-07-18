import React from 'react'


const Card = (props) => {
    
console.log(props)
return (
    <>
     {props.menuitems.map((curElement) => (


<div className='flex justify-center m-auto md:m-0 flex-col p-[5vw] md:p-[1.2vw] bg-white w-[90vw] md:w-[22vw] rounded-[4vw] md:rounded-[1vw]' key={curElement.id}>
<div className='flex justify-between items-center'> 
  <div className='text-[3.5vw] md:text-[.9vw] text-black rounded-full border-[.1vw] border-black h-[7vw] w-[7vw]  md:h-[1.5vw] md:w-[1.5vw] flex justify-center items-center'>{curElement.id}</div>
  <span className='text-[4vw] md:text-[.9vw]'>{curElement.category}</span>
  </div>
  <div className='text-[6vw] mt-[3vw] md:text-[1.6vw] md:mt-[1vw] text-black font-serif font-semibold '>{curElement.name}</div>
   <div className='h-[.1vw] w-full bg-black'></div>
   <p className='text-[4.5vw] mt-[2vw] md:text-[.9vw] md:mt-[.5vw] text-black font-serif '>
    {curElement.description}
   </p>
   <img src={curElement.image} alt="" className='h-[50vw] mt-[5vw] md:h-[12vw] md:mt-[.5vw]'/>
   <div className='mt-[5vw]  md:mt-[1vw] flex justify-between'> 
   <div className='text-green-400 font-bold text-[6vw] md:text-[1.3vw]'>{curElement.price}</div>
   <div className='border-[.1vw] border-black py-[1vw] px-[2.5vw] md:py-[.2vw] md:px-[.5vw] text-[4.5vw] md:text-[1vw] hover:bg-slate-300'>Order Now</div>
   </div>
</div>

     )) }
    </>
)

}




export default Card
