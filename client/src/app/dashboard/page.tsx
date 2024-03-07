"use client";

import Inventary from "@/components/Inventary/page";
import SideNavbar from "@/components/side-navbar/page";
import Image from "next/image";
import IconPokemon from "../../../public/img-pokemon-pokedex.svg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MdCatchingPokemon } from "react-icons/md";

export default function Dashboard() {
  return (
    <>
      <div className="flex col-span-2 min-h-screen gap-2 bg-[#242529]">
        <div className="w-[400px] flex-col flex justify-center items-center">
          {/* <Image
            src={IconPokemon}
            width={200}
            alt="Imagem Logo"
            className="mt-5 mb-6"
          /> */}
          <h1 className="text-white text-2xl font-semibold mb-6 flex justify-center items-center gap-3">
            <div>
              <MdCatchingPokemon className="text-zinc-400 w-5 h-5" />
            </div>
            Painel<span className="text-cyan-500 font-bold">Pokedex</span>
          </h1>
          <div className="w-[300px] h-[700px] rounded-2xl mb-6">
            <div className="mt-8 ml-2">
              <SideNavbar />
            </div>
          </div>
          <div className="flex justify-between items-center w-[300px]">
            <div className="flex justify-center items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-white font-semibold text-xs">
                Gabriel Priego
              </h1>
            </div>
            <Button className="border-[2px] text-xs h-8 border-[#37373F] bg-[#242529] text-white rounded-xl hover:bg-[#37373F] gap-2">
              Log out
            </Button>
          </div>
        </div>
        <div className="border-l-[2px] border-[#37373F] w-screen">
          <Inventary />
        </div>
      </div>
    </>
  );
}
