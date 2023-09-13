'use client'
import React, { ComponentProps, useTransition } from 'react'
import { useState } from 'react'
import { CldImage, CldImageProps } from 'next-cloudinary'
import Heart from '@/components/icons/heart'
import cloudinary from 'cloudinary'
import FullHeart from '@/components/icons/full-heart'
import setAsFavoriteActions from '@/app/gallery/actions'
import { SearchResult } from '@/app/gallery/page'
import { ImageMenu } from './image-menue'
export default function Cloudinaryimage(
  props:
  {imageData:SearchResult,
    onUnheart?:(unheartedresource:SearchResult)=>void
  }
   &Omit<CldImageProps ,'src'>) {

  const[transition,startTransition]=useTransition()
  const {imageData,onUnheart}=props
  const [isFavoried,setisFavoried]=useState(imageData.tags.includes('favourite'))
  return (
  
    <div className='relative '>
    <CldImage {...props} src={imageData.public_id}/>  
    {isFavoried?
    <FullHeart  onClick={()=>{
      onUnheart?.(imageData)
      setisFavoried(false)
      startTransition(()=>{  setAsFavoriteActions(imageData.public_id,false )})
    }  }  className='absolute  top-2 left-2 hover:text-red-700 cursor-pointer'/>
     :<Heart  onClick={()=>{
      setisFavoried(true)

      startTransition(()=>{  setAsFavoriteActions(imageData.public_id,true )})
    }  }  className='absolute  top-2 left-2 hover:text-red-700 cursor-pointer'/>}
  <ImageMenu image={imageData}/>
    </div>
    
  )
  }
