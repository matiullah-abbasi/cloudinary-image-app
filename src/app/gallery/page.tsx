import React from "react";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import Cloudinaryimage from "./cloudinary-image";
import ForceRefresh from "@/components/forced-refresh";

export type SearchResult = {
  public_id: string;
  tags:string[]
};

export default async function Gallerypage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image ")
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
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
        </div>
        <div className="grid  grid-cols-4 gap-2">

       {
        results.resources.map( (result)=>(
          <Cloudinaryimage kry={result.public_id}
           imageData={result}
           alt="an image of beautiful world"
           width="400"
           height="300"

          />
        ))
       }

        </div>
      </div>
    </section>
  );
}
