"use client";
import React from "react";
import Image from "next/image";
import LottieW from "./lottieW";

const About = () => {
  return (
    <div id="nosotros" className="h-screen bg-gradient-radial  min-h-[812px]">
      <div className="h-full w-full  flex flex-col-reverse justify-center items-center relative">
        <div className="w-full h-[40%] relative">
          <img
            src="/images/about.jpg"
            alt="about image"
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-blue-900 opacity-30 top-0 animate-in"></div>
        </div>

        <div className="w-3/4 min-w-[323px] h-[60%] flex  items-center ">
          <div>
            <p className=" text-[20px] font-normal text-blue-600">
              Sobre nosotros
            </p>
            <p className=" text-[36px] font-black text-blue-600">
              ¿Quienes <br /> Somos?
            </p>
            <p className=" text-[20px] font-normal text-slate-500">
              Guardsoft es una empresa peruana dedica a proveer soluciones del
              tipo informático para aquellas empresas que deseen optimizar su
              gestión: SISTEMAS INFORMÁTICOS A MEDIDA.
            </p>
          </div>
        </div>

        <div className="absolute top-0">
          <LottieW
            path={"fondo1"}
            id={"fondo2"}
            styles={"w-full h-full"}
          ></LottieW>
        </div>
      </div>
    </div>
  );
};

export default About;
