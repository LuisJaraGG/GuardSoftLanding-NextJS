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

const Services = () => {
  return (
    <div
      id="servicio"
      className="h-screen bg-gradient-radial relative min-w-[428px] min-h-[812px]"
    >
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="w-3/4  flex flex-col gap-y-2">
          <div className="text-center ">
            <p className="text-blue-600 font-black text-[32px] leading-tight">
              Servicios
            </p>
            <p className="text-slate-500 font-normal text-[15px]">
              Servicios de la mejor calidad con la mejor tecnología
            </p>
          </div>

          <Card className=" rounded-3xl shadow-lg ">
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
                Realizamos una evaluación y replanteamos los procesos actuales,
                para crear nuevas oportunidades de crecimiento enfocados en
                transformación digital.
              </p>
            </CardContent>
          </Card>

          <Card className=" rounded-3xl shadow-lg">
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
                digitales centrados en brindar una experiencia de calidad a los
                usuarios.
              </p>
            </CardContent>
          </Card>
          <Card className=" rounded-3xl shadow-lg">
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
                Desarrollo de aplicaciones móviles y web sobre servicios basado
                en cloudcomputing, brindamos soluciones de infraestructura en la
                nube.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* fondo de lottie */}

      <div className="absolute bottom-0  left-0" style={{ zIndex: -1 }}>
        <LottieW
          path={"fondo2"}
          id={"servicio-fondo1"}
          styles={"w-full  "}
        ></LottieW>
      </div>

      <div className="absolute top-0  left-0" style={{ zIndex: -1 }}>
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
