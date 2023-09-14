import React from "react";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import Cloudinaryimage from "@/components/cloudinary-image";
import ForceRefresh from "@/components/forced-refresh";
import ImageGrid from "@/components/image-grid";
import SearchForm from "./search-form";

export type SearchResult = {
  public_id: string;
  tags:string[]
};

export default async function Gallerypage( {
  searchParams:{search},
  }:
  {
  searchParams:{
  search:string
};
}) {
  const results = (await cloudinary.v2.search

    .expression(`resource_type:image  ${search?` AND tags=${search}` : ""}` )
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
     .execute()) as {resources:SearchResult[]};
  
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
        </div>
        <SearchForm initialSearch={search}/>
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
