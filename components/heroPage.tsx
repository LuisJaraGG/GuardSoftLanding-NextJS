"user client";
import React from "react";
import LottieW from "./lottieW";
import { FaArrowDown, FaAngleDown } from "react-icons/fa";

const HeroPage = () => {
  return (
    <div
      id="inicio"
      className="h-screen bg-gradient-radial w-full flex flex-col justify-center items-center  relative min-w-[428px] min-h-[812px]"
    >
      <div className="absolute top-0 right-0 " style={{ zIndex: -1 }}>
        <LottieW path={"fondo1"} id={"fondo1"} styles={"w-full"}></LottieW>
      </div>
      <div className="w-3/4  flex flex-col gap-y-3 ">
        <div className="flex justify-center">
          <LottieW path={"hero"} id={"hero"}></LottieW>
        </div>
        <div>
          <p className="text-[14px] text-blue-600 font-normal">
            EMPIEZA TU NEGOCIO DIGITAL
          </p>
          <p className="text-[40px] text-blue-600 font-extrabold leading-tight">
            Estrategias digitales a medida orientadas a resultados
          </p>
          <p className="text-[14px] text-slate-500 font-normal">
            Guardsoft es un partner digital listo para involucrarse y llevar a
            sus clientes al próximo nivel
          </p>
        </div>
        <div className="flex justify-center">
          <a href="#nosotros">
            <FaAngleDown
              size={32}
              className="text-blue-600 motion-reduce:animate-bounce duration-100 "
            ></FaAngleDown>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;