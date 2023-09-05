"use server"
 import React from 'react'
import cloudinary from 'cloudinary'
import { revalidatePath } from 'next/cache'
export default async function       setAsFavoriteActions(publicId:string,isFavorite:boolean) {
    if(isFavorite)
    {   await cloudinary.v2.uploader.add_tag("favourite",[publicId])}
    else{
        await cloudinary.v2.uploader.remove_tag("favourite",[publicId])
    }

    
    
}
