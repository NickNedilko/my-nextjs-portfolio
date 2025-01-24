import CvButton from "@/components/CvButton";
import CV from "@/components/CvButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-screen relative bg-cover bg-[url('/assets/bg-explosion.png')]">
      <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
        <Image
          src='/assets/MoustacheMan.png'
          alt='MoustacheMan'
          width={560}
          height={560}
          className="w-[300px] h-[300px] z-1 md:h-[560px] md:w-[560px] "
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

        <div className="flex flex-col gap-3 z-10 pl-40 pt-10">
          <h1 className="text-[45px] text-white max-w-[500px] ">Hi, I am Mykola Nedilko
            <span className="text-red-500 ml-10 inline-block">FullStack developer</span>
          </h1>
          <p className="text-[16px] text-gray-200 md:text-gray mb-6 md:pb-2 max-w-[400px]">

 I am responsible, always ready to learn new things and complete tasks on time.
 I try to constantly improve my level as a specialist. First of all, I am looking for a friendly team in which I will be useful and could implement and improve my skills as developer.
          </p>
          <CvButton/>
        </div>
      </div>
    </main>
  );
}
