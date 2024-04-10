import React from "react"

import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { traitsList } from "@/assets/heroesList";
import { legendaryEquipmentList, mythicPlusEquipmentList } from "@/assets/equipmentList";

//Helpers
import { getHeroBorder, getHeroBackground, getFaction } from "../../helpers/heroHelper"

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
                  <strong>Facção: </strong><span>{getFaction(content.faction)}</span>
               </div>
               <div className={styles.ModalHeroContentBodyBlock} style={{ flexDirection: "column" }}>
                  <strong>Características: </strong>
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
                     <strong>Equipamentos recomendados:</strong>
                  </div>
                  {console.log("content.suggestEquip", content.suggestEquip)}
                  <div className={styles.ModalHeroContentBodyBlockContent}>
                     {content.suggestEquip.legendary.map((item, index) => {
                        const thisEquipment = legendaryEquipmentList.find(({ id }) => id === item)
                        if (!!thisEquipment) {
                           const imageLink = thisEquipment.image
                           console.log("imageLink", imageLink)
                           return <span key={index}><img src={imageLink} alt={content.name} width={50} height={50} /></span>
                        } else {
                           return ""
                        }
                     })}
                  </div>

                  <div className={styles.ModalHeroContentBodyBlockContent}>
                     {content.suggestEquip.mythicPlus.map((item, index) => {
                        const thisEquipment = mythicPlusEquipmentList.find(({ id }) => id === item)
                        if (!!thisEquipment) {
                           const imageLink = thisEquipment.image
                           return <span key={index}><img src={imageLink} alt={content.name} width={50} height={50} /></span>
                        } else {
                           return ""
                        }
                     })}
                  </div>
               </div>



            </div>
         </div>
      </div>
   }
}

export default ModalHero