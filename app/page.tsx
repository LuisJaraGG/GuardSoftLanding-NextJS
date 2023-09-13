import HeroPage from "@/components/heroPage";

import dynamic from "next/dynamic";
const Purpose = dynamic(() => import("@/components/purpose"));
const Services = dynamic(() => import("@/components/services"));
const Proyects = dynamic(() => import("@/components/proyects"));
const LocateUs = dynamic(() => import("@/components/locateUs"));
const Contact = dynamic(() => import("@/components/contact"));

const About = dynamic(() => import("@/components/about"));


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
