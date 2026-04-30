import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { FaFacebookSquare , FaTwitterSquare, FaWhatsapp  } from "react-icons/fa";
import Buttom from './Buttom';
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { BiShare } from "react-icons/bi";

 
const Card = ({name, profession , like , Comment ,Share}) => {
  return (
    <>
    <div className='w-[20rem] h-120 bg-amber-50 rounded-xl  overflow-hidden mt-3.5 ml-3.5'>
      <div  className='relative w-full h-40 bg-blue-400 '>
        <img className='absolute translate-x-[50%] translate-y-[25%] h-full rounded-full aspect-square object-cover border-4 border-blue-400' src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="img" />

      </div>
      {/* bottom */}

      <div className='flex flex-col items-center pt-10'>
        <h1>{name}</h1>
  
        <p>{profession}</p>
        <div className='flex gap-3 text-3xl mt-3 '>
          <LuInstagram />
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaWhatsapp />
        </div>
        <div className='flex gap-2 m-3.5  '>
          <Buttom title="Subscribe" />
          <Buttom title="Massages" />
        </div>
        <div className='flex items-center text-xl gap-2.5' >
          <CiHeart />
          <span>{like}|</span>
          <FaRegComment />
          <span>{Comment}|</span>
          <BiShare />
          <span>{Share}|</span>





        </div>
      </div>


    </div>
    
    </>
    
     
  )
}

export default Card
