import FamilyCards from "@/components/chapters/chapter_1/subchapter_1/FamilyCards";
import BodyCards from "@/components/chapters/chapter_1/subchapter_2/BodyCards";
import FoodCards from "@/components/chapters/chapter_1/subchapter_3/FoodCards";
import RoutineCards from "@/components/chapters/chapter_1/subchapter_4/RoutineCards";
import HomeCards from "@/components/chapters/chapter_1/subchapter_5/HomeCards";
import TimeCards from "@/components/chapters/chapter_1/subchapter_6/TimeCards";
import TravelCards from "@/components/chapters/chapter_1/subchapter_7/TravelCards";
import Crossword1 from "@/components/chapters/chapter_2/subchapter_1/Crossword1";
import Crossword2 from "@/components/chapters/chapter_2/subchapter_2/Crossword2";
import Crossword3 from "@/components/chapters/chapter_2/subchapter_3/Crossword3";
import VerbToBeQuizz from "@/components/chapters/chapter_3/subchapter_1/VerbToBeQuizz";

import React, { useState } from "react";
import {
  FaBarcode,
  FaCloudMoon,
  FaMoon,
  FaNewspaper,
  FaRegSun,
  FaSun,
  FaUser,
} from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";
type OpenMenusState = {
  vocabulario: boolean;
  crucigramas: boolean;
  quizz: boolean;
};
export default function Navbar() {
  // Dentro de tu componente Navbar.tsx

  const [openMenus, setOpenMenus] = useState<OpenMenusState>({
    vocabulario: false,
    crucigramas: false,
    quizz: false,
  });

  const toggleMenu = (menuKey: keyof OpenMenusState) => {
    setOpenMenus((prevOpenMenus) => ({
      ...Object.keys(prevOpenMenus).reduce(
        (acc, curr) => ({ ...acc, [curr]: curr === menuKey }),
        {} as OpenMenusState
      ),
    }));
  };

  // Estado para rastrear si el modo oscuro está activado
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenus = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Función modificada para manejar el clic en el botón de alternancia de modo oscuro
  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState); // Actualiza el estado
    document.documentElement.classList.toggle("dark", newDarkModeState);
  };
  interface Props {
    isDarkMode: boolean;
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 z-50">
      <div className="z-50 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            LEARNBY
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-amber-400"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                type="button"
                data-drawer-target="drawer-navigation"
                data-drawer-show="drawer-navigation"
                aria-controls="drawer-navigation"
                onClick={toggleMenus}
              >
                Menu
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <FaUser />
              </a>
            </li>

            <li>
              <button
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={toggleDarkMode}
              >
                <div className="flex items-center space-x-2">
                  {isDarkMode ? (
                    <>
                      <FaCloudMoon size="30" />
                    </>
                  ) : (
                    <>
                      <FaRegSun size="30" />
                    </>
                  )}
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
{/* <div
            id="drawer-navigation"
            className="fixed top-14 left-64  -z-40 h-screen p-4  transition-transform -translate-x-full bg-white w-64 dark:bg-gray-900"
            tabIndex={-1}
            aria-labelledby="drawer-navigation-label"
          >
            <h5
              id="drawer-navigation-label"
              className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
              Menu
            </h5>

            <button
              type="button"
              data-drawer-hide="drawer-navigation"
              aria-controls="drawer-navigation"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeMenu}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div
              id="drawer-navigation"
              className={`fixed top-0 left-0 h-screen p-4   transition-transform duration-200 ease-in-out ${
                isOpen ? "hidden" : "block"
              } bg-white w-64 dark:bg-white  `}
              tabIndex={-1}
              aria-labelledby="drawer-navigation-label"
            ></div>
            <div className="py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                <li>
                  <button
                    onClick={() => toggleMenu("vocabulario")}
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-vocabulario"
                    data-collapse-toggle="dropdown-vocabulario"
                  >
                    <FaPersonChalkboard size={30} />

                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      Vocabulario
                    </span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <ul
                    id="dropdown-vocabulario"
                    className={`${
                      openMenus.vocabulario ? "block" : "hidden"
                    } py-2 space-y-2`}
                  >
                    <li>
                      <a
                        href="src/components/chapters/chapter_1/subchapter_1/FamilyCards"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Familia y Amigos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Partes del Cuerpo
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Comida y Bebida
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Vida Diaria y Rutinas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Hogar y Muebles
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Tiempo, Clima y Estaciones
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Viajes y Vacaciones
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    onClick={() => toggleMenu("crucigramas")}
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-crucigramas"
                    data-collapse-toggle="dropdown-crucigramas"
                  >
                    <FaBarcode size={30} />

                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      Crucigramas
                    </span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <ul
                    id="dropdown-crucigramas"
                    className={`${
                      openMenus.crucigramas ? "block" : "hidden"
                    } py-2 space-y-2`}
                  >
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Ejercicio 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Ejercicio 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Ejercicio 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    onClick={() => toggleMenu("quizz")}
                    type="button"
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-quizz"
                    data-collapse-toggle="dropdown-quizz"
                  >
                    <FaNewspaper size={30} />
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      Quizz
                    </span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <ul
                    id="dropdown-quizz"
                    className={`${
                      openMenus.quizz ? "block" : "hidden"
                    } py-2 space-y-2`}
                  >
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Verbo To be
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Billing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Invoice
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                      <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                      <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Sign Up
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}