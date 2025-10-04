import React from "react";
import { FaCar, FaTruck, FaSearch, FaPlus } from "react-icons/fa";

export default function Form() {
  return (
    <div className="bg-white p-4 rounded-lg mt-4">
      <div className="flex items-center gap-4 mb-4">
        <button className="bg-[#1a1a1a] text-white rounded-full flex items-center gap-2 p-2 px-3">
          <FaCar />
          <p className="text-white">Véhicules</p>
        </button>
        <button className="hover:bg-gray-200 text-[#1a1a1a] rounded-full flex items-center gap-2 p-2 px-3">
          <FaTruck />
          <p className="text-[#1a1a1a]">Utilitaires</p>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div>
          <p className="mb-2 text-[11px] font-bold text-[#1a1a1a]">
            Retrait et retour
          </p>
          <div className="flex items-center gap-8">
            <div className="w-full border border-gray-300 p-3 rounded-lg relative">
              <FaSearch className="absolute top-4 left-4 text-[#1a1a1a]" />
              <input
                placeholder="Aéroport, Ville ou Adresse"
                type="search"
                className="outline-none w-full h-full pl-8 text-[#1a1a1a]"
              />
            </div>
            <div className="hidden md:flex items-center gap-3 text-[#1a1a1a]">
              <FaPlus className="text-[#1a1a1a]" />
              <p className="text-[12px] text-[#1a1a1a]">
                Lieu de retour différent
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center">
              <div className="flex p-3 flex-col">
                <p className="text-[11px] font-bold mb-2 text-[#1a1a1a]">
                  Date de départ
                </p>
                <input
                  type="date"
                  className="border border-gray-300 p-3 rounded-lg outline-none cursor-pointer text-[#1a1a1a]"
                />
              </div>
              <div className="flex p-3 flex-col">
                <p className="text-[11px] font-bold mb-2 text-[#1a1a1a]">
                  Date de retour
                </p>
                <input
                  type="date"
                  className="border border-gray-300 p-3 rounded-lg outline-none cursor-pointer text-[#1a1a1a]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <button className="block w-full bg-[#24FFB2] text-[#1a1a1a] py-4 px-2 rounded-md font-bold mt-4">
                Voir les véhicules
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
