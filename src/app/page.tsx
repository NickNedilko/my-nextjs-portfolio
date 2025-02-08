import CvButton from "@/components/CvButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')] overflow-y-auto sm:overflow-visible">
      <div className="absolute right-10 md:right-40 bottom-0 z-[1]">
        <Image
          src='/assets/MoustacheMan.png'
          alt='MoustacheMan'
          width={560}
          height={560}
          className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[560px] lg:h-[560px] z-5  "
        />
      </div>
      <div>
        <Image
          src='/assets/top-left-img.png'
          alt='paint'
          width={230}
          height={230}
          className="absolute left-0 top-0"
        />

        <div className="flex flex-col gap-3 z-10 pl-10 pt-10 mr-10 md:pl-40">
          <h1 className="text-[28px] sm:text-[34px] text-white  md:text-[40px] max-w-[400px] text-center ">Hi, I am 
            <span className="text-red-500 ml-10 inline-block">FullStack developer</span>
          </h1>
          <p className="text-[16px]  text-gray-200 md:text-gray mb-6 md:pb-2 max-w-[400px]">

 I am responsible, always ready to learn new things and complete tasks on time.
 I try to constantly improve my level as a specialist. First of all, I am looking for a friendly team in which I will be useful and could implement and improve my skills as developer.
          </p>
          <CvButton/>
        </div>
      </div>
    </main>
  );
}
