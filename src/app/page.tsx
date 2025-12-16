import ImageAnalysis from "./_components/ImageAnalysis";
import Header from "./_features/Header";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Home() {
  return (
    <div>
      <div className="w-[1440px] h-[56px] bg-white p-[16px_48px] ">
        <Header />
      </div>
      <div className="w-[1080px] h-[888px] bg-white flex justify-center">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="Image analysis">Image analysis</TabsTrigger>
            <TabsTrigger value="Ingredient recognition">
              Ingredient recognition
            </TabsTrigger>
            <TabsTrigger value="Image creator">Image creator</TabsTrigger>
          </TabsList>
          <ImageAnalysis />
        </Tabs>
      </div>
    </div>
  );
}
