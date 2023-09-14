'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function SearchForm(
    {initialSearch}:{initialSearch:string}

) {
const [tagname,setTagname]=useState(initialSearch??"")
const router=useRouter()    

useEffect(()=>{
setTagname(initialSearch);
},[initialSearch])

return (
   <form 
   onSubmit={(e)=>

   {e.preventDefault()
 router.replace(`/gallery?search=${encodeURIComponent(tagname)}`)
 router.refresh()
}
   }>
    <Label htmlFor="tag-name" className="text-right">
              Search by Tag
            </Label>
            <div className='flex gap-2'>       
            <Input 
            onChange={e=>setTagname(e.currentTarget.value)}
            id="tag-name"
             value={tagname} 
             className="col-span-3"/>
         <Button type='submit'>Search</Button>
         </div>
  
   </form>
  )
}
