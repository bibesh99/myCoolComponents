import ClickablePaginationSlider from "@/components/clickablePagainationSlider/ClickablePaginationSlider";
import TwoColumnParallax from "@/components/TwoColumnParallax/TwoColumnParallax";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <div className="h-[100vh] w-full bg-rose-600">

      </div>
      <div className="bg-teal-600 overflow-hidden">
        <div className='text-4xl w-full'>
          <h1 className=" text-white text-center">
            We make scheduling easier than ever for you
          </h1>
          <div className="z-40" style={{height: "70vh", overflow: "hidden"}}>
            <TwoColumnParallax/>
          </div>
  
        </div>
      </div>
      <div className="h-full w-full z-50">
        <ClickablePaginationSlider/>
      </div>
    </main>
  );
}
