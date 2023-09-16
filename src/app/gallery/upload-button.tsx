"use client";
import React from "react";
import { uploadresult } from "../page";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function UploadButton() {
  const router = useRouter();
  return (
    <div className="gap-2">
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>

        <CldUploadButton
          onUpload={(result: uploadresult | any) => {
            // setimageid(result.info.public_id);
            setTimeout(() => {
              router.refresh();
            }, 1000);
          }}
          uploadPreset="fxttbgmu"
        />
      </Button>
    </div>
  );
}
