import HeroPage from "@/components/heroPage";
import About from "@/components/about";
import Purpose from "@/components/purpose";
import Services from "@/components/services";
import Proyects from "@/components/proyects";
import LocateUs from "@/components/locateUs";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="">
      <HeroPage></HeroPage>
      <About></About>
      <Purpose></Purpose>
      <Services></Services>
      <Proyects></Proyects>
      <LocateUs></LocateUs>
      <Contact></Contact>
    </main>
  );
}
