"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LottieW from "./lottieW";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Debe tener un minimo de 3 caracteres" })
    .max(50),
  email: z.string().email({ message: "El correo no es valido" }),
  message: z
    .string()
    .min(10, { message: "Debe tener un minimo de 10 caracteres" })
    .max(500),
});

const Contact = () => {
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  return (
    <div
      id="contactanos"
      className="h-screen bg-gradient-radial relative  min-h-[812px] "
    >
      <div className="h-full w-full flex flex-col justify-center items-center  ">
        <div className="w-3/4  flex flex-col gap-y-20">
          <div className="text-center">
            <p className="text-[32px] font-black text-blue-600">Contactanos</p>
            <p className="text-[20px] font-normal text-slate-500">
              Si tienes algun proyecto contacta con nosotros y podremos ayudarte
              a desarrollarlo
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        className="w/full"
                        disabled={isLoading}
                        placeholder="Nombre"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="w/full"
                        disabled={isLoading}
                        placeholder="usuario@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        className="w/full"
                        disabled={isLoading}
                        rows={5}
                        placeholder="texto de requerimiento"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                type="submit"
                className=" bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-900 hover:to-blue-800 w-full rounded-none"
              >
                Enviar
              </Button>
            </form>
          </Form>
          <div className="flex flex-row gap-x-10 justify-center">
            <FaFacebook size={30} className="text-blue-600 "></FaFacebook>
            <FaYoutube size={30} className="text-blue-600 "></FaYoutube>
            <FaTwitter size={30} className="text-blue-600 "></FaTwitter>
            <FaInstagram size={30} className="text-blue-600 "></FaInstagram>
          </div>
        </div>
      </div>
      {/* fondo */}
      <div className="absolute bottom-0  left-0" style={{ zIndex: -1 }}>
        <LottieW
          path={"fondo4"}
          id={"contactanos-fondo4"}
          styles={"w-full  "}
        ></LottieW>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
