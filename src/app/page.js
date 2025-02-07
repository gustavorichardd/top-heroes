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
  const [language, setLanguage] = useState("pt") // Estado para controlar o idioma

  // Função para alternar o idioma
  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setPageSelected("home"); // Retorna à página inicial
  };

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

  // Função para rolar suavemente até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rolagem suave
    });
  };

  // Textos traduzidos
  const translations = {
    pt: {
      welcome: "SEJA BEM-VINDO AO GUIA",
      community: "DA COMUNIDADE DE TOP HEROES",
      servers1: "Servidores 1-108",
      servers2: "Servidores 109+",
      menuItems1: [
        { label: "Heróis", page: "heroes" },
        { label: "TierList", page: "blacksmith" },
        { label: "Niveis", page: "tips" },
        { label: "Estrelas", page: "about" },
        { label: "Pesquisas", page: "about" },
        { label: "Skills", page: "about" },
        { label: "Armas Exclusivas", page: "about" },
        { label: "Equipamentos", page: "about" },
        { label: "Pets", page: "about" },
        { label: "Reliquias", page: "about" },
        { label: "Castelo", page: "about" }
      ],
      menuItems2: [
        { label: "Heróis", page: "heroes" },
        { label: "TierList", page: "blacksmith" },
        { label: "Niveis", page: "tips" },
        { label: "Estrelas", page: "about" },
        { label: "Pesquisas", page: "about" },
        { label: "Skills", page: "about" },
        { label: "Armas Exclusivas", page: "about" },
        { label: "Equipamentos", page: "about" },
        { label: "Pets", page: "about" },
        { label: "Reliquias", page: "about" },
        { label: "Castelo", page: "about" }
      ],
      footerAbout: "Sobre o Jogo",
      footerSupport: "Suporte e Desenvolvimento",
      footerDownloads: "Downloads",
      footerCredits: "Desenvolvido por",
    },
    en: {
      welcome: "WELCOME TO THE GUIDE",
      community: "OF THE TOP HEROES COMMUNITY",
      servers1: "Servers 1-108",
      servers2: "Servers 109+",
      menuItems1: [
        { label: "Heroes", page: "heroes" },
        { label: "TierList", page: "blacksmith" },
        { label: "Levels", page: "tips" },
        { label: "Stars", page: "about" },
        { label: "Researches", page: "about" },
        { label: "Skills", page: "about" },
        { label: "Exclusive Weapons", page: "about" },
        { label: "Equipment", page: "about" },
        { label: "Pets", page: "about" },
        { label: "Relics", page: "about" },
        { label: "Castle", page: "about" }
      ],
      menuItems2: [
        { label: "Heroes", page: "heroes" },
        { label: "TierList", page: "blacksmith" },
        { label: "Levels", page: "tips" },
        { label: "Stars", page: "about" },
        { label: "Researches", page: "about" },
        { label: "Skills", page: "about" },
        { label: "Exclusive Weapons", page: "about" },
        { label: "Equipment", page: "about" },
        { label: "Pets", page: "about" },
        { label: "Relics", page: "about" },
        { label: "Castle", page: "about" }
      ],
      footerAbout: "About the Game",
      footerSupport: "Support and Development",
      footerDownloads: "Downloads",
      footerCredits: "Developed by",
    }
  };

  // Seleciona os textos com base no idioma
  const { welcome, community, servers1, servers2, menuItems1, menuItems2, footerAbout, footerSupport, footerDownloads, footerCredits } = translations[language];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10 pb-10 max-h-screen mt-7">
      {/* Botões fixos no topo direito */}
      <div className="absolute top-4 right-4 flex gap-2 z-50">
        <button className="p-1 rounded-lg shadow-md" onClick={() => toggleLanguage("pt")}>
          <Image
            src="/assets/brazil-capa.png"
            alt="Brazil Flag"
            width={30}
            height={20}
          />
        </button>
        <button className="p-1 rounded-lg shadow-md" onClick={() => toggleLanguage("en")}>
          <Image
            src="/assets/usa-capa.png"
            alt="USA Flag"
            width={30}
            height={20}
          />
        </button>
      </div>

      <header className="flex flex-col w-full items-center justify-between">
        <div className="flex flex-row w-full items-center justify-center">
          <Image width={60} height={60}
            onClick={() => setPageSelected("home")}
            style={{ borderRadius: 15 }}
            src={logo} alt="LOGO TOP HEROES" />
          <strong className='text-white shadow-black ml-4 text-3xl uppercase flex items-center'>
            TOP HEROES
          </strong>
        </div>
      </header>

      <div className="flex-grow w-full">
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
                      <h4 className="text-3xl font-bold text-white">{welcome}</h4>
                      <h4 className="text-3xl font-bold text-white">{community}</h4>
                      
                      <div className="flex justify-center gap-10 mt-5">
                        {/* Menu Suspenso Top Heroes I */}
                        <div className="relative">
                          <div
                            onClick={toggleMenuI}
                            className="cursor-pointer"
                          >
                            {servers1}
                            <Image
                              src="/assets/top1.png"
                              alt="Top Heroes I"
                              width={150}
                              height={50}
                            />
                          </div>
                          {isMenuIOpen && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 transition-all duration-300 origin-top">
                              {menuItems1.map((item, index) => (
                                <p key={index} onClick={() => handlePageChange(item.page)} className="cursor-pointer px-4 py-2 hover:bg-gray-200">{item.label}</p>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Menu Suspenso Top Heroes II */}
                        <div className="relative">
                          <div
                            onClick={toggleMenuII}
                            className="cursor-pointer"
                          >
                            {servers2}
                            <Image
                              src="/assets/top2.png"
                              alt="Top Heroes II"
                              width={150}
                              height={50}
                            />
                          </div>
                          {isMenuIIOpen && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 transition-all duration-300 origin-top">
                              {menuItems2.map((item, index) => (
                                <p key={index} onClick={() => handlePageChange(item.page)} className="cursor-pointer px-4 py-2 hover:bg-gray-200">{item.label}</p>
                              ))}
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
                return <span className='text-white shadow-black'>{language === "pt" ? "Página das atualizações" : "Updates Page"}</span>
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
      </div>

      {/* Rodapé */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer className="w-full bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-4">
            {/* Coluna 1: Sobre */}
            <div className="w-full sm:w-auto px-4 mb-6 text-center sm:text-left">
              <h3 className="text-base font-bold mb-3">{footerAbout}</h3>
              <ul className="space-y-1">
                <li><a href="/wiki" className="text-sm text-gray-300 hover:text-white">Wiki</a></li>
                <li><a href="/vip" className="text-sm text-gray-300 hover:text-white">VIP</a></li>
                <li><a href="/eventos" className="text-sm text-gray-300 hover:text-white">{language === "pt" ? "Eventos" : "Events"}</a></li>
                <li><a href="https://discord.com/channels/1098493491216121916/1243485523914395701" className="text-sm text-gray-300 hover:text-white">{language === "pt" ? "Atualizações" : "Updates"}</a></li>
              </ul>
            </div>

            {/* Coluna 2: Suporte e Desenvolvimento */}
            <div className="w-full sm:w-auto px-4 mb-6 text-center sm:text-left">
              <h3 className="text-base font-bold mb-3">{footerSupport}</h3>
              <ul className="space-y-1">
                <li><a href="https://chat.whatsapp.com/ICW6cuRGVraKk0tThtmUQc" className="text-sm text-gray-300 hover:text-white">{language === "pt" ? "Grupo do Whatsapp" : "WhatsApp Group"}</a></li>
                <li><a href="https://discord.com/channels/1098493491216121916/1184161964147089414" className="text-sm text-gray-300 hover:text-white">{language === "pt" ? "Discord Oficial" : "Official Discord"}</a></li>
              </ul>
            </div>

            {/* Coluna 3: Downloads */}
            <div className="w-full sm:w-auto px-4 mb-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <a href="https://play.google.com/store/apps/details?id=com.greenmushroom.boomblitz.gp&pcampaignid=web_share" className="inline-block">
                  <Image
                    src="/assets/android.png"
                    alt="Download para Android"
                    width={120}
                    height={40}
                    className="hover:opacity-80 transition-opacity"
                  />
                </a>
                <a href="https://apps.apple.com/br/app/top-heroes/id6450953550?platform=iphone" className="inline-block">
                  <Image
                    src="/assets/ios.png"
                    alt="Download para iOS"
                    width={120}
                    height={40}
                    className="hover:opacity-80 transition-opacity"
                  />
                </a>
                <a href="https://www.rivergame.net/topheroes/en/home.html" className="inline-block">
                  <Image
                    src="/assets/pc.png"
                    alt="Download para PC"
                    width={120}
                    height={40}
                    className="hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Créditos */}
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-400">
              @2025 - {footerCredits} <span className="font-semibold">SrAlef e Kakashi_51</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://chat.whatsapp.com/ICW6cuRGVraKk0tThtmUQc"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-1 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <Image
          src="/assets/whatsapp-icon.png"
          alt="WhatsApp"
          width={40}
          height={40}
        />
      </a>

      {/* Botão "Voltar ao Topo" */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 bg-gray-200 text-black p-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
      >
      &nbsp;↑&nbsp;
      </button>
    </main>
  )
}
