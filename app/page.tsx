import React, { lazy, Suspense } from "react";
import HeroPage from "@/components/heroPage";
import dynamic from "next/dynamic";
const About = lazy(() => import("@/components/about"));
const Purpose = lazy(() => import("@/components/purpose"));
const Services = lazy(() => import("@/components/services"));
const Proyects = lazy(() => import("@/components/proyects"));
const LocateUs = lazy(() => import("@/components/locateUs"));
const Contact = lazy(() => import("@/components/contact"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <About></About>
        <Purpose></Purpose>
        <Services></Services>
        <Proyects></Proyects>
        <LocateUs></LocateUs>
        <Contact></Contact>
      </Suspense>
    </main>
  );
}
