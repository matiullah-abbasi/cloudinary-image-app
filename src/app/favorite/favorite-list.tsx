'use client'
import React,{useState} from "react";
import cloudinary from "cloudinary";
import Cloudinaryimage from "@/components/cloudinary-image";
import { SearchResult } from "../gallery/page";
import ForceRefresh from "@/components/forced-refresh";
import ImageGrid from "@/components/image-grid";

export default  function FavoritesList({initialresources}:{initialresources:SearchResult[]}) 
{
 const[resources,setresources]=useState(initialresources)
  
  return (
    
    <ImageGrid images={resources}
    getImage={
        (imageData:SearchResult)=>{
        return(
            <Cloudinaryimage 
            key={imageData.public_id}
            imageData={imageData}
            alt="an image of beautiful world"
            width="400"
            height="300"
            onUnheart={(unheartedresource)=>{
             setresources((currentresources)=>
          currentresources.filter((resource)=>
          resource.public_id!=unheartedresource.public_id
            ))
            }}
       />)}}    
    /> 
      );
}
