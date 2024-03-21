import React from "react"
//External libs
import Image from "next/image"

//Components
import { heroList } from "@/assets/heroesList"

//Controllers

//Helpers

//Styles
import styles from './Heroes.module.css'

export default function Heroes() {
    const [alphabeticallOrder, setAlphabeticallOrder] = React.useState("asc")

    const getHeroBorder = (rarity) => {
        switch (rarity) {
            case "rare": {
                return "#7AC8F5"
            }
            case "epic": {
                return "#DE8EED"
            }
            case "legendary": {
                return "#F7BC76"
            }
            case "mythic": {
                return "#EA7C6D"
            }
            default: {
                return ""
            }
        }
    }

    const getHeroBackground = (rarity) => {
        switch (rarity) {
            case "league": {
                return "#69B5F2"
            }
            case "nature": {
                return "#AED45D"
            }
            case "horde": {
                return "#E48065"
            }
            default: {
                return ""
            }
        }
    }

    const heroOrder = (heroA, heroB) => {
        if (alphabeticallOrder === "asc") {
            if (heroA.name < heroB.name) {
                return -1;
            }
            if (heroA.name > heroB.name) {
                return 1;
            }
            return 0;
        } else {
            if (heroB.name < heroA.name) {
                return -1;
            }
            if (heroB.name > heroA.name) {
                return 1;
            }
            return 0;
        }


    }

    return (
        <section className={styles.heroes}>
            {heroList.sort(heroOrder).map(((hero, index) => {
                // console.log("hero", hero)
                return <div key={index} className={styles.hero} style={{
                    borderColor: getHeroBorder(hero.rarity),
                    backgroundColor: getHeroBackground(hero.faction)
                }}>
                    {hero.name}
                    <Image src={hero.image}
                        alt={hero.name}
                        width={100}
                        height={100}
                        className={styles.logo}
                        priority
                    />
                </div>
            }))}
        </section>
    )
}