"use client";
import React from 'react'
import Lottie from 'lottie-web';
import { useEffect } from "react";

interface Props {
    path:String,
    id:String,
    styles?:String
}
const LottieW = ({
  path,
  id,
  styles = "min-w-[100px] min-h-[100px] max-w-[250px]",
}: Props) => {
  useEffect(() => {
    const animate =Lottie.loadAnimation({
      container: document.getElementById(`lottie-${id}`)!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/" + path + ".json",
    });
    
    animate.addEventListener("complete", () => {
      console.log("La animación ha completado.");
      // Agrega aquí cualquier acción que desees realizar cuando la animación se completa
    });
  }, []);
  return (
    <div
      className={`${styles}`}
      id={`lottie-${id}`}
    />
  );
};

export default LottieW