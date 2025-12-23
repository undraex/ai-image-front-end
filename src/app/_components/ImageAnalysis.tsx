"use client";

import { useState } from "react";
import SparklesIcon from "../_icons/SparklesIcon";
import ImageUpload from "./ImageUpload";
import ReloadIcon from "../_icons/ReloadIcon";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import FileIcon from "../_icons/FileIcon";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import axios from "axios";

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

      const res = await axios.post("http://localhost:999/analyze", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data.description);
      setSummary(res.data.description || "No result");
    } catch (err) {
      console.error(err);
      alert("Failed to analyze image");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="mt-[24px]">
      <div className="flex justify-between w-[580px]">
        <div className="flex gap-2">
          <SparklesIcon />
          <p className="font-inter text-black font-semibold">Image analysis</p>
        </div>
        <ReloadIcon />
      </div>

      <p className="text-[#71717A] text-[14px] mt-2">
        Upload a photo, and AI will detect the ingredients.
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

      {preview && (
        <div className="relative w-[257px] h-[187px] rounded-[16px] overflow-hidden mt-4">
          <Image src={preview} alt="preview" fill className="object-cover" />
          <button
            onClick={handleRemove}
            className="absolute right-3 bottom-3 w-8 h-8 bg-white rounded-md shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
          >
            <Trash2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      )}

      <div className="flex justify-end w-[580px] mt-[8px]">
        <ButtonGroup>
          <Button onClick={handleGenerate} disabled={loading}>
            {loading ? "Generating..." : "Generate"}
          </Button>
        </ButtonGroup>
      </div>

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
