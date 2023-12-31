"use client";
import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LottieW from "./lottieW";
import { useInView } from "react-intersection-observer";

const applyFadeIn = (element: HTMLElement | null) => {
  if (element) {
    element.classList.remove("opacity-0");
    element.classList.add("animate-fade-in");
    element.classList.add("opacity-1");
  }
};

const Purpose = () => {
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
    <div
      id="proposito"
      className=" md:h-screen bg-gradient-radial relative  pb-36"
    >
      <div className="h-full w-full flex flex-col  items-center">
        <div className="w-3/4  flex flex-col gap-y-2">
          <div
            ref={(el) => cardRefs.current.push(el)}
            className="text-center mt-20 md:mt-56 opacity-0 "
          >
            <p className="text-white font-black text-[26px] md:text-[48px] leading-none">
              Propósito
            </p>
            <p className="text-white font-light text-[12px] md:text-[20px] mb-5">
              Unidos por nuestros valores compartidos
            </p>
          </div>

          <div className=" flex flex-col md:flex-row justify-center gap-y-16 0">
            <Card
              ref={(el) => cardRefs.current.push(el)}
              className=" rounded-3xl shadow-lg fade-in-element opacity-0 md:w-[300px] md:h-[270px] md:m-auto md:px-5 md:pt-5  md:hover:border md:hover:border-blue-600"
            >
              <CardHeader className=" px-3 pt-3 pb-0">
                <CardTitle className="text-center">
                  <p className="text-blue-600 text-[20px] font-black md:text-[24px] ">
                    Apostamos por las personas
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-500 text-[14px]  md:text-[18px] font-normal">
                  Apostamos por el talento y brindamos oportunidades laborales a
                  las personas en la búsqueda de su primer trabajo en
                  tecnología.
                </p>
              </CardContent>
            </Card>
            <Card
              ref={(el) => cardRefs.current.push(el)}
              className=" rounded-3xl shadow-lg fade-in-element opacity-0 md:w-[300px] md:h-[270px] md:m-auto md:px-5 md:pt-5 md:hover:border md:hover:border-blue-600"
            >
              <CardHeader className="px-3 pt-3 pb-0">
                <CardTitle className="text-center">
                  <p className="text-blue-600 text-[20px] font-black md:text-[24px]">
                    Impacto en la sociedad
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-500 text-[14px] md:text-[18px]  font-normal">
                  A través de las soluciones queremos enseñar a más personas los
                  beneficios que brinda la tecnología.
                </p>
              </CardContent>
            </Card>
            <Card
              ref={(el) => cardRefs.current.push(el)}
              className=" rounded-3xl shadow-lg fade-in-element opacity-0 md:w-[300px] md:h-[270px] md:m-auto md:px-5 md:pt-5 md:hover:border md:hover:border-blue-600"
            >
              <CardHeader className="px-3 pt-3 pb-0">
                <CardTitle className="text-center">
                  <p className="text-blue-600 text-[20px] font-black md:text-[24px]">
                    Inclusión y diversidad
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-500 text-[14px] md:text-[18px]  font-normal ">
                  Nuestro equipo es multidisciplinario y diverso, buscamos la
                  inclusión de más personas en este sector.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* fondo de lottie */}
      <div className="absolute top-0 left-0 right-0  " style={{ zIndex: -1 }}>
        <LottieW
          path={"espacio"}
          id={"proposito-fondo"}
          styles={" h-30 object-fill"}
        ></LottieW>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: -1 }}>
        <LottieW
          path={"fondo4"}
          id={"propositos-fondo2"}
          styles={"w-full md:hidden"}
        ></LottieW>
      </div>
    </div>
  );
};

export default Purpose;
