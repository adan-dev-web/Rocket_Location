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
      <div className="border-4 border-white hover:border-[#24FFB2] rounded-xl p-1 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="relative bg-gradient-to-b from-[#1a1a1a] via-gray-500 to-[#1a1a1a] border gap-2 flex flex-col rounded-xl cursor-pointer text-[#fff] justify-between shadow-md p-5 hover:shadow-xl transition-shadow duration-300">
          <h2 className="font-bold text-[20px] hover:text-[#24FFB2] transition-colors duration-300">
            {car?.name}
          </h2>

          <p className="absolute top-0 right-2 flex items-center gap-1 my-3 p-2 rounded-md font-bold text-[10px] bg-[#24FFB2] text-[#1a1a1a] hover:bg-[#1fffa8] hover:scale-110 transition-all duration-300">
            <PiSteeringWheelFill className="text-[20px] hover:rotate-180 transition-transform duration-500" />
            <span>{car?.typeBoite}</span>
          </p>

          <div className="flex items-center gap-2">
            <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1 text-[12px] hover:bg-[#24FFB2] hover:text-[#1a1a1a] hover:scale-105 transition-all duration-300">
              <FaUser className="text-[20px] hover:bounce transition-transform duration-300" />
              <span>{car?.places}</span>
            </p>
            <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1 text-[12px] hover:bg-[#24FFB2] hover:text-[#1a1a1a] hover:scale-105 transition-all duration-300">
              <FaGasPump className="text-[20px] hover:scale-110 transition-transform duration-300" />
              <span>{car?.type}</span>
            </p>
            <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1 text-[12px] hover:bg-[#24FFB2] hover:text-[#1a1a1a] hover:scale-105 transition-all duration-300">
              <FaCarSide className="text-[20px] hover:translate-x-2 transition-transform duration-300" />
              <span>{car?.marque}</span>
            </p>
          </div>

          <div className="overflow-hidden rounded-lg">
            <Image
              src={car?.image?.url}
              alt={car?.name}
              width={250}
              height={150}
              className="w-full object-cover self-center hover:scale-110 transition-transform duration-500"
            />
          </div>

          <p className="text-[12px] hover:text-[#24FFB2] transition-colors duration-300">
            ✓ incl. 500 km
          </p>

          <p className="hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-[26px] hover:text-[#24FFB2] transition-colors duration-300">
              {car?.price}€
            </span>
            <span className="text-[12px]"> / jour</span>
          </p>
        </div>
      </div>
    )
  );
}
