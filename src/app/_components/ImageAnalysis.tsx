// import SparklesIcon from "../_icons/SparklesIcon";
// import ImageUpload from "./ImageUpload";
// import ReloadIcon from "../_icons/ReloadIcon";
// import { ButtonGroup } from "@/components/ui/button-group";
// import { Button } from "@/components/ui/button";
// import FileIcon from "../_icons/FileIcon";

// export default function ImageAnalysis() {
//   return (
//     <div className="mt-[24px]">
//       <div className=" flex justify-between w-[580px]">
//         <div className="flex gap-2">
//           <SparklesIcon />
//           <p className="font-xl font-inter text-black font-semibold">
//             Image analysis
//           </p>
//         </div>
//         <div>
//           <ReloadIcon />
//         </div>
//       </div>

//       <div>
//         <p className="text-[#71717A] font-[14px] mt-2">
//           Upload a food photo, and AI will detect the ingredients.
//         </p>
//         <div className="w-[580px] h-[40px] border rounded-[6px] border-[#E4E4E7] flex items-center p-[8px_12px] mt-[8px]">
//           <ImageUpload />
//         </div>
//       </div>
//       <div className="flex justify-end w-[580px] mt-[8px]">
//         <ButtonGroup>
//           <Button>Generate</Button>
//         </ButtonGroup>
//       </div>

//       <div className="flex gap-2">
//         <FileIcon />
//         <p className="font-xl font-inter text-black font-semibold">
//           Here is the summary
//         </p>
//       </div>
//       <p className="text-[#71717A] font-[14px] mt-2">
//         First, enter your image to recognize an ingredients.
//       </p>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import SparklesIcon from "../_icons/SparklesIcon";
import ImageUpload from "./ImageUpload";
import ReloadIcon from "../_icons/ReloadIcon";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import FileIcon from "../_icons/FileIcon";

export default function ImageAnalysis() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");

  const handleGenerate = async () => {
    if (!file) return alert("Please upload image");

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const res = await fetch("http://localhost:999/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setSummary(data.description || "No result");
    } catch (err) {
      console.error(err);
      alert("Failed to analyze image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-[24px]">
      {/* Header */}
      <div className="flex justify-between w-[580px]">
        <div className="flex gap-2">
          <SparklesIcon />
          <p className="font-inter text-black font-semibold">Image analysis</p>
        </div>
        <ReloadIcon />
      </div>

      {/* Upload */}
      <p className="text-[#71717A] text-[14px] mt-2">
        Upload a food photo, and AI will detect the ingredients.
      </p>

      <div
        className="w-[580px] h-[40px] border rounded-[6px] border-[#E4E4E7]
                      flex items-center p-[8px_12px] mt-[8px]"
      >
        <ImageUpload
          file={file}
          setFile={setFile}
          preview={preview}
          setPreview={setPreview}
        />
      </div>

      {/* Generate */}
      <div className="flex justify-end w-[580px] mt-[8px]">
        <ButtonGroup>
          <Button onClick={handleGenerate} disabled={loading}>
            {loading ? "Generating..." : "Generate"}
          </Button>
        </ButtonGroup>
      </div>

      {/* Result */}
      <div className="flex gap-2 mt-[24px]">
        <FileIcon />
        <p className="font-inter text-black font-semibold">
          Here is the summary
        </p>
      </div>

      <p className="text-[#71717A] text-[14px] mt-2">
        {summary || "First, enter your image to recognize ingredients."}
      </p>
    </div>
  );
}
