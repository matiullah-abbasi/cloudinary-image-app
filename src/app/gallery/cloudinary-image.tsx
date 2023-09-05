'use client'
import React, { useTransition } from 'react'
import { useState } from 'react'
import { CldImage } from 'next-cloudinary'
import Heart from '@/components/icons/heart'
import cloudinary from 'cloudinary'
import FullHeart from '@/components/icons/full-heart'
import setAsFavoriteActions from './actions'
import { SearchResult } from './page'
export default function Cloudinaryimage(props:any&{imageData:SearchResult}) {

  const[transition,startTransition]=useTransition()
  const {imageData}=props
  const [isFavoried,setisFavoried]=useState(imageData.tags.includes('favourite'))
  return (
  
    <div className='relative '>
    <CldImage {...props} src={imageData.public_id}/>  
    {isFavoried?
    <FullHeart  onClick={()=>{
      setisFavoried(false)
      startTransition(()=>{  setAsFavoriteActions(imageData.public_id,false )})
    }  }  className='absolute  top-2 right-2 hover:text-red-700 cursor-pointer'/>
     :<Heart  onClick={()=>{
      setisFavoried(true)
      startTransition(()=>{  setAsFavoriteActions(imageData.public_id,true )})
    }  }  className='absolute  top-2 right-2 hover:text-red-700 cursor-pointer'/>}
    </div>
    
  )
  }
