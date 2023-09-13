import {
  FolderPlus
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Menu from "./icons/menu"
import { AddToAlbumDialog } from "./add-to-album-grid"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"
  
  export function ImageMenu({image}:{image:SearchResult}) {
    const [open,setopen]=useState(false)
    return (
        <div className="absolute top-2 right-2">   
         <DropdownMenu open={open} onOpenChange={setopen} >
        <DropdownMenuTrigger asChild>
          <Button variant="secondary"  className="w-8 h-8 p-0">      <Menu/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
            <DropdownMenuItem asChild>
            <AddToAlbumDialog  image={image} onClose={()=>setopen(false)}/>
              
            </DropdownMenuItem>
        </DropdownMenuContent> 
      </DropdownMenu>
      </div>

    )
  }
  