const heroList = [
   {
      name: "Paragon",
      faction: "league",
      rarity: "mythic",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 10, 11],
      image: "/assets/heroes/paragon.png"
   },
   {
      name: "Adjudicador",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Terran",
         mythic: "Trovão"
      },
      traits: [2, 9, 6],
      image: "/assets/heroes/adjudicador.png"
   },
   {
      name: "Piromante",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 10, 11],
      image: "/assets/heroes/piromante.png"
   },
   {
      name: "Andarilho do vento",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 10, 12],
      image: "/assets/heroes/andarilho-do-vento.png"
   },
   {
      name: "Anfitria",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: "",
         legendary: "",
         mythic: ""
      },
      traits: [2, 5, 11],
      image: "/assets/heroes/anfitria.png"
   },
   {
      name: "Arqueiro",
      faction: "nature",
      rarity: "rare",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 11],
      image: "/assets/heroes/arqueiro.png"
   },
   {
      name: "Astrologista",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 10, 12],
      image: "/assets/heroes/astrologista.png"
   },
   {
      name: "Barbaro",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Terran",
         mythic: "Trovão"
      },
      traits: [2, 5, 7],
      image: "/assets/heroes/barbaro.png"
   },
   {
      name: "Bardo",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: "",
         legendary: "",
         mythic: ""
      },
      traits: [3, 6, 11],
      image: "/assets/heroes/bardo.png"
   },
   {
      name: "Bruxo",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Campeao",
         mythic: "Luz Sagrada"
      },
      traits: [3, 6, 7],
      image: "/assets/heroes/bruxo.png"
   },
   {
      name: "Caça-Cabeças",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 10, 5],
      image: "/assets/heroes/caca-cabecas.png"
   },
   {
      name: "Cacador da Selva",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 9, 6],
      image: "/assets/heroes/cacador-da-selva.png"
   },
   {
      name: "Cavaleiro",
      faction: "league",
      rarity: "epic",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Terran",
         mythic: "Trovão"
      },
      traits: [2, 5, 11],
      image: "/assets/heroes/cavaleiro.png"
   },
   {
      name: "Dama da Floresta",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Campeao",
         mythic: "Luz Sagrada"
      },
      traits: [3, 5, 8],
      image: "/assets/heroes/dama-da-floresta.png"
   },
   {
      name: "Dançarino",
      faction: "nature",
      rarity: "epic",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Campeao",
         mythic: "Luz Sagrada"
      },
      traits: [3, 6],
      image: "/assets/heroes/dancarino.png"
   },
   {
      name: "Desbravador",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 9, 11],
      image: "/assets/heroes/desbravador.png"
   },
   {
      name: "Druida",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Campeao",
         mythic: "Luz Sagrada"
      },
      traits: [4, 6, 8],
      image: "/assets/heroes/druida.png"
   },
   {
      name: "Escolta",
      faction: "horde",
      rarity: "rare",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Terran",
         mythic: "Trovão"
      },
      traits: [2, 5],
      image: "/assets/heroes/escolta.png"
   },
   {
      name: "Espadachim",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Terran",
         mythic: "Trovão"
      },
      traits: [2, 9, 11],
      image: "/assets/heroes/espadachim.png"
   },
   {
      name: "Farmaceutico",
      faction: "nature",
      rarity: "rare",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Campeao",
         mythic: "Luz Sagrada"
      },
      traits: [4, 11],
      image: "/assets/heroes/Farmaceutico.png"
   },
   {
      name: "Ferreiro",
      faction: "league",
      rarity: "rare",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Campeao",
         mythic: "Luz Sagrada"
      },
      traits: [3, 6],
      image: "/assets/heroes/ferreiro.png"
   },
   {
      name: "Fora da Lei",
      faction: "horde",
      rarity: "epic",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Campeao",
         mythic: "Luz Sagrada"
      },
      traits: [3, 7],
      image: "/assets/heroes/fora-da-lei.png"
   },
   {
      name: "Guarda-Arvore",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Terran",
         mythic: "Trovão"
      },
      traits: [2, 9, 6],
      image: "/assets/heroes/guarda-arvore.png"
   },
   {
      name: "Guardiao do Segredo",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Terran",
         mythic: "Trovão"
      },
      traits: [2, 5, 6],
      image: "/assets/heroes/guardiao-do-segredo.png"
   },
   {
      name: "Guerreiro",
      faction: "league",
      rarity: "rare",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 9],
      image: "/assets/heroes/guerreiro.png"
   },
   {
      name: "Lutador",
      faction: "horde",
      rarity: "epic",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 9],
      image: "/assets/heroes/lutador.png"
   },
   {
      name: "Mago",
      faction: "league",
      rarity: "rare",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 11],
      image: "/assets/heroes/mago.png"
   },
   {
      name: "Freira",
      faction: "league",
      rarity: "legendary",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Campeao",
         mythic: "Luz Sagrada"
      },
      traits: [4, 6, 12],
      image: "/assets/heroes/freira.png"
   },
   {
      name: "Patrulheiro",
      faction: "league",
      rarity: "epic",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 6],
      image: "/assets/heroes/patrulheiro.png"
   },
   {
      name: "Pedreiro",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 5, 11],
      image: "/assets/heroes/pedreiro.png"
   },
   {
      name: "Pixie",
      faction: "nature",
      rarity: "mythic",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 10, 5],
      image: "/assets/heroes/pixie.png"
   },
   {
      name: "Principe do Deserto",
      faction: "horde",
      rarity: "mythic",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Terran",
         mythic: "Trovão"
      },
      traits: [2, 9, 11],
      image: "/assets/heroes/principe-do-deserto.png"
   },
   {
      name: "Rogue",
      faction: "horde",
      rarity: "epic",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 7],
      image: "/assets/heroes/rogue.png"
   },
   {
      name: "Sabio",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Terran",
         mythic: "Trovão"
      },
      traits: [2, 9, 7],
      image: "/assets/heroes/sabio.png"
   },
   {
      name: "Sacerdotisa",
      faction: "nature",
      rarity: "epic",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 8],
      image: "/assets/heroes/sacerdotisa.png"
   },
   {
      name: "Soulmancer",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Campeao",
         mythic: "Luz Sagrada"
      },
      traits: [3, 6, 11],
      image: "/assets/heroes/soulmancer.png"
   },
   {
      name: "Vigilante",
      faction: "nature",
      rarity: "legendary",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, 10, 7],
      image: "/assets/heroes/vigilante.png"
   },
   {
      name: "Xamã",
      faction: "horde",
      rarity: "legendary",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Campeao",
         mythic: "Luz Sagrada"
      },
      traits: [4, 9, 11],
      image: "/assets/heroes/xama.png"
   },
   {
      name: "Sacerdote",
      faction: "league",
      rarity: "epic",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Campeao",
         mythic: "Luz Sagrada"
      },
      traits: [4, 6],
      image: "/assets/heroes/sacerdote.png"
   },
   {
      name: "Princesa Rosa",
      faction: "league",
      rarity: "mythic",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Terran",
         mythic: "Trovão"
      },
      traits: [2, "burst", 5],
      image: "/assets/heroes/princesa-rosa.png"
   },
   {
      name: "Guerreiro Panda",
      faction: "nature",
      rarity: "mythic",
      suggestEquip: {
         epic: "Fortaleza",
         legendary: "Terran",
         mythic: "Trovão"
      },
      traits: [2, "burst", 6],
      image: "/assets/heroes/noimage.png"
   },
   {
      name: "Donzela da Tempestade",
      faction: "horde",
      rarity: "mythic",
      suggestEquip: {
         epic: "Cavaleiro",
         legendary: "Sabio",
         mythic: "Solar"
      },
      traits: [1, "burst", 11],
      image: "/assets/heroes/noimage.png"
   }
]

const traitsList = [
   {
      id: 1,
      name: 1,
      description: "Este herói se destaca em causar dano.",
      bonus: "Dano final +3%",
      icon: ""
   },
   {
      id: 2,
      name: "Tanque",
      description: "Este herói é excelente em tankar o dano na linha de frente.",
      bonus: "Dano recebido -5%",
      icon: ""
   },
   {
      id: 3,
      name: "Apoiador",
      description: "Este herói se destaca em oferecer assistência estratégica.",
      bonus: "HP máximo +5%",
      icon: ""
   },
   {
      id: 4,
      name: "Curador",
      description: "Este herói se destaca em fornecer suporte de cura.",
      bonus: "Cura realizada +5%",
      icon: ""
   },
   {
      id: 5,
      name: "Controle",
      description: "Este herói é capaz de controlar inimigos.",
      bonus: "",
      icon: ""
   },
   {
      id: 6,
      name: "Buff",
      description: "Este herói é capaz de fornecer buffs aos companheiros de equipe.",
      bonus: "",
      icon: ""
   },
   {
      id: 7,
      name: "Debuff",
      description: "Este herói é capaz de infligir debuffs aos inimigos.",
      bonus: "",
      icon: ""
   },
   {
      id: 8,
      name: "Invocar",
      description: "Este herói pode convocar unidades para entrar na batalha.",
      bonus: "",
      icon: ""
   },
   {
      id: 9,
      name: "Sustentado",
      description: "Este herói é especializado em infligir efeitos especiais em ataques e engajar-se em combate contínuo.",
      bonus: "",
      icon: ""
   },
   {
      id: 10,
      name: "Dano Explosivo",
      description: "Este herói é especializado em usar habilidades para infligir danos de alta explosão em um curto período.",
      bonus: "",
      icon: ""
   },
   {
      id: 11,
      name: "Multialvo",
      description: "Este herói é especializado em causar dano de área de efeito(AoE).",
      bonus: "",
      icon: ""
   },
   {
      id: 12,
      name: "Alvo único",
      description: "Este herói se destaca em causar dano de alvo único.",
      bonus: "",
      icon: ""
   },
]

export { heroList, traitsList }