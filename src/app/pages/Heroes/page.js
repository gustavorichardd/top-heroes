import React from "react"
//External libs
import Image from "next/image"

//Components
import Header from "../Header/Header"
import { heroList } from "@/assets/heroesList"

//Controllers

//Helpers

//Styles
import styles from './Heroes.module.css'

export const Heroes = () => {
    return (
        <section className={styles.heroes}>
            <Header />
            <div>
                {heroList.map(((hero, index) => {
                    return <div key={index}>
                        {hero.name}
                    </div>
                }))}
            </div>
        </section>
    )
}

export default Heroes