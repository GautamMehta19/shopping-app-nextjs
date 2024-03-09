import HeroSlider from "@/components/HeroSlider";
import NewProduct from "@/components/NewProduct";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <NewProduct />
      <Testimonial />
    </main>
  );
}
