"use client";

import SparklesIcon from "../_icons/SparklesIcon";
import ReloadIcon from "../_icons/ReloadIcon";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import FileIcon from "../_icons/FileIcon";
import { BACK_END_URL } from "../_constants";
import axios from "axios";
import { useState } from "react";

export default function IngredientRecognition() {
  const [text, setText] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleGenerate = async () => {
    try {
      const data = await axios.post(`${BACK_END_URL}/recognition`, {
        text: text,
      });
      setGeneratedText(data.data.ingredients);
    } catch (err) {
      console.error("Request failed:", err);
    } finally {
    }
  };

  return (
    <div className="mt-[24px]">
      <div className="flex justify-between w-[580px]">
        <div className="flex gap-2">
          <SparklesIcon />
          <p className="font-xl font-inter text-black font-semibold">
            Ingredient recognition
          </p>
        </div>
        <button>
          <ReloadIcon />
        </button>
      </div>

      <div>
        <p className="text-[#71717A] font-[14px] mt-2">
          Describe the food, and AI will detect the ingredients.
        </p>
        <div className="w-[580px] rounded-[6px] p-[8px_12px] mt-[8px]">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Орц тодорхойлох"
            className="w-full py-2 px-3 border rounded-md min-h-31"
          />
        </div>
      </div>

      <div className="flex justify-end w-[580px] mt-[8px]">
        <ButtonGroup>
          <Button onClick={handleGenerate}>Generate</Button>
        </ButtonGroup>
      </div>

      <div className="flex gap-2 mt-[24px]">
        <FileIcon />
        <p className="font-xl font-inter text-black font-semibold">
          Identified Ingredients
        </p>
      </div>
      <textarea
        value={
          generatedText
            ? generatedText
            : "First, enter your text to recognize ingredients."
        }
        readOnly
        className="w-[580px] text-[#71717A] font-[14px] mt-2 py-2 px-3 border rounded-md min-h-31"
      />
    </div>
  );
}
