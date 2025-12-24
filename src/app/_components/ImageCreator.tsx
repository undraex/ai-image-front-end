"use client";

import { useState } from "react";

import SparklesIcon from "../_icons/SparklesIcon";
import ReloadIcon from "../_icons/ReloadIcon";
import ImageIcon from "../_icons/ImageIcon";

import { Input } from "@/components/ui/input";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

import { BACK_END_URL } from "../_constants";
import axios from "axios";

export default function ImageCreator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return alert("Please enter a prompt");

    setLoading(true);

    try {
      const res = await axios.post(
        `${BACK_END_URL}/image/`,
        { prompt },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(res.data);
      setImage(res.data.image);
    } catch (err) {
      console.error(err);
      alert("Failed to generate image");
    } finally {
      setLoading(false);
    }
  };

  const handleReload = () => {
    setPrompt("");
    setImage(null);
  };

  return (
    <div className="mt-[24px]">
      <div className="flex justify-between w-[580px]">
        <div className="flex gap-2">
          <SparklesIcon />
          <p className="font-xl font-inter text-black font-semibold">
            Image creator
          </p>
        </div>

        <button onClick={handleReload}>
          <ReloadIcon />
        </button>
      </div>

      <p className="text-[#71717A] font-[14px] mt-2">
        What image do you want? Describe it briefly.
      </p>

      <div className="w-[580px] rounded-[6px] mt-[8px]">
        <Input
          className="w-[580px] h-[124px]"
          placeholder="Тайлбар"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div className="flex justify-end w-[580px] mt-[8px]">
        <ButtonGroup>
          <Button onClick={handleGenerate} disabled={loading || !prompt.trim()}>
            {loading ? "Generating..." : "Generate"}
          </Button>
        </ButtonGroup>
      </div>

      <div className="flex gap-2 mt-[24px]">
        <ImageIcon />
        <p className="font-xl font-inter text-black font-semibold">Result</p>
      </div>

      {!image && (
        <p className="text-[#71717A] font-[14px] mt-2">
          First, enter your text to generate an image.
        </p>
      )}

      {image && (
        <img
          src={image} // Base64 string works fine here
          alt="Generated food"
          className="mt-4 rounded-md border w-[580px] object-cover"
        />
      )}
    </div>
  );
}
