"user client";
import React from "react";
import LottieW from "./lottieW";
import { FaArrowDown, FaAngleDown } from "react-icons/fa";

const HeroPage = () => {
  return (
    <div
      id="inicio"
      className="h-screen  bg-gradient-radial  flex flex-col  justify-center items-center  relative"
    >
      <div className="absolute top-0 right-0 " style={{ zIndex: -1 }}>
        <LottieW path={"fondo1"} id={"fondo1"} styles={"w-full"}></LottieW>
      </div>

      <div className="w-3/4 md:w-full md:max-w-[900px]  flex flex-col md:flex-row gap-y-3 ">
        <div className="flex justify-center md:w-1/2 ">
          <LottieW
            path={"hero"}
            id={"hero"}
            styles={"max-w-[180px] md:max-w-[300px] lg:max-w-[400px]  md:p-5"}
          ></LottieW>
        </div>

        <div className="md:flex md:justify-center md:flex-col md:w-1/2 ">
          <p className="md:text-left text-[14px] md:text-[16px] text-blue-600 font-light">
            EMPIEZA TU NEGOCIO DIGITAL
          </p>
          <p className="text-[32px] md:text-[32px]  lg:text-[48px] text-blue-600 font-extrabold leading-tight ">
            Estrategias digitales a medida orientadas a resultados
          </p>
          <p className="text-[14px] md:text-[18px] text-slate-500 font-normal">
            Guardsoft es un partner digital listo para involucrarse y llevar a
            sus clientes al próximo nivel
          </p>
        </div>
        <div className="w-full flex justify-center items-center md:hidden ">
          <a href="#nosotros">
            <FaAngleDown
              size={32}
              className="text-blue-600 motion-reduce:animate-bounce duration-100 "
            ></FaAngleDown>
          </a>
        </div>
      </div>
      <div className="hidden w-full md:flex justify-center items-center md:absolute md:bottom-7">
        <a href="#nosotros">
          <FaAngleDown
            size={32}
            className="text-blue-600 motion-reduce:animate-bounce duration-100 "
          ></FaAngleDown>
        </a>
      </div>
    </div>
  );
};

export default HeroPage;
