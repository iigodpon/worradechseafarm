import Image from "next/image";
import Wallpaper from "../../public/pic/บ่อ/11.jpg";

export default function Home() {
  return (
    <div className="bg-[#131314] font-[family-name:var(--font-geist-sans)]">
      <div className="bg-[#131314] w-full h-[60px] flex items-center px-4">
        <span className="text-white text-[30px]">วรเดช</span>
        <span className="text-white pl-1">ฟาร์มทะเล</span>
      </div>

      <div className="flex justify-center">
        <Image
          src={Wallpaper}
          alt=""
          className="w-full lg:w-[1300px] lg:h-[500px] h-[300px] opacity-90"
        />
      </div>

      <div className="w-full h-[1000px]"></div>
    </div>
  );
}
