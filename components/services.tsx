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
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const applyFadeIn = (element: HTMLElement | null) => {
  if (element) {
    element.classList.remove("opacity-0");
    element.classList.add("animate-fade-in");
    element.classList.add("opacity-1");
  }
};

const Services = () => {
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
    <div id="servicio" className=" bg-gradient-radial relative pt-16  ">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="w-3/4  flex flex-col gap-y-12">
          <div
            ref={(el) => cardRefs.current.push(el)}
            className="text-center opacity-0 "
          >
            <p className="text-blue-600 font-black text-[32px] leading-tight">
              Servicios
            </p>
            <p className="text-slate-500 font-normal text-[15px]">
              Servicios de la mejor calidad con la mejor tecnología
            </p>
          </div>

          <div className=" flex flex-col gap-y-5 pb-16">
            <Card
              ref={(el) => cardRefs.current.push(el)}
              className=" rounded-3xl shadow-lg opacity-0 "
            >
              <CardHeader className="px-2 py-1">
                <CardTitle className="text-center">
                  <LottieW
                    path={"servicio1"}
                    id={"servicio1"}
                    styles={"w-full  h-20 "}
                  ></LottieW>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-600 text-[20px] font-black ">
                  Consultoría DIgital
                </p>
                <p className="text-slate-500 text-[13px] font-normal">
                  Realizamos una evaluación y replanteamos los procesos
                  actuales, para crear nuevas oportunidades de crecimiento
                  enfocados en transformación digital.
                </p>
              </CardContent>
            </Card>

            <Card
              ref={(el) => cardRefs.current.push(el)}
              className=" rounded-3xl shadow-lg opacity-0 "
            >
              <CardHeader className="px-2 py-1">
                <CardTitle className="text-center">
                  <LottieW
                    path={"servicio2"}
                    id={"servicio2"}
                    styles={"w-full h-20  "}
                  ></LottieW>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-600 text-[20px] font-black">UX/UI</p>
                <p className="text-slate-500 text-[13px] font-normal">
                  Identificamos las necesidades y desarrollamos productos
                  digitales centrados en brindar una experiencia de calidad a
                  los usuarios.
                </p>
              </CardContent>
            </Card>
            <Card
              ref={(el) => cardRefs.current.push(el)}
              className=" rounded-3xl shadow-lg opacity-0 "
            >
              <CardHeader className="px-2 py-1">
                <CardTitle className="text-center">
                  <LottieW
                    path={"servicio3"}
                    id={"servicio3"}
                    styles={"w-full  h-20 "}
                  ></LottieW>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-600 text-[20px] font-black">
                  Desarrollo de Software
                </p>
                <p className="text-slate-500 text-[13px] font-normal">
                  Desarrollo de aplicaciones móviles y web sobre servicios
                  basado en cloudcomputing, brindamos soluciones de
                  infraestructura en la nube.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* fondo de lottie */}

      <div className="absolute bottom-0  left-0 right-0" style={{ zIndex: -1 }}>
        <LottieW
          path={"fondo4"}
          id={"servicios-fondo1"}
          styles={"w-full  "}
        ></LottieW>
      </div>

      <div className="absolute top-0  left-0 right-0" style={{ zIndex: -1 }}>
        <LottieW
          path={"fondo3"}
          id={"servicio-fondo2"}
          styles={"w-full"}
        ></LottieW>
      </div>
    </div>
  );
};

export default Services;
