"use client";
import React from "react";
import LottieW from "./lottieW";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
    swipeable: false, // Desactivar swipeable en escritorio
    infinite: false, // Desactivar infinite en escritorio
    autoPlay: false, // Desactivar autoplay en escritorio // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Proyects = () => {
  return (
    <div
      id="proyectos"
      className="h-screen w-full bg-gradient-radial  relative  min-h-[812px]"
    >
      <div className="h-full w-full flex flex-col  justify-center items-center">
        <div className="w-3/4 flex flex-col gap-y-24 ">
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
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={4000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop", "mobile", "tablet"]}
            dotListClass="custom-dot-list-style"
            itemClass=" mx-1"
          >
            <a href="https://play.google.com/store/apps/details?id=com.centinel.ecar&hl=en&gl=US">
              <Card className=" rounded-3xl    mb-5 h-600 hover:border-blue-600">
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <img
                      className=" border-blue-600 object-cover"
                      src="/images/ecarlogo.png"
                      alt="ecarLogo"
                      width={150}
                      height={150}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center ">
                  <p className="text-blue-600 text-[20px] font-black "> Ecar</p>
                  <p className="text-slate-500 text-[14px] font-normal">
                    Sistema de consulta integrada para vehículos, SUNARP,
                    Revisión Técnica, SOAT, Papeletas de Lima y Callao
                  </p>
                </CardContent>
              </Card>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.guardsoft.cloudhotel&hl=en&gl=US">
              <Card className=" rounded-3xl  h-600  hover:border-blue-600 ">
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <img
                      className="object-cover"
                      src="/images/cloudhotel.png"
                      alt="CloudHotel"
                      width={150}
                      height={150}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-600 text-[20px] font-black ">
                    Cloud Hotel
                  </p>
                  <p className="text-slate-500 text-[14px] font-normal">
                    Nuestra aplicacion permite gestionar hoteles de manera facil
                    y sencilla en cualquier momento.
                  </p>
                </CardContent>
              </Card>
            </a>
            <a href="https://play.google.com/store/apps/details?id=pe.guardsoft.mibulla&hl=en&gl=US">
              <Card className=" rounded-3xl h-600   hover:border-blue-600">
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <img
                      className="object-cover"
                      src="/images/mibulla.png"
                      alt="mibullaLogo"
                      width={150}
                      height={150}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-600 text-[20px] font-black ">
                    MiBulla
                  </p>
                  <p className="text-slate-500 text-[14px] font-normal">
                    Mi Bulla, una forma fácil de buscar y escuchar tus emisoras
                    favoritas. Todas las estaciones del Perú.
                  </p>
                </CardContent>
              </Card>
            </a>
          </Carousel>
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
