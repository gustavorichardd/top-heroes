"use client"
import React from "react"
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import logo from "../assets/logo.png"
import Heroes from "./pages/Heroes/heroes";
import About from "./pages/About/about";

export default function Home() {
  const [pageSelected, setPageSelected] = React.useState("heroes")
  const [openMenu, setOpenMenu] = React.useState(false)

  React.useEffect(() => {
    setOpenMenu(false)
  }, [pageSelected])

  const hangleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10 pb-10 max-h-screen">
      <header className="flex flex-col w-full items-center justify-between border-b-2 p-5">
        <div className="flex flex-row w-full items-center justify-between">
          <Image width={60} height={60}
            onClick={() => setPageSelected("home")}
            style={{ borderRadius: 15 }}
            //className="rounded-2xl" 
            src={logo} alt="LOGO TOP HEROES" />
          <strong className='text-white shadow-black'>Top Heroes</strong>
          <FontAwesomeIcon icon={openMenu ? faXmark : faBars} className="w-10 h-10 text-white" onClick={hangleOpenMenu} />
        </div>

        {openMenu ? <div className='text-white shadow-black flex justify-center items-end flex-col w-full'>
          <div>
            <p onClick={() => setPageSelected("heroes")}>Heróis</p>
          </div>
          <div>
            <p onClick={() => setPageSelected("blacksmith")}>Equipamentos</p>
          </div>
          <div>
            <p onClick={() => setPageSelected("tips")}>Tutoriais</p>
          </div>
          <div>
            <p onClick={() => setPageSelected("updated")}>Informações</p>
          </div>
          <div>
            <p onClick={() => setPageSelected("about")}>Sobre</p>
          </div>
        </div> : ""}
      </header>

      <div className="flex flex-col w-full items-start justify-start border-b-2">
        {(() => {

          switch (pageSelected) {
            case "home": {
              return <span className='text-white shadow-black'>Seu canal para informações sobre o jogo Top Heroes</span>
            }

            case "heroes": {
              return <Heroes />
            }
            case "blacksmith": {
              return <span className='text-white shadow-black'>Página dos equipamentos</span>
            }
            case "tips": {
              return <span className='text-white shadow-black'>SPágina das dicas</span>
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
