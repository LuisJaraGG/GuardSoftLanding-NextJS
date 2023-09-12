"use client";
import React from "react";
import Logo from "./logo";
const NavBar = () => {
  return (
    <div className="hidden md:flex shadow-md justify-center bg-white fixed top-0 left-0 right-0 z-10 ">
      <div className=" flex items-center justify-between w-3/4 min-w-[500px] max-w-[900px]  p-4">
        <div className="w-[25%]">
          <a href="#inicio">
            <Logo />
          </a>
        </div>

        <div className="w-[75%] flex justify-end">
          <ul className="flex gap-2  text-xs lg:text-base ">
            <li className="hover:text-blue-700 hover:underline transition duration-300 ">
              <a href="#inicio">Inicio</a>
            </li>
            <li className="hover:text-blue-700 hover:underline  transition duration-300 ">
              <a href="#nosotros">Nosotros</a>
            </li>
            <li className="hover:text-blue-700 hover:underline  transition duration-300 ">
              <a href="#proposito">Propósito</a>
            </li>
            <li className="hover:text-blue-700 hover:underline  transition duration-300 ">
              <a href="#servicio">Servicio</a>
            </li>
            <li className="hover:text-blue-700 hover:underline  transition duration-300 ">
              <a href="#proyectos">Proyectos</a>
            </li>
            <li className="hover:text-blue-700 hover:underline  transition duration-300 ">
              <a href="#ubicanos">Ubicanos</a>
            </li>
            <li className="hover:text-blue-700 hover:underline  transition duration-300 ">
              <a href="#contactos">Contactanos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
