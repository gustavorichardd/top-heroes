
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

const getFaction = (faction) => {
   switch (faction) {
      case "nature": return "Natureza"
      case "horde": return "Horda"
      case "league": return "Liga"
   }
}

export { getHeroBackground, getHeroBorder, getFaction }