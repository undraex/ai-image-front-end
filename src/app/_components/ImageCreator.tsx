import SparklesIcon from "../_icons/SparklesIcon";
import { Input } from "@/components/ui/input";
import ReloadIcon from "../_icons/ReloadIcon";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import ImageIcon from "../_icons/ImageIcon";

export default function ImageCreator() {
  return (
    <div className="mt-[24px]">
      <div className="flex justify-between w-[580px]">
        <div className="flex gap-2">
          <SparklesIcon />
          <p className="font-xl font-inter text-black font-semibold">
            Food image creator
          </p>
        </div>
        <div>
          <ReloadIcon />
        </div>
      </div>

      <div>
        <p className="text-[#71717A] font-[14px] mt-2">
          What food image do you want? Describe it briefly.
        </p>
        <div className="w-[580px] rounded-[6px] p-[8px_12px] mt-[8px]">
          <Input className="w-[580px] h-[124px]" placeholder="Хоолны тайлбар" />
        </div>
      </div>

      <div className="flex justify-end w-[580px] mt-[8px]">
        <ButtonGroup>
          <Button>Generate</Button>
        </ButtonGroup>
      </div>

      <div className="flex gap-2 mt-[24px]">
        <ImageIcon />
        <p className="font-xl font-inter text-black font-semibold">Result</p>
      </div>
      <p className="text-[#71717A] font-[14px] mt-2">
        First, enter your text to generate an image.
      </p>
    </div>
  );
}
