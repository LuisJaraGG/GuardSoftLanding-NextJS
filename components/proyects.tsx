"use client";
import React, { useState } from "react";
import LottieW from "./lottieW";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const slides = [
  {
    url: "/images/ecarlogo.png",
    tittle: "Ecar",
    content:
      "Sistema de consulta integrada para vehículos, SUNARP, Revisión Técnica, SOAT, Papeletas de Lima y Callao",
    link: "https://play.google.com/store/apps/details?id=com.centinel.ecar&hl=es&gl=US",
  },
  {
    url: "/images/cloudhotel.png",
    tittle: "CloudHotel",
    content:
      "Nuestra aplicacion permite gestionar hoteles de manera facil y sencilla.",
    link: "https://play.google.com/store/apps/details?id=com.guardsoft.cloudhotel&hl=es_CL&gl=US",
  },
  {
    url: "/images/mibulla.png",
    tittle: "MiBulla",
    content:
      "Mi Bulla, una manera fácil de buscar y escuchar tus emisoras favoritas. Todas las emisoras del Perú.",
    link: "https://play.google.com/store/apps/details?id=pe.guardsoft.mibulla&hl=es_CL&gl=US",
  },
];

interface Props {
  image: string;
  tittle?: string;
  content?: string;
  link: string;
}

const card = ({ image, tittle, content, link }: Props) => (
  <a href={`${link}`}>
    <Card className=" rounded-lg hover:border-blue-600 p-4 h-[300px] pb-0">
      <CardHeader>
        <CardTitle className="flex justify-center px-16">
          <img
            className="object-cover"
            src={`${image}`}
            alt={`${tittle}`}
            width={150}
            height={150}
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-blue-600 text-[20px] font-black ">{`${tittle}`}</p>
        <p className="text-slate-500 text-[14px] font-normal">{`${content}`}</p>
      </CardContent>
    </Card>
  </a>
);



const Proyects = () => {
  return (
    <div id="proyectos" className="bg-gradient-radial  relative py-44 ">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="w-3/4 flex flex-col   ">
          <div className="text-center">
            <p className="text-[32px] font-black text-blue-600">
              Nuestros Proyectos
            </p>
            <p className="text-[16px] font-normal text-slate-500">
              Nuestros proyectos se basan en la optimización de procesos y
              soluciones prácticas y rápidas según las necesidades de nuestros
              clientes
            </p>
          </div>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={true}
            autoplay={true}
            autoplaySpeed={3000}
          >
            {slides.map((slide, index) => {
              return (
                <div
                  key={index}
                  className="max-w-[1400px]  w-full m-auto py-8 px-2 relative group "
                >
                  <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
                    {card({
                      image: slide.url,
                      tittle: slide.tittle,
                      content: slide.content,
                      link: slide.link,
                    })}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      {/* inicio de lo de lottie */}
      <div className="absolute top-0 right-0 z-0" style={{ zIndex: -1 }}>
        <LottieW
          path={"fondo1"}
          id={"Servicios-fondo1"}
          styles={"w-full"}
        ></LottieW>
      </div>

      <div className="absolute bottom-0  left-0" style={{ zIndex: -1 }}>
        <LottieW
          path={"fondo4"}
          id={"contactanos-fondo4as"}
          styles={"w-full  "}
        ></LottieW>
      </div>
    </div>
  );
};

export default Proyects;
