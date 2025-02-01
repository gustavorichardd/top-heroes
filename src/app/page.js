"use client"
import React, { useState } from "react"
import Image from 'next/image'

import logo from "../assets/logo.png"

import Heroes from "./pages/Heroes/heroes";
import About from "./pages/About/about";
import Equipments from "./pages/Equipments/equipments";
import Tips from "./pages/Tips/tips";

export default function Home() {
  const [pageSelected, setPageSelected] = useState("home")
  const [isMenuIOpen, setIsMenuIOpen] = useState(false)
  const [isMenuIIOpen, setIsMenuIIOpen] = useState(false)

  const toggleMenuI = () => {
    setIsMenuIOpen(!isMenuIOpen)
    setIsMenuIIOpen(false) // Fecha o outro menu ao abrir este
  }

  const toggleMenuII = () => {
    setIsMenuIIOpen(!isMenuIIOpen)
    setIsMenuIOpen(false) // Fecha o outro menu ao abrir este
  }

  const handlePageChange = (page) => {
    setPageSelected(page)
    setIsMenuIOpen(false)
    setIsMenuIIOpen(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10 pb-10 max-h-screen mt-5">
      <header className="flex flex-col w-full items-center justify-between">
        <div className="flex flex-row w-full items-center justify-center">
          <Image width={60} height={60}
            onClick={() => setPageSelected("home")}
            style={{ borderRadius: 15 }}
            src={logo} alt="LOGO TOP HEROES" />
          <strong className='text-white shadow-black ml-4 text-4xl uppercase flex items-center'>
            COMUNIDADE TOP HEROES
          </strong>
        </div>
      </header>

      <div className="flex flex-col w-full items-start justify-start">
        {(() => {
          switch (pageSelected) {
            case "home": {
              return (
                <div className="w-full text-center">
                  <Image
                    src="/assets/entrada.jpg"
                    alt="Capa Top Heroes"
                    layout="responsive"
                    width={1200}
                    height={400}
                    className="rounded-lg"
                  />
                  <div className="mt-3">
                    <h2 className="text-3xl font-bold text-white">SEJA BEM-VINDO AO GUIA DA COMUNIDADE</h2>
                    <h2 className="text-3xl font-bold text-white">BRASILEIRA DE TOP HEROES</h2>
                    <div className="flex justify-center gap-10 mt-5">
                      {/* Menu Suspenso Top Heroes I */}
                      <div className="relative">
                        <div
                          onClick={toggleMenuI}
                          className="cursor-pointer"
                        >
                          <Image
                            src="/assets/top1.png"
                            alt="Top Heroes I"
                            width={150} // Ajuste o tamanho conforme necessário
                            height={50}
                          />
                        </div>
                        {isMenuIOpen && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 transition-all duration-300 origin-top">
                            <p onClick={() => handlePageChange("heroes")} className="cursor-pointer px-4 py-2 hover:bg-gray-200">Heroes</p>
                            <p onClick={() => handlePageChange("blacksmith")} className="cursor-pointer px-4 py-2 hover:bg-gray-200">Equipments</p>
                            <p onClick={() => handlePageChange("tips")} className="cursor-pointer px-4 py-2 hover:bg-gray-200">Tips and SEEKS</p>
                            <p onClick={() => handlePageChange("about")} className="cursor-pointer px-4 py-2 hover:bg-gray-200">About</p>
                          </div>
                        )}
                      </div>

                      {/* Menu Suspenso Top Heroes II */}
                      <div className="relative">
                        <div
                          onClick={toggleMenuII}
                          className="cursor-pointer"
                        >
                          <Image
                            src="/assets/top2.png"
                            alt="Top Heroes II"
                            width={150} // Ajuste o tamanho conforme necessário
                            height={50}
                          />
                        </div>
                        {isMenuIIOpen && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 transition-all duration-300 origin-top">
                            <p onClick={() => handlePageChange("heroes")} className="cursor-pointer px-4 py-2 hover:bg-gray-200">Heroes</p>
                            <p onClick={() => handlePageChange("blacksmith")} className="cursor-pointer px-4 py-2 hover:bg-gray-200">Equipments</p>
                            <p onClick={() => handlePageChange("tips")} className="cursor-pointer px-4 py-2 hover:bg-gray-200">Tips and SEEKS</p>
                            <p onClick={() => handlePageChange("about")} className="cursor-pointer px-4 py-2 hover:bg-gray-200">About</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            case "heroes": {
              return <Heroes />
            }
            case "blacksmith": {
              return <Equipments />
            }
            case "tips": {
              return <Tips />
            }

            case "updated": {
              return <span className='text-white shadow-black'>Página das atualizações</span>
            }

            case "about": {
              return <About />
            }
            default: {
              return <></>
            }
          }
        })()}
      </div>
    </main>
  )
}
