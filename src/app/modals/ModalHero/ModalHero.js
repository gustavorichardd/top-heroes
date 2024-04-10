import React from "react"

import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { traitsList } from "@/assets/heroesList";
import equipmentList from "@/assets/equipmentList";
// import { legendaryEquipmentList, mythicPlusEquipmentList } from "@/assets/equipmentList";

//Helpers
import { getHeroBorder, getHeroBackground } from "../../helpers/heroHelper"
import { captalizeText } from "@/app/helpers/textHelper";

import styles from "./ModalHero.module.css"

const ModalHero = ({ content, onClose }) => {
   console.log("content", content)

   const handleCloseModal = (event) => {
      if (event.target.id === "id-ModalHeroBackground") {
         onClose()
      }
   }



   if (!content) {
      return ""
   } else {
      return <div id="id-ModalHeroBackground" className={styles.ModalHeroBackground} onClick={handleCloseModal}>
         <div className={styles.ModalHeroContent} style={{ borderColor: getHeroBorder(content.rarity), backgroundColor: getHeroBackground(content.faction) }}>
            <div className={styles.ModalHeroContentHeader}>
               <strong>{content.name}</strong>

               <FontAwesomeIcon icon={faXmark} onClick={onClose} />
            </div>
            <div className={styles.ModalHeroContentBody}>
               <Image src={content.image} alt={content.name} width={200} height={200} />
               <div className={styles.ModalHeroContentBodyBlock} style={{ flexDirection: "row" }}>
                  <strong>Faction: </strong><span>{captalizeText(content.faction)}</span>
               </div>
               <div className={styles.ModalHeroContentBodyBlock} style={{ flexDirection: "column" }}>
                  <strong>Traits: </strong>
                  {content.traits.map((trait, index) => {
                     const thisTrait = traitsList.find(({ id }) => id === trait)
                     console.log("thisTrait", thisTrait)
                     if (!!thisTrait) {
                        return <span key={index} title={thisTrait.description}>{thisTrait.name}</span>

                     } else {
                        return ""
                     }
                  })}
               </div>
               <div className={styles.ModalHeroContentBodyBlock} style={{ flexDirection: "column" }}>
                  <div className={styles.ModalHeroContentBodyBlockHeader}>
                     <strong>Equipment recomendations:</strong>
                  </div>


                  {Object.keys(content.suggestEquip).map((rarity, indexRarity) => {

                     // { console.log(" ") }
                     // { console.log(" ") }
                     // { console.log(" ") }
                     // { console.log(" ") }
                     // { console.log("rarity", rarity) }
                     // { console.log("suggestEquip", content.suggestEquip[rarity]) }

                     // { console.log("equipmentList", equipmentList) }
                     // { console.log(" equipmentList[`${rarity}EquipmentList`]", equipmentList[`${rarity}EquipmentList`]) }
                     // { console.log("equipmentList", equipmentList[`${[`${rarity}EquipmentList`]}EquipmentList`]) }

                     return <div key={indexRarity} className={styles.ModalHeroContentBodyBlockContent}>
                        {content.suggestEquip[rarity].length > 0 ? <div>

                           <div className={styles.ModalHeroContentBodyBlockContentTitle}>
                              {captalizeText(rarity)}
                           </div>
                           <div className={styles.ModalHeroContentBodyBlockContentList}>
                              {content.suggestEquip[rarity].map((item, indexItem) => {
                                 const thisEquipment = equipmentList[`${rarity}EquipmentList`].find(({ id }) => id === item)
                                 if (!!thisEquipment) {
                                    return <span key={indexItem}><Image src={thisEquipment.image} alt={thisEquipment.name} width={50} height={50} /></span>
                                 } else {
                                    return ""
                                 }
                              })}
                           </div>


                        </div> : ""}
                     </div>
                  })}
               </div>



            </div>
         </div>
      </div>
   }
}

export default ModalHero