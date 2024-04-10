const heroList = [
   {
      name: "Paragon",
      faction: "league",
      rarity: "mythic",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: []
      },
      traits: [1, 10, 11],
      image: "/assets/heroes/paragon.png"
   },
   {
      name: "Adjudicator",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 9, 6],
      image: "/assets/heroes/adjudicator.png"
   },
   {
      name: "Pyromancer",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 10, 11],
      image: "/assets/heroes/pyromancer.png"
   },
   {
      name: "Windwalker",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 10, 12],
      image: "/assets/heroes/windwalker.png"
   },
   {
      name: "Hostess",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 5, 11],
      image: "/assets/heroes/hostess.png"
   },
   {
      name: "Archer",
      faction: "nature",
      rarity: "rare",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 11],
      image: "/assets/heroes/archer.png"
   },
   {
      name: "Astrologer",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 10, 12],
      image: "/assets/heroes/astrologer.png"
   },
   {
      name: "Barbarian",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 5, 7],
      image: "/assets/heroes/barbarian.png"
   },
   {
      name: "Bard",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: "",
         mythicPlus: [],
      },
      traits: [3, 6, 11],
      image: "/assets/heroes/bard.png"
   },
   {
      name: "Warlock",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [9, 10, 11, 12],
         mythic: [],
         mythicPlus: [],
      },
      traits: [3, 6, 7],
      image: "/assets/heroes/warlock.png"
   },
   {
      name: "Headhunter",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 10, 5],
      image: "/assets/heroes/headhunter.png"
   },
   {
      name: "Wilderness Hunter",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 9, 6],
      image: "/assets/heroes/wilderness-hunter.png"
   },
   {
      name: "Knight",
      faction: "league",
      rarity: "epic",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 5, 11],
      image: "/assets/heroes/knight.png"
   },
   {
      name: "Forest Maiden",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [9, 10, 11, 12],
         mythic: [],
         mythicPlus: [],
      },
      traits: [3, 5, 8],
      image: "/assets/heroes/forest-maiden.png"
   },
   {
      name: "Dancer",
      faction: "nature",
      rarity: "epic",
      suggestEquip: {
         epic: [],
         legendary: [9, 10, 11, 12],
         mythic: [],
         mythicPlus: [],
      },
      traits: [3, 6],
      image: "/assets/heroes/dancer.png"
   },
   {
      name: "Pathfinder",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 9, 11],
      image: "/assets/heroes/pathfinder.png"
   },
   {
      name: "Druid",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [9, 10, 11, 12],
         mythic: [],
         mythicPlus: [],
      },
      traits: [4, 6, 8],
      image: "/assets/heroes/druid.png"
   },
   {
      name: "Guard",
      faction: "horde",
      rarity: "rare",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 5],
      image: "/assets/heroes/guard.png"
   },
   {
      name: "Swordmaster",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 9, 11],
      image: "/assets/heroes/swordmaster.png"
   },
   {
      name: "Pharmacist",
      faction: "nature",
      rarity: "rare",
      suggestEquip: {
         epic: [],
         legendary: [9, 10, 11, 12],
         mythic: [],
         mythicPlus: [],
      },
      traits: [4, 11],
      image: "/assets/heroes/pharmacist.png"
   },
   {
      name: "Blacksmith",
      faction: "league",
      rarity: "rare",
      suggestEquip: {
         epic: [],
         legendary: [9, 10, 11, 12],
         mythic: [],
         mythicPlus: [],
      },
      traits: [3, 6],
      image: "/assets/heroes/blacksmith.png"
   },
   {
      name: "Outlaw",
      faction: "horde",
      rarity: "epic",
      suggestEquip: {
         epic: [],
         legendary: [9, 10, 11, 12],
         mythic: [],
         mythicPlus: [],
      },
      traits: [3, 7],
      image: "/assets/heroes/outlaw.png"
   },
   {
      name: "Treeguard",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 9, 6],
      image: "/assets/heroes/treeguard.png"
   },
   {
      name: "Secret Keeper",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 5, 6],
      image: "/assets/heroes/secret-keeper.png"
   },
   {
      name: "Warrior",
      faction: "league",
      rarity: "rare",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 9],
      image: "/assets/heroes/warrior.png"
   },
   {
      name: "Brawler",
      faction: "horde",
      rarity: "epic",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 9],
      image: "/assets/heroes/brawler.png"
   },
   {
      name: "Wizard",
      faction: "league",
      rarity: "rare",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 11],
      image: "/assets/heroes/wizard.png"
   },
   {
      name: "Nun",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [9, 10, 11, 12],
         mythic: [],
         mythicPlus: [],
      },
      traits: [4, 6, 12],
      image: "/assets/heroes/nun.png"
   },
   {
      name: "Ranger",
      faction: "league",
      rarity: "epic",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 6],
      image: "/assets/heroes/ranger.png"
   },
   {
      name: "Stonemason",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 5, 11],
      image: "/assets/heroes/stonemason.png"
   },
   {
      name: "Pixie",
      faction: "nature",
      rarity: "mythic",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 10, 5],
      image: "/assets/heroes/pixie.png"
   },
   {
      name: "Storm Maiden",
      faction: "horde",
      rarity: "mythic",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 9, 11],
      image: "/assets/heroes/storm-maiden.png"
   },
   {
      name: "Desert Prince",
      faction: "horde",
      rarity: "mythic",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 9, 11],
      image: "/assets/heroes/desert-prince.png"
   },
   {
      name: "Rogue",
      faction: "horde",
      rarity: "epic",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 7],
      image: "/assets/heroes/rogue.png"
   },
   {
      name: "Sage",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 9, 7],
      image: "/assets/heroes/sage.png"
   },
   {
      name: "Priestess",
      faction: "nature",
      rarity: "epic",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 8],
      image: "/assets/heroes/priestess.png"
   },
   {
      name: "Soulmancer",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [9, 10, 11, 12],
         mythic: [],
         mythicPlus: [],
      },
      traits: [3, 6, 11],
      image: "/assets/heroes/soulmancer.png"
   },
   {
      name: "Watcher",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [5, 6, 7, 8],
         mythic: [],
         mythicPlus: [],
      },
      traits: [1, 10, 7],
      image: "/assets/heroes/watcher.png"
   },
   {
      name: "Shaman",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: [],
         legendary: [9, 10, 11, 12],
         mythic: [],
         mythicPlus: [],
      },
      traits: [4, 9, 11],
      image: "/assets/heroes/shaman.png"
   },
   {
      name: "Minister",
      faction: "league",
      rarity: "epic",
      suggestEquip: {
         epic: [],
         legendary: [9, 10, 11, 12],
         mythic: [],
         mythicPlus: [],
      },
      traits: [4, 6],
      image: "/assets/heroes/minister.png"
   },
   {
      name: "Rose Princess",
      faction: "league",
      rarity: "mythic",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 10, 5],
      image: "/assets/heroes/rose-princess.png"
   },
   {
      name: "Monk",
      faction: "nature",
      rarity: "mythic",
      suggestEquip: {
         epic: [],
         legendary: [1, 2, 3, 4],
         mythic: [],
         mythicPlus: [1, 2, 3, 4],
      },
      traits: [2, 10, 6],
      image: "/assets/heroes/monk.png"
   }
]

const traitsList = [
   {
      id: 1,
      name: "Damage Dealer",
      description: "This hero excels at dealing damage, increasing final damage by 3%.",
      icon: ""
   },
   {
      id: 2,
      name: "Tank",
      description: "This hero excels at tanking damage in the front row, reducing damage taken by 5%",
      icon: ""
   },
   {
      id: 3,
      name: "Supporter",
      description: "This hero excels at offering strategic assistance, raising maximum HP by 5%.",
      icon: ""
   },
   {
      id: 4,
      name: "Healer",
      description: "This hero excels at providing healing support, enchancing healing by 5%.",
      icon: ""
   },
   {
      id: 5,
      name: "Control",
      description: "This hero is capable of controlling enemies.",
      icon: ""
   },
   {
      id: 6,
      name: "Buff",
      description: "This hero is able to provide buss to teammates",
      icon: ""
   },
   {
      id: 7,
      name: "Debuff",
      description: "This hero is capable of inflicting debuffs to enemies.",
      icon: ""
   },
   {
      id: 8,
      name: "Summon",
      description: "This hero can summon units to join the battle.",
      icon: ""
   },
   {
      id: 9,
      name: "Sustained",
      description: "This hero specializes in inflicting special efforts on attacks and engaging in sustained combat.",
      icon: ""
   },
   {
      id: 10,
      name: "Burst Damage",
      description: "This hero specializes in using skills to inflict high burst damage in a short period.",
      icon: ""
   },
   {
      id: 11,
      name: "Multi-target",
      description: "This hero specializes in dealing area-of-effect (AoE) damage.",
      icon: ""
   },
   {
      id: 12,
      name: "Single Target",
      description: "This hero specializes in dealing single-target damage.",
      icon: ""
   },
]

export { heroList, traitsList }