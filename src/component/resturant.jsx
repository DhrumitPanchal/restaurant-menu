import React,{useState} from 'react'
import Navebar from './navebar'
import Card from './card'
import menuApi from './menu api.js'
import Footer from './footer'

const uniquelist = [
    ...new Set(
        menuApi.map((curElem) => {
            return curElem.category
        })
    ),"all"
]



const Resturant = () => {
    const [menudata,setMenudata] = useState(menuApi)

    const filteritem =(category) => {
        if(category === "all"){
         return   setMenudata(menuApi)

        }
        const updatedlist = menuApi.filter((curElem) => {
            return curElem.category === category;
        })
        setMenudata(updatedlist)
    }
   

  return (
    <>
    <Navebar menuList ={uniquelist} filteritem={filteritem}/>
    <div className='flex flex-col md:flex-row flex-wrap gap-[5vw] md:gap-[2vw] mx-auto my-4 md:m-[2vw]'>
      <Card menuitems={menudata}/>
    </div>
    <Footer/>
    </>
  )
}

export default Resturant
