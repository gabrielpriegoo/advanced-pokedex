"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Logo from "../../../../public/logo.png";
import ImgAsh from "../../../../public/img-ash.png";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (response.ok) {
        const { token } = await response.json();

        localStorage.setItem("authToken", token);

        router.push("/pokemons");
      } else {
        alert("Login falhou!");
      }
    } catch (error) {
      alert("Erro ao fazer login!");
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
        <div className="w-[550px] h-[650px] flex justify-center items-center rounded-lg shadow-lg bg-[#212026]">
          <div className=" w-[400px] flex-col justify-center items-center">
            <div className="pb-5 flex justify-center mb-2">
              <Image
                className="rounded-full shadow-xl hover:scale-110 transition duration-300 ease-in-out transform"
                src={Logo}
                width={150}
                alt="Logo Pokemon Tela Auth border"
              />
            </div>
            <div className="text-center">
              <h1 className="font-extrabold text-[24px] text-white">
                Entre com sua conta Pokédex
              </h1>
              <p className="font-normal text-[12px] text-[#a3a3a3]">
                Faça login para continuar
              </p>
            </div>
            <div className="mt-4">
              <form onSubmit={handleLogin}>
                <div className="mt-3">
                  <Label
                    htmlFor="email"
                    className="text-[14px] font-medium text-white "
                  >
                    Email
                  </Label>
                  <Input
                    className="mt-2 border-none px-4 w-full text-white  shadow-md bg-[#131216] h-12"
                    placeholder="exemplo@exemplo.com"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    className=" border-none mt-2 font-medium text-white text-[14px] px-4 w-full shadow-md bg-[#131216] h-12"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Button
                  variant="default"
                  type="submit"
                  className="text-white w-full mt-6 shadow-xl h-12 bg-blue-700 hover:bg-blue-900"
                >
                  Entrar
                </Button>
              </form>
              <div>
                <div className="w-full flex justify-center items-center mt-7">
                  <span className="text-white">
                    Não possui uma conta crie em
                  </span>
                  <Button
                    className="w-16 h-0 ml-2 text-white font-semibold hover:text-blue-500"
                    variant="link"
                    onClick={() => router.push("/auth/register")}
                  >
                    Registrar
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
