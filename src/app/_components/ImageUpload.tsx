"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="flex flex-col gap-4">
      <input
        type="file"
        placeholder="JPG , PNG"
        accept="image/png, image/jpg"
        onChange={handleChange}
      />

      {preview && (
        <Image
          src={preview}
          alt="preview"
          width={200}
          height={135}
          className="w-[200px] h-[135px] object-cover rounded-lg"
        />
      )}
    </div>
  );
}
