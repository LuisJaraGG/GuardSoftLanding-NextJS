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

const Purpose = () => {
  return (
    <div
      id="proposito"
      className="h-screen bg-gradient-radial relative  min-h-[812px]"
    >
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="w-3/4  flex flex-col gap-y-5">
          <div className="text-center ">
            <p className="text-white font-black text-[48px] leading-none">
              Propósito
            </p>
            <p className="text-white font-normal text-[15px]">
              Unidos por nuestros valores compartidos
            </p>
          </div>

          <Card className=" rounded-3xl shadow-lg ">
            <CardHeader>
              <CardTitle className="text-center">
                <p className="text-blue-600 text-[20px] font-black ">
                  Apostamos por las personas
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-500 text-[14px] font-normal">
                Apostamos por el talento y brindamos oportunidades laborales a
                las personas en la búsqueda de su primer trabajo en tecnología.
              </p>
            </CardContent>
          </Card>
          <Card className=" rounded-3xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">
                <p className="text-blue-600 text-[20px] font-black">
                  Impacto en la sociedad
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-500 text-[14px] font-normal">
                A través de las soluciones queremos enseñar a más personas los
                beneficios que brinda la tecnología.
              </p>
            </CardContent>
          </Card>
          <Card className=" rounded-3xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">
                <p className="text-blue-600 text-[20px] font-black">
                  Inclusión y diversidad
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-500 text-[14px] font-normal">
                Nuestro equipo es multidisciplinario y diverso, buscamos la
                inclusión de más personas en este sector.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* fondo de lottie */}
      <div className="absolute top-0 left-0" style={{ zIndex: -1 }}>
        <LottieW
          path={"espacio"}
          id={"proposito-fondo"}
          styles={"w-full "}
        ></LottieW>
      </div>
      <div className="absolute bottom-0 left-0" style={{ zIndex: -1 }}>
        <LottieW
          path={"fondo4"}
          id={"propositos-fondo2"}
          styles={"w-full  "}
        ></LottieW>
      </div>
    </div>
  );
};

export default Purpose;
