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

const LocateUs = () => {
  return (
    <div
      id="ubicanos"
      className="h-screen bg-gradient-radial relative  min-h-[812px]"
    >
      <div className="h-full w-full flex flex-col justify-center items-center ">
        <div className="w-3/4  flex flex-col gap-y-14">
          <div className="text-center ">
            <p className="text-white font-black text-[32px] leading-tight">
              ¿Preparado para un nuevo Proyecto?
            </p>
            <p className="text-white font-normal text-[15px] leading-tight">
              Háblanos de tu proyecto
            </p>
            <Button
              className="py-1 px-6 rounded-3xl bg-transparent text-white font-bold mt-2 mb-2 hover:bg-white hover:text-black text-[12px]"
              variant="outline"
            >
              <a href="#ubicanos">Contactanos</a>
            </Button>
          </div>

          <Card className=" rounded-3xl shadow-lg  hover:animate-bounce">
            <CardHeader>
              <CardTitle className="text-center flex justify-center">
                <FaMap size={32} className="text-blue-600  "></FaMap>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-600 text-[20px] font-black ">Ubicanos</p>
              <p className="text-slate-500 text-[14px] font-normal">
                Los Olivos
              </p>
            </CardContent>
          </Card>
          <Card className=" rounded-3xl shadow-lg hover:animate-bounce">
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
          <Card className=" rounded-3xl shadow-lg hover:animate-bounce">
            <CardHeader>
              <CardTitle className="text-center flex justify-center">
                <FaPhone size={32} className="text-blue-600  "></FaPhone>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-600 text-[20px] font-black">ITelefono</p>
              <p className="text-slate-500 text-[14px] font-normal">
                +51 957 798 775
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* fondo de lottie */}
      <div className="absolute top-0 left-0" style={{ zIndex: -1 }}>
        <LottieW
          path={"espacio"}
          id={"ubicanos-fondo"}
          styles={"w-full "}
        ></LottieW>
      </div>
      <div className="absolute bottom-0  left-0" style={{ zIndex: -1 }}>
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
