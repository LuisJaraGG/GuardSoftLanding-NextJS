import HeroPage from "@/components/heroPage";

import dynamic from "next/dynamic";
const Purpose = dynamic(() => import("@/components/purpose"),{ ssr: false });
const Services = dynamic(() => import("@/components/services"), { ssr: false });
const Proyects = dynamic(() => import("@/components/proyects"), { ssr: false });
const LocateUs = dynamic(() => import("@/components/locateUs"), { ssr: false });
const Contact = dynamic(() => import("@/components/contact"), { ssr: false });

const About = dynamic(() => import("@/components/about"));
// import { useState } from "react";


export default function Home() {
  // const [showPurpose, setshowPurpose] = useState(false)
  // const [showServices, setshowServices] = useState(false);
  // const [showProyects, setshowProyects] = useState(false);
  // const [showLocateUs, setshowLocateUs] = useState(false);
  // const [showContact, setshowContact] = useState(false);
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
