import React from "react";
import Logo from "../../public/images/sixt-logo.png";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa6";
import { UserButton } from "@clerk/nextjs";

const menu = [
  { name: "Gérer mes réservations", icon: FaCarSide },
  { name: "FR | €", icon: TbWorld },
];

export default function Nav() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <IoMenu className="text-2xl text-white cursor-pointer hover:scale-125 transition-all" />
        <Image src={Logo} alt="Logo" width={70} className="cursor-pointer" />
      </div>

      <ul className="flex items-center gap-4">
        {menu.map((item, index) => (
          <li
            key={index}
            className="hidden md:flex items-center gap-2 font-bold text-white"
          >
            <item.icon />
            <a href="#">{item.name}</a>
          </li>
        ))}
        <li>
          {" "}
          <UserButton />
        </li>
      </ul>
    </div>
  );
}
