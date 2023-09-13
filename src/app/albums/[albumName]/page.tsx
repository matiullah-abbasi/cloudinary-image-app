import React from "react";
import cloudinary from "cloudinary";
import Cloudinaryimage from "@/components/cloudinary-image";
import ForceRefresh from "@/components/forced-refresh";
import ImageGrid from "@/components/image-grid";
import { SearchResult } from "@/app/gallery/page";

export default async function Gallerypage(
    {params:{albumName},
}:{
    params:{
        albumName:string
    }
}
) 
{
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image  AND folder=${albumName}`  )
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
     .execute()) as {resources:SearchResult[]};
  console.log("reslts",results)


  return (
    <section>
      <ForceRefresh/>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Album {albumName}</h1>
    
        </div>
              <ImageGrid images={results.resources}  
              getImage={
                (imageData:SearchResult)=>{
                return(
                <Cloudinaryimage
                key={imageData.public_id}
                imageData={imageData}
                alt="an image of beautiful world"
                width="400"
                height="300"
         
               />)}}
              />
              </div>
    </section>
  );
}
