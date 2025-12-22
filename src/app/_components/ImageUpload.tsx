// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function ImageUpload() {
//   const [preview, setPreview] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const url = URL.createObjectURL(file);
//     setPreview(url);
//   };

//   useEffect(() => {
//     return () => {
//       if (preview) {
//         URL.revokeObjectURL(preview);
//       }
//     };
//   }, [preview]);

//   return (
//     <div className="flex flex-col gap-4">
//       <input
//         type="file"
//         placeholder="JPG , PNG"
//         accept="image/png, image/jpg"
//         onChange={handleChange}
//       />

//       {preview && (
//         <Image
//           src={preview}
//           alt="preview"
//           width={200}
//           height={135}
//           className="w-[200px] h-[135px] object-cover rounded-lg"
//         />
//       )}
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

type Props = {
  file: File | null;
  setFile: (file: File | null) => void;
  preview: string | null;
  setPreview: (url: string | null) => void;
};

export default function ImageUpload({
  // file,
  setFile,
  preview,
  setPreview,
}: Props) {
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

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="relative w-full h-full">
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg"
        className="hidden"
        onChange={handleChange}
      />

      <div
        onClick={handleClick}
        className="w-full h-full cursor-pointer
                   flex items-center justify-center
                   text-sm text-[#71717A]"
      >
        {preview ? (
          <Image
            src={preview}
            alt="preview"
            fill
            className="object-cover rounded-[6px]"
          />
        ) : (
          "JPG, PNG"
        )}
      </div>

      {preview && (
        <button
          onClick={handleRemove}
          className="absolute right-2 bottom-2 bg-white rounded p-1 shadow"
        >
          🗑️
        </button>
      )}
    </div>
  );
}
