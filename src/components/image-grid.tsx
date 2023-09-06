import { SearchResult } from '@/app/gallery/page'
import React, { ReactNode } from 'react'
const MAX_COL=4

export default function ImageGrid({images,getImage}:{images:SearchResult[],getImage:(imageData:SearchResult)=>ReactNode}) {
  

    function getColumns(colIndex:number)
    {
      return images.filter((resource,idx)=>
      idx%MAX_COL===colIndex)
    }
 
 
 
    return (
    <div className="grid  grid-cols-4 gap-2">
    {[getColumns(0),
    getColumns(1),
    getColumns(2),
    getColumns(3)].map
    ((Columns,idx)=><div key={idx} className="flex flex-col gap-4">

   {
    Columns.map (getImage)
    
   }
    </div>)}   
    </div>
  )
}
