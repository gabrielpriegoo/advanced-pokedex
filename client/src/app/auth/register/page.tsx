"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Logo from "../../../../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Usuário registrado com sucesso");
        router.push("/auth/login");
      } else {
        alert("Erro ao registrar usuário");
      }
    } catch (error) {
      alert("Erro ao enviar formulário");
    }
  };

  return (
    <main className="flex min-h-screen flex-row items-center bg-[#131216]">
      {/* Left Side */}
      <div className="min-h-screen w-[1000px] flex justify-center items-end">
        <div className="bg-background-login bg-cover bg-no-repeat bg-center w-[800px] h-[800px] " />
      </div>
      {/* Right Side */}
      <div className="flex justify-start items-center w-[670px] min-h-screen p-8">
        <div className="w-[550px] h-[600px] flex justify-center items-center rounded-lg shadow-lg bg-[#212026]">
          <div className="w-[400px] flex-col justify-center items-center">
            <div className="pb-5 flex justify-center mb-1">
              {/* <Image
                className={
                  "animate-bounce rounded-full shadow-xl ease-in-out transform"
                }
                src={Logo}
                width={100}
                alt="Logo Pokemon Tela Auth border"
              /> */}
            </div>
            <div className="text-center">
              <h1 className="font-extrabold text-[24px] text-white">
                Cadastre sua conta !
              </h1>
              <p className="font-normal text-[12px] text-[#a3a3a3]">
                Insira seu nome , email e senha para continuar.
              </p>
            </div>
            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <div className="mt-3">
                  <Label
                    htmlFor="text"
                    className="text-[14px] font-semibold text-white"
                  >
                    Name
                  </Label>
                  <Input
                    className="border-none mt-2 font-medium text-white text-[14px] px-4 w-full shadow-md bg-[#131216] h-12"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <Label
                    htmlFor="email"
                    className="text-[14px] font-semibold text-white"
                  >
                    Email
                  </Label>
                  <Input
                    className="border-none mt-2 font-medium text-white text-[14px] px-4 w-full shadow-md bg-[#131216] h-12"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@example.com"
                  />
                </div>
                <div className="mt-3">
                  <Label
                    htmlFor="password"
                    className="text-[14px] font-semibold text-white"
                  >
                    Password
                  </Label>
                  <Input
                    className="border-none mt-2 font-medium text-white text-[14px] px-4 w-full shadow-md bg-[#131216] h-12"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  variant="default"
                  type="submit"
                  className="text-white w-full mt-6 shadow-xl h-12 bg-blue-700 hover:bg-blue-900"
                >
                  Cadastrar
                </Button>
              </form>
              <div>
                <div className="w-full flex justify-center items-center mt-7">
                  <span className="text-white">Ja possui uma conta ?</span>
                  <Button
                    className="w-16 h-0 ml-5 text-white font-semibold hover:text-blue-500"
                    variant="link"
                    onClick={() => router.push("/auth/login")}
                  >
                    Faça o login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
