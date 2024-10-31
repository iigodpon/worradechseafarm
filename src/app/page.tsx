import Image from "next/image";
import Wallpaper from "../../public/pic/บ่อ/11.jpg";

export default function Home() {
  return (
    <div className="bg-[#131314] font-[family-name:var(--font-geist-sans)]">
      <div className="bg-[#131314] w-full h-[60px]"></div>

      <Image src={Wallpaper} alt="" className="w-full h-[300px] opacity-90" />

      <div className="w-full h-[1000px]"></div>
    </div>
  );
}
