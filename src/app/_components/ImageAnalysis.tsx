import { TabsContent } from "@radix-ui/react-tabs";
import SparklesIcon from "../_icons/SparklesIcon";
import ImageUpload from "./ImageUpload";
import ReloadIcon from "../_icons/ReloadIcon";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import FileIcon from "../_icons/FileIcon";

export default function ImageAnalysis() {
  return (
    <div className="mt-[24px]">
      <TabsContent value="Image analysis">
        <div className=" flex justify-between w-[580px]">
          <div className="flex gap-2">
            <SparklesIcon />
            <p className="font-xl font-inter text-black font-semibold">
              Image analysis
            </p>
          </div>
          <div>
            <ReloadIcon />
          </div>
        </div>
      </TabsContent>

      <div>
        <p className="text-[#71717A] font-[14px] mt-2">
          Upload a food photo, and AI will detect the ingredients.
        </p>
        <div className="w-[580px] h-[40px] border rounded-[6px] border-[#E4E4E7] flex items-center p-[8px_12px] mt-[8px]">
          <ImageUpload />
        </div>
      </div>
      <div className="flex justify-end w-[580px] mt-[8px]">
        <ButtonGroup>
          <Button>Generate</Button>
        </ButtonGroup>
      </div>

      <div className="flex gap-2">
        <FileIcon />
        <p className="font-xl font-inter text-black font-semibold">
          Here is the summary
        </p>
      </div>
      <p className="text-[#71717A] font-[14px] mt-2">
        First, enter your image to recognize an ingredients.
      </p>
    </div>
  );
}
