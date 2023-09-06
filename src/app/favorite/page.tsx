import React from "react";
import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";
import ForceRefresh from "@/components/forced-refresh";
import FavoritesList from "./favorite-list";

export default async function FavoritesPage() {

  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
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
        <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>
        <FavoritesList initialresources={results.resources}/>
        
      </div>
    </section>
  );
}
