import Image from "next/image";
import Main from "@/components/main/index"
import Categories from "@/components/categories/index"
import Deneme from "@/components/deneme/index"
import Gıf from "@/components/gıftext/index"
import Sineklik from "@/components/sineklik/index"

export default function Home() {
  return (
    <div >
      <Main/>
      <Categories/>
      <Deneme/>
      <Gıf/>
      <Sineklik/>
    </div>
  );
}
