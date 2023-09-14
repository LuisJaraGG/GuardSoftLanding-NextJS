"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LottieW from "./lottieW";
import { Button } from "@/components/ui/button";
import { FaMap, FaAddressCard, FaPhone } from "react-icons/fa";
import { Link } from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const applyFadeIn = (element: HTMLElement | null) => {
  if (element) {
    element.classList.remove("opacity-0");
    element.classList.add("animate-fade-in");
    element.classList.add("opacity-1");
  }
};

const LocateUs = () => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetCard = entry.target as HTMLDivElement;
            applyFadeIn(targetCard);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((cardRef) => {
      if (cardRef) {
        observer.observe(cardRef);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div id="ubicanos" className="  bg-gradient-radial relative  py-14">
      <div className="h-full w-full flex flex-col justify-center items-center ">
        <div className="w-3/4  flex flex-col gap-y-5">
          <div
            ref={(el) => cardRefs.current.push(el)}
            className="text-center opacity-0 "
          >
            <p className="text-white font-black text-[21px] leading-tight">
              ¿Preparado para un nuevo Proyecto?
            </p>
            <p className="text-white font-light text-[16px] leading-tight">
              Háblanos de tu proyecto
            </p>
          </div>
          <div className="flex flex-col  gap-y-10 pb-2">
            <Card
              ref={(el) => cardRefs.current.push(el)}
              className=" rounded-3xl shadow-lg opacity-0 "
            >
              <CardHeader>
                <CardTitle className="text-center flex justify-center">
                  <FaMap size={32} className="text-blue-600  "></FaMap>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-600 text-[20px] font-black ">
                  Ubicanos
                </p>
                <p className="text-slate-500 text-[14px] font-normal">
                  Los Olivos
                </p>
              </CardContent>
            </Card>
            <Card
              ref={(el) => cardRefs.current.push(el)}
              className=" rounded-3xl shadow-lg opacity-0 "
            >
              <CardHeader>
                <CardTitle className="text-center flex justify-center">
                  <FaAddressCard
                    size={32}
                    className="text-blue-600  "
                  ></FaAddressCard>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-600 text-[20px] font-black ">Correo</p>
                <p className="text-slate-500 text-[14px] font-normal">
                  hola@guardsoft.pe
                </p>
              </CardContent>
            </Card>
            <Card
              ref={(el) => cardRefs.current.push(el)}
              className=" rounded-3xl shadow-lg opacity-0 "
            >
              <CardHeader>
                <CardTitle className="text-center flex justify-center">
                  <FaPhone size={32} className="text-blue-600  "></FaPhone>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-600 text-[20px] font-black">
                  ITelefono
                </p>
                <p className="text-slate-500 text-[14px] font-normal">
                  +51 957 798 775
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* fondo de lottie */}
      <div className="absolute top-0 left-0 right-0" style={{ zIndex: -1 }}>
        <LottieW
          path={"espacio"}
          id={"ubicanos-fondo"}
          styles={"w-full "}
        ></LottieW>
      </div>
      <div
        className="absolute bottom-0  left-0 right-0 md:hidden"
        style={{ zIndex: -1 }}
      >
        <LottieW
          path={"fondo4"}
          id={"ubicanos-fondo4"}
          styles={"w-full  "}
        ></LottieW>
      </div>
    </div>
  );
};

export default LocateUs;
