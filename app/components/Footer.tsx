import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-6 sm:py-8 mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section principale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* Logo à gauche */}
          <div className="flex items-center justify-center sm:justify-start gap-3 hover:scale-105 transition-transform duration-300 ">
            <Image
              src="/images/RL_logo.png"
              alt="Rocket Location Logo"
              width={60}
              height={60}
              className="w-10 h-10 sm:w-12 sm:h-12 hover:rotate-12 transition-transform duration-300"
            />
            <div className="text-xl sm:text-2xl font-bold">
              <span className="text-[#24FFB2] hover:text-[#1fffa8] transition-colors duration-300">
                ROCKET
              </span>
              <span className="text-white hover:text-gray-300 transition-colors duration-300">
                LOCATION
              </span>
            </div>
          </div>

          {/* Navigation centrale */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 order-3 sm:order-2 lg:order-2">
            <a
              href="#"
              className="text-gray-300 hover:text-[#24FFB2] hover:scale-110 transition-all duration-300 text-sm sm:text-base"
            >
              Nos véhicules
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#24FFB2] hover:scale-110 transition-all duration-300 text-sm sm:text-base"
            >
              Tarifs
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#24FFB2] hover:scale-110 transition-all duration-300 text-sm sm:text-base"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#24FFB2] hover:scale-110 transition-all duration-300 text-sm sm:text-base"
            >
              À propos
            </a>
          </div>

          {/* Réseaux sociaux à droite */}
          <div className="flex justify-center sm:justify-end space-x-3 sm:space-x-4 order-2 sm:order-3 lg:order-3">
            <a
              href="https://www.linkedin.com/in/adan-nancel-32383a36b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-[#24FFB2] hover:text-[#1a1a1a] hover:scale-110 hover:rotate-12 transition-all duration-300"
            >
              <FaLinkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://github.com/adan-dev-web"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-[#24FFB2] hover:text-[#1a1a1a] hover:scale-110 hover:rotate-12 transition-all duration-300"
            >
              <FaGithub size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center space-y-4 space-y-reverse sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left hover:text-[#24FFB2] transition-colors duration-300">
              © 2025 Rocket Location. Tous droits réservés.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#24FFB2] hover:scale-105 transition-all duration-300 text-center sm:text-left"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#24FFB2] hover:scale-105 transition-all duration-300 text-center sm:text-left"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#24FFB2] hover:scale-105 transition-all duration-300 text-center sm:text-left"
              >
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
