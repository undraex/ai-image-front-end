"use client";

import { useRef } from "react";

type Props = {
  file: File | null;
  setFile: (file: File | null) => void;
  preview: string | null;
  setPreview: (url: string | null) => void;
};

export default function ImageUpload({ setFile, setPreview }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg"
        className="hidden"
        onChange={handleChange}
      />

      <div
        onClick={handleClick}
        className="w-full h-full cursor-pointer flex items-center text-sm text-[#71717A]"
      >
        JPG, PNG
      </div>
    </>
  );
}
