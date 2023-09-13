import { Button } from "@/components/ui/button"
import {FolderPlus} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { SearchResult } from "@/app/gallery/page"
import { create } from "domain"
import AddimagetToAlbum from "./actions"

export function AddToAlbumDialog({image,onClose}:{image:SearchResult,onClose:()=>void}) {
 const [AlbumName,setAlbumName]=useState("")
 const [open,setopen]=useState(false)
 
 
 return (
    <Dialog open={open} onOpenChange=   {(newopenstate)=>{
      if(!newopenstate)
      {
        onClose();
      }
      
      setopen(newopenstate)
    }}>
      <DialogTrigger asChild>
        <Button variant="ghost">
        <FolderPlus className="mr-2 h-4 w-4" />
              <span>Add to Album</span></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
           Type Album name where you want to move Images
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input 
            onChange={e=>setAlbumName(e.currentTarget.value)}
            id="album-name"
             value={AlbumName} 
             className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button
         
          onClick={async()=>{
            onClose()
            setopen(false)
            await AddimagetToAlbum(image,AlbumName)
        }}
          type="submit">Add to Album</Button>
        </DialogFooter>
      </DialogContent>
        </Dialog>
  )
}
