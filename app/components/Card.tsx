import Image from "next/image";
import { FaGasPump } from "react-icons/fa6";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Card(props: any) {
  const [car, setCar] = useState<any>();

  useEffect(() => {
    if (props.car) {
      setCar(props.car);
    }
  }, [props.car]);

  return (
    car && (
      <div className="border-4 border-white hover:border-gray-500 rounded-xl p-1">
        <div className="relative bg-gradient-to-b from-[#1a1a1a] via-gray-500 to-[#1a1a1a] border gap-2 flex flex-col rounded-xl cursor-pointer text-[#fff] justify-between shadow-md p-5">
          <h2 className="font-bold text-[20px]">{car?.name}</h2>

          <p className="absolute top-0 right-2 flex items-center gap-1 my-3 p-2 rounded-md font-bold text-[10px] bg-[#24FFB2] text-[#1a1a1a]">
            <PiSteeringWheelFill className="text-[20px]" />
            <span>{car?.typeBoite}</span>
          </p>

          <div className="flex items-center gap-2">
            <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1 text-[12px]">
              <FaUser className="text-[20px]" />
              <span>{car?.places}</span>
            </p>
            <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1 text-[12px]">
              <FaGasPump className="text-[20px]" />
              <span>{car?.type}</span>
            </p>
            <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1 text-[12px]">
              <FaCarSide className="text-[20px]" />
              <span>{car?.marque}</span>
            </p>
          </div>

          <Image
            src={car?.image?.url}
            alt={car?.name}
            width={250}
            height={150}
            className="w-full object-cover self-center"
          />

          <p className="text-[12px]">✓ incl. 500 km</p>

          <p>
            <span className="font-bold text-[26px]">{car?.price}€</span>
            <span className="text-[12px]"> / jour</span>
          </p>
        </div>
      </div>
    )
  );
}
