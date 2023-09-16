//@ts-nocheck
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CldImage } from 'next-cloudinary'
import React, { useState } from 'react'

export default  function EditPage(
    {
    searchParams:{publicId},
    }:
    {
    searchParams:{
    publicId:string
  }
  }
)


{
const [transformation,setTransformation]=useState<undefined|"generative-fill"|"blur"|"grayscale"|"pixelate"|"bg-remove"
    >()
  const [prompt,setprompt]=useState('')
  const [pendingprompt,setpendingprompt]=useState('')
    return (
  
    <>
      
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Edit{publicId}</h1>
      </div> 
      <div className='flex gap-4'>
      <Button variant="ghost" onClick={()=>setTransformation(undefined)}>Clear All</Button>

   <div className='flex flex-col gap-4'>
    <Button onClick={()=>{
      setTransformation("generative-fill")
      setprompt(pendingprompt)
      }}>Apply Generative Fill</Button>
    <Label>Prompt</Label>
    <Input value={pendingprompt} onChange={e=>setpendingprompt(e.target.value)}/>
    
    </div>
   
    <Button onClick={()=>setTransformation("blur")}>Apply Blur</Button>
    <Button onClick={()=>setTransformation("grayscale")}>Convert to Gray</Button>
    <Button onClick={()=>setTransformation("pixelate")}>Pixelate</Button>  
    <Button onClick={()=>setTransformation("bg-remove")}>Remove Background</Button>
  
    </div>
  <div className='grid grid-cols-2 gap-12'>
  <CldImage src={publicId} width="300"    height="400" alt="some image"/>
  
   {
   transformation==="generative-fill"&&(
    <CldImage src={publicId}
    width={400}
    height={300}
    alt='some image'
    crop='pad'
    fillBackground ={{
      prompt,}}
     />)}



{
   transformation==="blur"&&(
    <CldImage src={publicId}
    width={400}
    height={300}
    alt='some image'
   
    blur="1200"
    />)
 }


{
   transformation==="grayscale"&&(
    <CldImage src={publicId}
    width={400}
    height={300}
    alt='some image'
   grayscale="800"
    />)
    }

{
   transformation==="pixelate"&&(
    <CldImage src={publicId}
    width={400}
    height={300}
    alt='some image'
   pixelate
    />)
    }

{
   transformation==="bg-remove"&&(
    <CldImage src={publicId}
    width={400}
    height={300}
    alt='some image'
   removeBackground
    />)
}


         </div>
                     </div>
    </>
  )
}
