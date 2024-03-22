import React from "react"
//External libs
import Image from "next/image"

//Components
import FilterItem from "@/app/components/FilterItem/FilterItem"
import { heroList, traitsList } from "@/assets/heroesList"

//Controllers

//Helpers

//Styles
import styles from './Heroes.module.css'

function Heroes() {
    const [alphabeticallOrder, setAlphabeticallOrder] = React.useState("asc")
    const [filterSelected, setFilterSelected] = React.useState({
        faction: [],
        rarity: [],
        traits: [],
    })
    const factions = [{ name: "Liga", id: "league" }, { name: "Horda", id: "horde" }, { name: "Natureza", id: "nature" }]
    const rarities = [{ name: "Mítico", id: "mythic" }, { name: "Lendário", id: "legendary" }, { name: "Épico", id: "epic" }, { name: "Raro", id: "rare" }]
    console.log("filterSelected", filterSelected)
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

    const onChangeFilter = (item, menuGroup) => {
        console.log("onChangeFilter", { item, menuGroup })
        switch (menuGroup) {
            case "faction": {
                const factionIndex = filterSelected[menuGroup].findIndex((faction) => faction === item.id)
                if (factionIndex !== -1) {
                    filterSelected[menuGroup].splice(factionIndex, 1)
                } else {
                    filterSelected[menuGroup].push(item.id)
                }
                setFilterSelected({ ...filterSelected })
                break
            }
            case "rarity": {
                const rarityIndex = filterSelected[menuGroup].findIndex((rarity) => rarity === item.id)

                if (rarityIndex !== -1) {
                    filterSelected[menuGroup].splice(rarityIndex, 1)
                } else {
                    filterSelected[menuGroup].push(item.id)
                }
                setFilterSelected({ ...filterSelected })
                break
            }
            case "traits": {
                const traitIndex = filterSelected[menuGroup].findIndex((trait) => trait === item.id)

                if (traitIndex !== -1) {
                    filterSelected[menuGroup].splice(traitIndex, 1)
                } else {
                    filterSelected[menuGroup].push(item.id)
                }
                setFilterSelected({ ...filterSelected })
                break
            }
            default: {
                break
            }
        }


    }

    const onApplyFilters = (heroList) => {
        let newHeroList = [...heroList]
        if (Object.values(filterSelected).find((value) => value)) {
            newHeroList = newHeroList.filter(({ faction, rarity, traits }) => {
                let verifyFactionFilter = filterSelected["faction"].length > 0 ? filterSelected["faction"].includes(faction) : true
                let verifyRarityFilter = filterSelected["rarity"].length > 0 ? filterSelected["rarity"].includes(rarity) : true
                let verifyTraitFilter = filterSelected["traits"].length > 0 ? traits.find((id) => filterSelected["traits"].includes(id)) : true
                return verifyRarityFilter && verifyFactionFilter && verifyTraitFilter
            })
        }
        return newHeroList
    }

    return (
        <section className={styles.heroes}>
            <div className={styles.heroesHeader}>
                <div className={styles.heroesHeaderFaction}>
                    {factions.map((faction, index) => {
                        return <FilterItem key={index} item={faction} onChangeFilter={(item) => onChangeFilter(item, "faction")} selected={filterSelected["faction"].includes(faction.id)} />
                    })}
                </div>
                <div className={styles.heroesHeaderRarity}>
                    {rarities.map((rarity, index) => {
                        return <FilterItem key={index} item={rarity} onChangeFilter={(item) => onChangeFilter(item, "rarity")} selected={filterSelected["rarity"].includes(rarity.id)} />
                    })}
                </div>
                <div className={styles.heroesHeaderTraits}>
                    {traitsList.map((trait, index) => {
                        return <FilterItem key={index} item={trait} onChangeFilter={(item) => onChangeFilter(item, "traits")} selected={filterSelected["traits"].includes(trait.id)} />
                    })}
                </div>

            </div>
            <div className={styles.heroesBody}>
                {onApplyFilters(heroList).sort(heroOrder).map(((hero, index) => {
                    // console.log("hero", hero)
                    return <div key={index} className={styles.heroBodyItem} style={{
                        borderColor: getHeroBorder(hero.rarity),
                        backgroundColor: getHeroBackground(hero.faction)
                    }}>
                        <strong>{hero.name}</strong>
                        <Image src={hero.image}
                            alt={hero.name}
                            width={100}
                            height={100}
                            className={styles.logo}
                            priority
                        />
                    </div>
                }))}
            </div>


        </section>
    )
}

export default Heroes