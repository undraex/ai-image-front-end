// import ImageAnalysis from "./_components/ImageAnalysis";
// import IngredientRecognition from "./_components/IngredientRecognition";
// import Header from "./_features/Header";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// export default function Home() {
//   return (
//     <div>
//       <div className="w-[1440px] h-[56px] bg-white p-[16px_48px] ">
//         <Header />
//       </div>
//       <div className="w-[1080px] h-[888px] bg-white flex justify-center">
//         <Tabs defaultValue="account" className="w-[400px]">
//           <TabsList>
//             <TabsTrigger value="Image analysis">Image analysis</TabsTrigger>
//             <TabsTrigger value="Ingredient recognition">
//               Ingredient recognition
//             </TabsTrigger>
//             <TabsTrigger value="Image creator">Image creator</TabsTrigger>
//           </TabsList>
//           <ImageAnalysis />
//           <IngredientRecognition/>
//         </Tabs>
//       </div>
//     </div>
//   );
// }

import ImageAnalysis from "./_components/ImageAnalysis";
import ImageCreator from "./_components/ImageCreator";
import IngredientRecognition from "./_components/IngredientRecognition";
import Header from "./_features/Header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div>
      <div className="w-[1440px] h-[56px] bg-white p-[16px_48px]">
        <Header />
      </div>
      <div className="w-[1080px] h-[888px] bg-white flex justify-center">
        <Tabs defaultValue="image-analysis" className="w-full max-w-[600px]">
          <TabsList>
            <TabsTrigger value="image-analysis">Image analysis</TabsTrigger>
            <TabsTrigger value="ingredient-recognition">
              Ingredient recognition
            </TabsTrigger>
            <TabsTrigger value="image-creator">Image creator</TabsTrigger>
          </TabsList>

          <TabsContent value="image-analysis">
            <ImageAnalysis />
          </TabsContent>

          <TabsContent value="ingredient-recognition">
            <IngredientRecognition />
          </TabsContent>

          <TabsContent value="image-creator">
            <ImageCreator />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
