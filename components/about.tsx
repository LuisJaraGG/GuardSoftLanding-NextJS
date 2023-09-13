"use client";
import React from "react";
import Image from "next/image";
import LottieW from "./lottieW";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";


const About = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5, // Ajusta el valor según tus necesidades
    });

    useEffect(() => {
      if (inView) {
        // Cuando el elemento esté en la vista, puedes aplicar el efecto "fade in" aquí
        const element = document.querySelector(".fade-in-element");
        if (element) {
          element.classList.add("animate-fade-in");
        }
      }
    }, [inView]);
  return (
    <div id="nosotros" className="h-screen bg-gradient-radial">
      <div className="h-full w-full  flex flex-col-reverse justify-center items-center relative">
        <div className="w-full h-[30%] relative">
          <Image
            src="/images/about.jpg"
            alt="about image"
            className="w-full h-full object-cover"
          ></Image>
          <div className="absolute w-full h-full bg-blue-900 opacity-30 top-0 animate-in"></div>
        </div>

        <div
          ref={ref}
          className="w-3/4  h-[70%] flex  items-center fade-in-element "
          style={{
            visibility: inView ? "visible" : "hidden",
            opacity: inView ? 1 : 0,
          }}
        >
          <div>
            <p className=" text-[20px] font-normal text-blue-600">
              Sobre nosotros
            </p>
            <p className=" text-[32px] font-black text-blue-600  leading-tight ">
              ¿Quienes Somos?
            </p>
            <p className=" text-[16px] font-normal text-slate-500 leading-relaxed">
              Guardsoft es una empresa peruana dedica a proveer soluciones del
              tipo informático para aquellas empresas que deseen optimizar su
              gestión: SISTEMAS INFORMÁTICOS A MEDIDA.
            </p>
          </div>
        </div>

        <div className="absolute top-0 " style={{ zIndex: -1 }}>
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
