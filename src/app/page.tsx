'use client'
import React, { useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
export type uploadresult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setimageid] = useState('');


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton onUpload={(result:uploadresult)=>{
        setimageid(result.info.public_id);
      }} uploadPreset="fxttbgmu" />
      {
  imageId&&(
 <CldImage
  width="960"
  height="600"
  
  src={imageId}
  sizes="100vw"
    
  alt="Description of my image"
      
/>
)}
    </main>
  );
}
