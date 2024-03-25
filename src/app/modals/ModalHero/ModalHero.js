import React from "react"

import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { traitsList } from "@/assets/heroesList";

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
               <strong>Facção: </strong><span>{getFaction(content.faction)}</span>
               <strong>Características: </strong>
               {content.traits.map((trait, index) => {
                  const thisTrait = traitsList.find(({ id }) => id === trait)
                  if (!!thisTrait) {
                     return <span key={index}>{thisTrait.name}</span>

                  } else {
                     return ""
                  }
               })}
            </div>
         </div>
      </div>
   }
}

export default ModalHero