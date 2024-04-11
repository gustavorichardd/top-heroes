import React from "react"
import Image from "next/image";

import { captalizeText } from "@/app/helpers/textHelper";

import equipmentList from "@/assets/equipmentList";

const About = () => {
   // const [equipments, setEquipments] = React.useState([])

   const getEquipmentsSets = () => {
      let equipmentSets = {}
      for (const equipList of Object.values(equipmentList)) {
         for (const itemSet of equipList) {
            if (`${itemSet.set}` in equipmentSets) {
               equipmentSets[`${itemSet.set}`].items.push(itemSet)
            } else {
               equipmentSets[`${itemSet.set}`] = { tips: "", items: [itemSet] }
            }
         }
      }

      return equipmentSets
   }

   const equipmentsSets = getEquipmentsSets()
   //captalizeText
   // console.log("equipmentsSets", equipmentsSets)

   return <div>
      <p>Equipement list</p>
      {Object.keys(equipmentsSets).map((set, indexSet) => {
         return <div key={indexSet}>
            <strong>{captalizeText(set)}</strong>
            {equipmentsSets[set].items.map((item, indexItem) => {
               return <div style={{ borderBottomColor: "#c1c1c1", borderBottomStyle: "dashed", borderBottomWidth: 2, paddingBottom: 20 }} key={indexItem}>
                  {item.name}
                  <Image src={item.image} alt={item.name} width={50} height={50} />
               </div>
            })}

         </div>
      })}
   </div>
}

export default About