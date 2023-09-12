"use client";
import Logo from "./logo";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NavBarMovil = () => {
  const [clicked, setclicked] = useState(false);

  return (
    <div>
      <nav className="flex justify-center shadow-sm md:hidden bg-white fixed top-0 left-0 right-0 z-10  min-w-[428px]">
        <div className=" w-3/4  flex justify-between items-center p-2">
          <div>
            <a href="#inicio">
              <Logo />
            </a>
          </div>
          <div className="flex items-center">
            <button onClick={() => setclicked(!clicked)}>
              <Sheet>
                <SheetTrigger asChild className="flex items-center">
                  <FaBars
                    size={20}
                    className="transition-opacity duration-400 opacity-100 hover:opacity-0"
                  ></FaBars>
                </SheetTrigger>
                <SheetContent
                  side={"left"}
                  className="w-full h-full border-none bg-transparent"
                >
                  <SheetHeader>
                    <SheetDescription>
                      <ul className=" flex flex-col h-full w-full gap-8 text-base mt-14 text-slate-700 font-extrabold z-20">
                        <SheetClose asChild>
                          <li>
                            <a href="#inicio">Inicio</a>
                          </li>
                        </SheetClose>
                        <SheetClose>
                          <li>
                            <a href="#nosotros">Nosotros</a>
                          </li>
                        </SheetClose>
                        <SheetClose>
                          <li>
                            <a href="#proposito">Propósito</a>
                          </li>
                        </SheetClose>
                        <SheetClose>
                          <li>
                            <a href="#servicio">Servicios</a>
                          </li>
                        </SheetClose>
                        <SheetClose>
                          <li>
                            <a href="#proyectos">Proyectos</a>
                          </li>
                        </SheetClose>
                        <SheetClose>
                          <li>
                            <a href="#ubicanos">Ubicanos</a>
                          </li>
                        </SheetClose>
                        <SheetClose>
                          <li>
                            <a href="#contactanos">Contactanos</a>
                          </li>
                        </SheetClose>
                      </ul>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarMovil;
