import React from "react"
import Image from "next/image";

import equipmentList from "@/assets/equipmentList";

const About = () => {
   console.log("equipmentList", Object.values(equipmentList))
   return <div>
      <p>Equipement list</p>
      {Object.values(equipmentList).map((list, indexList) => {
         return <div key={indexList}>
            {list.map((item, indexItem) => {
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