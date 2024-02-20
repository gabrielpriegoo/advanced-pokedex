"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

import ImgPokemon from "../../../../public/img-pokemon-pokedex.svg";
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
    <main className="flex min-h-screen flex-row items-center bg-slate-100">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center bg-background-login bg-cover bg-no-repeat bg-center min-h-screen w-[1000px] rounded-e-full border-slate-300 border-r-2" />

      {/* Right Side */}
      <div className="ml-28 flex  flex-col justify-start items-center w-[670px] min-h-screen p-8">
        <div className="w-full flex justify-end h-[140px] mt-7">
          <Button
            variant="default"
            onClick={() => router.push("/auth/register")}
            className="shadow-xl"
          >
            Registrar
          </Button>
        </div>
        <div className="border-2 w-[500px] h-[600px] flex justify-center items-center rounded-3xl">
          <div className=" w-[400px] h-[430px] flex-col justify-center items-center">
            <div className="p-5 flex justify-center">
              <Image
                src={ImgPokemon}
                width={200}
                alt="Logo Pokemon Tela Auth border"
              />
            </div>
            <div className="text-center">
              <h1 className="font-extrabold text-[24px]">
                Entre com sua conta cadastrada
              </h1>
              <p className="font-normal text-[12px] text-[#64748B]">
                Faça login para continuar
              </p>
            </div>
            <div className="mt-4">
              <form onSubmit={handleLogin}>
                <div className="mt-3">
                  <Label htmlFor="email" className="text-[14px] font-semibold">
                    Email
                  </Label>
                  <Input
                    className="rounded-[6px] border-[#E2E8F0] mt-2  px-4 w-full focus:font-semibold  focus:text-[14px]"
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
                    className="text-[14px] font-semibold"
                  >
                    Password
                  </Label>
                  <Input
                    className="rounded-[6px] border-[#E2E8F0] mt-2 font-medium text-[14px] px-4 w-full"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Button
                  variant="default"
                  type="submit"
                  className="rounded-[6px] text-white w-full mt-6 shadow-xl"
                >
                  Entrar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
