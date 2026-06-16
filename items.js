const DATA_PATCH = "Manual data from ItemData.txt";
const TARGET_UNIQUE_STATS = 10;

const STAT_TYPES = {
  "attackDamage": "Attack damage",
  "attackSpeed": "Attack speed",
  "abilityHaste": "Ability haste",
  "abilityPower": "Ability power",
  "armor": "Armor",
  "percentageArmorPenetration": "Percentage armor penetration",
  "criticalStrikeChance": "Critical strike chance",
  "criticalStrikeDamage": "Critical strike damage",
  "goldGeneration": "Gold generation",
  "healAndShieldPower": "Heal and shield power",
  "health": "Health",
  "baseHealthRegeneration": "Base health regeneration",
  "lifeSteal": "Life steal",
  "lethality": "Lethality",
  "flatMagicPenetration": "Flat magic penetration",
  "percentageMagicPenetration": "Percentage magic penetration",
  "magicResistance": "Magic resistance",
  "mana": "Mana",
  "baseManaRegeneration": "Base mana regeneration",
  "flatMovementSpeed": "Flat movement speed",
  "percentageMovementSpeed": "Percentage movement speed",
  "omnivamp": "Omnivamp",
  "tenacity": "Tenacity"
};

const SOURCE_STAT_TO_APP_STAT = {
  "ad": "attackDamage",
  "as": "attackSpeed",
  "ah": "abilityHaste",
  "ap": "abilityPower",
  "armor": "armor",
  "armpen": "percentageArmorPenetration",
  "crit": "criticalStrikeChance",
  "critdamage": "criticalStrikeDamage",
  "gp10": "goldGeneration",
  "hsp": "healAndShieldPower",
  "hp": "health",
  "hp5": "baseHealthRegeneration",
  "hp5flat": "baseHealthRegeneration",
  "lifesteal": "lifeSteal",
  "lethality": "lethality",
  "mpenflat": "flatMagicPenetration",
  "mpen": "percentageMagicPenetration",
  "mr": "magicResistance",
  "mana": "mana",
  "mp5": "baseManaRegeneration",
  "msflat": "flatMovementSpeed",
  "ms": "percentageMovementSpeed",
  "omnivamp": "omnivamp",
  "tenacity": "tenacity"
};

const ITEMS = [
  {
    "id": "8020",
    "slug": "abyssal-mask",
    "name": "Abyssal Mask",
    "cost": 2650,
    "buyDisplay": "2650g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 350,
        "sourceKey": "hp"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 45,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "2522",
    "slug": "actualizer",
    "name": "Actualizer",
    "cost": 2800,
    "buyDisplay": "2800g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 90,
        "sourceKey": "ap"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 300,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "3113",
    "slug": "aether-wisp",
    "name": "Aether Wisp",
    "cost": 900,
    "buyDisplay": "900g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 30,
        "sourceKey": "ap"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "1052",
    "slug": "amplifying-tome",
    "name": "Amplifying Tome",
    "cost": 400,
    "buyDisplay": "400g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 20,
        "sourceKey": "ap"
      }
    ]
  },
  {
    "id": "3003",
    "slug": "archangels-staff",
    "name": "Archangel's Staff",
    "cost": 2900,
    "buyDisplay": "2900g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 70,
        "sourceKey": "ap"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 25,
        "sourceKey": "ah"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 600,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "3504",
    "slug": "ardent-censer",
    "name": "Ardent Censer",
    "cost": 2200,
    "buyDisplay": "2200g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 45,
        "sourceKey": "ap"
      },
      {
        "type": "healAndShieldPower",
        "label": "Heal and shield power",
        "value": 10,
        "sourceKey": "hsp"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 125,
        "sourceKey": "mp5"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "3174",
    "slug": "armored-advance",
    "name": "Armored Advance",
    "cost": 1200,
    "buyDisplay": "=>Plated Steelcaps",
    "stats": [
      {
        "type": "armor",
        "label": "Armor",
        "value": 35,
        "sourceKey": "armor"
      },
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      }
    ]
  },
  {
    "id": "6696",
    "slug": "axiom-arc",
    "name": "Axiom Arc",
    "cost": 2750,
    "buyDisplay": "2750g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 55,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 18,
        "sourceKey": "lethality"
      }
    ]
  },
  {
    "id": "1038",
    "slug": "b-f-sword",
    "name": "B. F. Sword",
    "cost": 1300,
    "buyDisplay": "1300g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 40,
        "sourceKey": "ad"
      }
    ]
  },
  {
    "id": "6660",
    "slug": "bamis-cinder",
    "name": "Bami's Cinder",
    "cost": 900,
    "buyDisplay": "900g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 150,
        "sourceKey": "hp"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 5,
        "sourceKey": "ah"
      }
    ]
  },
  {
    "id": "4642",
    "slug": "bandleglass-mirror",
    "name": "Bandleglass Mirror",
    "cost": 900,
    "buyDisplay": "900g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 20,
        "sourceKey": "ap"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 100,
        "sourceKey": "mp5"
      }
    ]
  },
  {
    "id": "2524",
    "slug": "bandlepipes",
    "name": "Bandlepipes",
    "cost": 2300,
    "buyDisplay": "2300g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 20,
        "sourceKey": "armor"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 20,
        "sourceKey": "mr"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      }
    ]
  },
  {
    "id": "3102",
    "slug": "banshees-veil",
    "name": "Banshee's Veil",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 105,
        "sourceKey": "ap"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 40,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "2520",
    "slug": "bastionbreaker",
    "name": "Bastionbreaker",
    "cost": 3200,
    "buyDisplay": "3200g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 55,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 22,
        "sourceKey": "lethality"
      }
    ]
  },
  {
    "id": "3006",
    "slug": "berserkers-greaves",
    "name": "Berserker's Greaves",
    "cost": 1100,
    "buyDisplay": "1100g",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 25,
        "sourceKey": "as"
      },
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      }
    ]
  },
  {
    "id": "3071",
    "slug": "black-cleaver",
    "name": "Black Cleaver",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 40,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 400,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "2503",
    "slug": "blackfire-torch",
    "name": "Blackfire Torch",
    "cost": 2800,
    "buyDisplay": "2800g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 80,
        "sourceKey": "ap"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 600,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "3153",
    "slug": "blade-of-the-ruined-king",
    "name": "Blade of the Ruined King",
    "cost": 3200,
    "buyDisplay": "3200g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 40,
        "sourceKey": "ad"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 25,
        "sourceKey": "as"
      },
      {
        "type": "lifeSteal",
        "label": "Life steal",
        "value": 10,
        "sourceKey": "lifesteal"
      }
    ]
  },
  {
    "id": "1026",
    "slug": "blasting-wand",
    "name": "Blasting Wand",
    "cost": 850,
    "buyDisplay": "850g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 45,
        "sourceKey": "ap"
      }
    ]
  },
  {
    "id": "4630",
    "slug": "blighting-jewel",
    "name": "Blighting Jewel",
    "cost": 1100,
    "buyDisplay": "1100g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 25,
        "sourceKey": "ap"
      },
      {
        "type": "percentageMagicPenetration",
        "label": "Percentage magic penetration",
        "value": 13,
        "sourceKey": "mpen"
      }
    ]
  },
  {
    "id": "8010",
    "slug": "bloodletters-curse",
    "name": "Bloodletter's Curse",
    "cost": 2900,
    "buyDisplay": "2900g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 65,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 400,
        "sourceKey": "hp"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      }
    ]
  },
  {
    "id": "3877",
    "slug": "bloodsong",
    "name": "Bloodsong",
    "cost": 400,
    "buyDisplay": "=>Bounty of Worlds",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 75,
        "sourceKey": "hp5"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 75,
        "sourceKey": "mp5"
      },
      {
        "type": "goldGeneration",
        "label": "Gold generation",
        "value": 9,
        "sourceKey": "gp10"
      }
    ]
  },
  {
    "id": "3072",
    "slug": "bloodthirster",
    "name": "Bloodthirster",
    "cost": 3400,
    "buyDisplay": "3400g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 80,
        "sourceKey": "ad"
      },
      {
        "type": "lifeSteal",
        "label": "Life steal",
        "value": 15,
        "sourceKey": "lifesteal"
      }
    ]
  },
  {
    "id": "1001",
    "slug": "boots",
    "name": "Boots",
    "cost": 300,
    "buyDisplay": "300g",
    "stats": [
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 25,
        "sourceKey": "msflat"
      }
    ]
  },
  {
    "id": "3009",
    "slug": "boots-of-swiftness",
    "name": "Boots of Swiftness",
    "cost": 1000,
    "buyDisplay": "1000g",
    "stats": [
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 55,
        "sourceKey": "msflat"
      }
    ]
  },
  {
    "id": "3867",
    "slug": "bounty-of-worlds",
    "name": "Bounty of Worlds",
    "cost": 400,
    "buyDisplay": "=>Runic Compass",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 75,
        "sourceKey": "hp5"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 75,
        "sourceKey": "mp5"
      },
      {
        "type": "goldGeneration",
        "label": "Gold generation",
        "value": 5,
        "sourceKey": "gp10"
      }
    ]
  },
  {
    "id": "3076",
    "slug": "bramble-vest",
    "name": "Bramble Vest",
    "cost": 800,
    "buyDisplay": "800g",
    "stats": [
      {
        "type": "armor",
        "label": "Armor",
        "value": 30,
        "sourceKey": "armor"
      }
    ]
  },
  {
    "id": "3803",
    "slug": "catalyst-of-aeons",
    "name": "Catalyst of Aeons",
    "cost": 1300,
    "buyDisplay": "1300g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 300,
        "sourceKey": "hp"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 375,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "3133",
    "slug": "caulfields-warhammer",
    "name": "Caulfield's Warhammer",
    "cost": 1050,
    "buyDisplay": "1050g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 20,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      }
    ]
  },
  {
    "id": "3869",
    "slug": "celestial-opposition",
    "name": "Celestial Opposition",
    "cost": 400,
    "buyDisplay": "=>Bounty of Worlds",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 75,
        "sourceKey": "hp5"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 75,
        "sourceKey": "mp5"
      },
      {
        "type": "goldGeneration",
        "label": "Gold generation",
        "value": 9,
        "sourceKey": "gp10"
      }
    ]
  },
  {
    "id": "1031",
    "slug": "chain-vest",
    "name": "Chain Vest",
    "cost": 800,
    "buyDisplay": "800g",
    "stats": [
      {
        "type": "armor",
        "label": "Armor",
        "value": 40,
        "sourceKey": "armor"
      }
    ]
  },
  {
    "id": "3173",
    "slug": "chainlaced-crushers",
    "name": "Chainlaced Crushers",
    "cost": 1250,
    "buyDisplay": "=>Mercury's Treads",
    "stats": [
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 30,
        "sourceKey": "mr"
      },
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      },
      {
        "type": "tenacity",
        "label": "Tenacity",
        "value": 30,
        "sourceKey": "tenacity"
      }
    ]
  },
  {
    "id": "6609",
    "slug": "chempunk-chainsword",
    "name": "Chempunk Chainsword",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 45,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 450,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "1018",
    "slug": "cloak-of-agility",
    "name": "Cloak of Agility",
    "cost": 600,
    "buyDisplay": "600g",
    "stats": [
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 15,
        "sourceKey": "crit"
      }
    ]
  },
  {
    "id": "1029",
    "slug": "cloth-armor",
    "name": "Cloth Armor",
    "cost": 300,
    "buyDisplay": "300g",
    "stats": [
      {
        "type": "armor",
        "label": "Armor",
        "value": 15,
        "sourceKey": "armor"
      }
    ]
  },
  {
    "id": "4629",
    "slug": "cosmic-drive",
    "name": "Cosmic Drive",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 350,
        "sourceKey": "hp"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 25,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 70,
        "sourceKey": "ap"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "3171",
    "slug": "crimson-lucidity",
    "name": "Crimson Lucidity",
    "cost": 900,
    "buyDisplay": "=>Ionian Boots of Lucidity",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      }
    ]
  },
  {
    "id": "3137",
    "slug": "cryptbloom",
    "name": "Cryptbloom",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 75,
        "sourceKey": "ap"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "percentageMagicPenetration",
        "label": "Percentage magic penetration",
        "value": 30,
        "sourceKey": "mpen"
      }
    ]
  },
  {
    "id": "3801",
    "slug": "crystalline-bracer",
    "name": "Crystalline Bracer",
    "cost": 800,
    "buyDisplay": "800g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 100,
        "sourceKey": "hp5"
      }
    ]
  },
  {
    "id": "1083",
    "slug": "cull",
    "name": "Cull",
    "cost": 450,
    "buyDisplay": "450g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 7,
        "sourceKey": "ad"
      }
    ]
  },
  {
    "id": "1042",
    "slug": "dagger",
    "name": "Dagger",
    "cost": 250,
    "buyDisplay": "250g",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 10,
        "sourceKey": "as"
      }
    ]
  },
  {
    "id": "1082",
    "slug": "dark-seal",
    "name": "Dark Seal",
    "cost": 350,
    "buyDisplay": "350g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 15,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 50,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "6621",
    "slug": "dawncore",
    "name": "Dawncore",
    "cost": 2500,
    "buyDisplay": "2500g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 45,
        "sourceKey": "ap"
      },
      {
        "type": "healAndShieldPower",
        "label": "Heal and shield power",
        "value": 16,
        "sourceKey": "hsp"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 100,
        "sourceKey": "mp5"
      }
    ]
  },
  {
    "id": "3742",
    "slug": "dead-mans-plate",
    "name": "Dead Man's Plate",
    "cost": 2900,
    "buyDisplay": "2900g",
    "stats": [
      {
        "type": "armor",
        "label": "Armor",
        "value": 55,
        "sourceKey": "armor"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 350,
        "sourceKey": "hp"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "6333",
    "slug": "deaths-dance",
    "name": "Death's Dance",
    "cost": 3300,
    "buyDisplay": "3300g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 60,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 50,
        "sourceKey": "armor"
      }
    ]
  },
  {
    "id": "1055",
    "slug": "dorans-blade",
    "name": "Doran's Blade",
    "cost": 450,
    "buyDisplay": "450g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 10,
        "sourceKey": "ad"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 80,
        "sourceKey": "hp"
      },
      {
        "type": "omnivamp",
        "label": "Omnivamp",
        "value": 2.5,
        "sourceKey": "omnivamp"
      }
    ]
  },
  {
    "id": "1086",
    "slug": "dorans-bow",
    "name": "Doran's Bow",
    "cost": 400,
    "buyDisplay": "400g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 8,
        "sourceKey": "ad"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 15,
        "sourceKey": "as"
      },
      {
        "type": "omnivamp",
        "label": "Omnivamp",
        "value": 1.5,
        "sourceKey": "omnivamp"
      }
    ]
  },
  {
    "id": "1120",
    "slug": "dorans-helm",
    "name": "Doran's Helm",
    "cost": 450,
    "buyDisplay": "450g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 140,
        "sourceKey": "hp"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 10,
        "sourceKey": "armor"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 10,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "1056",
    "slug": "dorans-ring",
    "name": "Doran's Ring",
    "cost": 400,
    "buyDisplay": "400g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 18,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 90,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "1054",
    "slug": "dorans-shield",
    "name": "Doran's Shield",
    "cost": 450,
    "buyDisplay": "450g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 110,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 4,
        "sourceKey": "hp5flat"
      }
    ]
  },
  {
    "id": "3870",
    "slug": "dream-maker",
    "name": "Dream Maker",
    "cost": 400,
    "buyDisplay": "=>Bounty of Worlds",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 75,
        "sourceKey": "hp5"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 75,
        "sourceKey": "mp5"
      },
      {
        "type": "goldGeneration",
        "label": "Gold generation",
        "value": 9,
        "sourceKey": "gp10"
      }
    ]
  },
  {
    "id": "2510",
    "slug": "dusk-and-dawn",
    "name": "Dusk and Dawn",
    "cost": 3100,
    "buyDisplay": "3100g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 60,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 300,
        "sourceKey": "hp"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 20,
        "sourceKey": "as"
      }
    ]
  },
  {
    "id": "6620",
    "slug": "echoes-of-helia",
    "name": "Echoes of Helia",
    "cost": 2200,
    "buyDisplay": "2200g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 35,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 125,
        "sourceKey": "mp5"
      }
    ]
  },
  {
    "id": "6692",
    "slug": "eclipse",
    "name": "Eclipse",
    "cost": 2900,
    "buyDisplay": "2900g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 60,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      }
    ]
  },
  {
    "id": "3814",
    "slug": "edge-of-night",
    "name": "Edge of Night",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 50,
        "sourceKey": "ad"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 250,
        "sourceKey": "hp"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 15,
        "sourceKey": "lethality"
      }
    ]
  },
  {
    "id": "2517",
    "slug": "endless-hunger",
    "name": "Endless Hunger",
    "cost": 3100,
    "buyDisplay": "3100g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 65,
        "sourceKey": "ad"
      },
      {
        "type": "omnivamp",
        "label": "Omnivamp",
        "value": 5,
        "sourceKey": "omnivamp"
      },
      {
        "type": "tenacity",
        "label": "Tenacity",
        "value": 20,
        "sourceKey": "tenacity"
      }
    ]
  },
  {
    "id": "3508",
    "slug": "essence-reaver",
    "name": "Essence Reaver",
    "cost": 3050,
    "buyDisplay": "3050g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 50,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      }
    ]
  },
  {
    "id": "3123",
    "slug": "executioners-calling",
    "name": "Executioner's Calling",
    "cost": 800,
    "buyDisplay": "800g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 15,
        "sourceKey": "ad"
      }
    ]
  },
  {
    "id": "3073",
    "slug": "experimental-hexplate",
    "name": "Experimental Hexplate",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 450,
        "sourceKey": "hp"
      },
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 40,
        "sourceKey": "ad"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 20,
        "sourceKey": "as"
      }
    ]
  },
  {
    "id": "1004",
    "slug": "faerie-charm",
    "name": "Faerie Charm",
    "cost": 200,
    "buyDisplay": "200g",
    "stats": [
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 50,
        "sourceKey": "mp5"
      }
    ]
  },
  {
    "id": "2508",
    "slug": "fated-ashes",
    "name": "Fated Ashes",
    "cost": 900,
    "buyDisplay": "900g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 30,
        "sourceKey": "ap"
      }
    ]
  },
  {
    "id": "2512",
    "slug": "fiendhunter-bolts",
    "name": "Fiendhunter Bolts",
    "cost": 2650,
    "buyDisplay": "2650g",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 45,
        "sourceKey": "as"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "3108",
    "slug": "fiendish-codex",
    "name": "Fiendish Codex",
    "cost": 850,
    "buyDisplay": "850g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 25,
        "sourceKey": "ap"
      }
    ]
  },
  {
    "id": "3114",
    "slug": "forbidden-idol",
    "name": "Forbidden Idol",
    "cost": 600,
    "buyDisplay": "600g",
    "stats": [
      {
        "type": "healAndShieldPower",
        "label": "Heal and shield power",
        "value": 8,
        "sourceKey": "hsp"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 50,
        "sourceKey": "mp5"
      }
    ]
  },
  {
    "id": "4401",
    "slug": "force-of-nature",
    "name": "Force of Nature",
    "cost": 2800,
    "buyDisplay": "2800g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 400,
        "sourceKey": "hp"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 55,
        "sourceKey": "mr"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "3110",
    "slug": "frozen-heart",
    "name": "Frozen Heart",
    "cost": 2500,
    "buyDisplay": "2500g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 75,
        "sourceKey": "armor"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 400,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "1011",
    "slug": "giants-belt",
    "name": "Giant's Belt",
    "cost": 900,
    "buyDisplay": "900g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 350,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3024",
    "slug": "glacial-buckler",
    "name": "Glacial Buckler",
    "cost": 900,
    "buyDisplay": "900g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 25,
        "sourceKey": "armor"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 300,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "2022",
    "slug": "glowing-mote",
    "name": "Glowing Mote",
    "cost": 250,
    "buyDisplay": "250g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 5,
        "sourceKey": "ah"
      }
    ]
  },
  {
    "id": "3008",
    "slug": "gluttonous-greaves",
    "name": "Gluttonous Greaves",
    "cost": 1000,
    "buyDisplay": "1000g",
    "stats": [
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      },
      {
        "type": "omnivamp",
        "label": "Omnivamp",
        "value": 4,
        "sourceKey": "omnivamp"
      }
    ]
  },
  {
    "id": "3026",
    "slug": "guardian-angel",
    "name": "Guardian Angel",
    "cost": 3200,
    "buyDisplay": "3200g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 55,
        "sourceKey": "ad"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 45,
        "sourceKey": "armor"
      }
    ]
  },
  {
    "id": "3124",
    "slug": "guinsoos-rageblade",
    "name": "Guinsoo's Rageblade",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 30,
        "sourceKey": "ad"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 30,
        "sourceKey": "ap"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 25,
        "sourceKey": "as"
      }
    ]
  },
  {
    "id": "3172",
    "slug": "gunmetal-greaves",
    "name": "Gunmetal Greaves",
    "cost": 1100,
    "buyDisplay": "=>Berserker's Greaves",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 40,
        "sourceKey": "as"
      },
      {
        "type": "lifeSteal",
        "label": "Life steal",
        "value": 5,
        "sourceKey": "lifesteal"
      },
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      }
    ]
  },
  {
    "id": "3147",
    "slug": "haunting-guise",
    "name": "Haunting Guise",
    "cost": 1300,
    "buyDisplay": "1300g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 30,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3051",
    "slug": "hearthbound-axe",
    "name": "Hearthbound Axe",
    "cost": 1200,
    "buyDisplay": "1200g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 20,
        "sourceKey": "ad"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 20,
        "sourceKey": "as"
      }
    ]
  },
  {
    "id": "3084",
    "slug": "heartsteel",
    "name": "Heartsteel",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 900,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 100,
        "sourceKey": "hp5"
      }
    ]
  },
  {
    "id": "3155",
    "slug": "hexdrinker",
    "name": "Hexdrinker",
    "cost": 1300,
    "buyDisplay": "1300g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 25,
        "sourceKey": "ad"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 25,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "2523",
    "slug": "hexoptics-c44",
    "name": "Hexoptics C44",
    "cost": 2800,
    "buyDisplay": "2800g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 55,
        "sourceKey": "ad"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      }
    ]
  },
  {
    "id": "3145",
    "slug": "hextech-alternator",
    "name": "Hextech Alternator",
    "cost": 1100,
    "buyDisplay": "1100g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 45,
        "sourceKey": "ap"
      }
    ]
  },
  {
    "id": "3146",
    "slug": "hextech-gunblade",
    "name": "Hextech Gunblade",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 40,
        "sourceKey": "ad"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 80,
        "sourceKey": "ap"
      },
      {
        "type": "omnivamp",
        "label": "Omnivamp",
        "value": 10,
        "sourceKey": "omnivamp"
      }
    ]
  },
  {
    "id": "3152",
    "slug": "hextech-rocketbelt",
    "name": "Hextech Rocketbelt",
    "cost": 2650,
    "buyDisplay": "2650g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 70,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 300,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "6664",
    "slug": "hollow-radiance",
    "name": "Hollow Radiance",
    "cost": 2800,
    "buyDisplay": "2800g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 400,
        "sourceKey": "hp"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 40,
        "sourceKey": "mr"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 100,
        "sourceKey": "hp5"
      }
    ]
  },
  {
    "id": "4628",
    "slug": "horizon-focus",
    "name": "Horizon Focus",
    "cost": 2700,
    "buyDisplay": "2700g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 75,
        "sourceKey": "ap"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 25,
        "sourceKey": "ah"
      }
    ]
  },
  {
    "id": "6697",
    "slug": "hubris",
    "name": "Hubris",
    "cost": 2800,
    "buyDisplay": "2800g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 55,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 18,
        "sourceKey": "lethality"
      }
    ]
  },
  {
    "id": "3181",
    "slug": "hullbreaker",
    "name": "Hullbreaker",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 40,
        "sourceKey": "ad"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 500,
        "sourceKey": "hp"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "6662",
    "slug": "iceborn-gauntlet",
    "name": "Iceborn Gauntlet",
    "cost": 2900,
    "buyDisplay": "2900g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 50,
        "sourceKey": "armor"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 300,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3168",
    "slug": "immortal-path",
    "name": "Immortal Path",
    "cost": 1000,
    "buyDisplay": "=>Gluttonous Greaves",
    "stats": [
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      },
      {
        "type": "omnivamp",
        "label": "Omnivamp",
        "value": 4,
        "sourceKey": "omnivamp"
      }
    ]
  },
  {
    "id": "6673",
    "slug": "immortal-shieldbow",
    "name": "Immortal Shieldbow",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 55,
        "sourceKey": "ad"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      }
    ]
  },
  {
    "id": "4005",
    "slug": "imperial-mandate",
    "name": "Imperial Mandate",
    "cost": 2400,
    "buyDisplay": "2400g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 65,
        "sourceKey": "ap"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 150,
        "sourceKey": "mp5"
      }
    ]
  },
  {
    "id": "3031",
    "slug": "infinity-edge",
    "name": "Infinity Edge",
    "cost": 3500,
    "buyDisplay": "3500g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 75,
        "sourceKey": "ad"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      },
      {
        "type": "criticalStrikeDamage",
        "label": "Critical strike damage",
        "value": 30,
        "sourceKey": "critdamage"
      }
    ]
  },
  {
    "id": "3158",
    "slug": "ionian-boots-of-lucidity",
    "name": "Ionian Boots of Lucidity",
    "cost": 900,
    "buyDisplay": "900g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      }
    ]
  },
  {
    "id": "6665",
    "slug": "jaksho-the-protean",
    "name": "Jak'Sho, The Protean",
    "cost": 3200,
    "buyDisplay": "3200g",
    "stats": [
      {
        "type": "armor",
        "label": "Armor",
        "value": 45,
        "sourceKey": "armor"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 45,
        "sourceKey": "mr"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 350,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "2504",
    "slug": "kaenic-rookern",
    "name": "Kaenic Rookern",
    "cost": 2900,
    "buyDisplay": "2900g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 400,
        "sourceKey": "hp"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 80,
        "sourceKey": "mr"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 100,
        "sourceKey": "hp5"
      }
    ]
  },
  {
    "id": "3067",
    "slug": "kindlegem",
    "name": "Kindlegem",
    "cost": 800,
    "buyDisplay": "800g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3109",
    "slug": "knights-vow",
    "name": "Knight's Vow",
    "cost": 2300,
    "buyDisplay": "2300g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 40,
        "sourceKey": "armor"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 100,
        "sourceKey": "hp5"
      }
    ]
  },
  {
    "id": "6672",
    "slug": "kraken-slayer",
    "name": "Kraken Slayer",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 45,
        "sourceKey": "ad"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 40,
        "sourceKey": "as"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "3035",
    "slug": "last-whisper",
    "name": "Last Whisper",
    "cost": 1450,
    "buyDisplay": "1450g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 20,
        "sourceKey": "ad"
      },
      {
        "type": "percentageArmorPenetration",
        "label": "Percentage armor penetration",
        "value": 18,
        "sourceKey": "armpen"
      }
    ]
  },
  {
    "id": "6653",
    "slug": "liandrys-torment",
    "name": "Liandry's Torment",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 60,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 300,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3100",
    "slug": "lich-bane",
    "name": "Lich Bane",
    "cost": 2900,
    "buyDisplay": "2900g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 100,
        "sourceKey": "ap"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 6,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "3190",
    "slug": "locket-of-the-iron-solari",
    "name": "Locket of the Iron Solari",
    "cost": 2200,
    "buyDisplay": "2200g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 30,
        "sourceKey": "armor"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 30,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "1036",
    "slug": "long-sword",
    "name": "Long Sword",
    "cost": 350,
    "buyDisplay": "350g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 10,
        "sourceKey": "ad"
      }
    ]
  },
  {
    "id": "3036",
    "slug": "lord-dominiks-regards",
    "name": "Lord Dominik's Regards",
    "cost": 3300,
    "buyDisplay": "3300g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 35,
        "sourceKey": "ad"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      },
      {
        "type": "percentageArmorPenetration",
        "label": "Percentage armor penetration",
        "value": 35,
        "sourceKey": "armpen"
      }
    ]
  },
  {
    "id": "3802",
    "slug": "lost-chapter",
    "name": "Lost Chapter",
    "cost": 1200,
    "buyDisplay": "1200g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 40,
        "sourceKey": "ap"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 300,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "6655",
    "slug": "ludens-echo",
    "name": "Luden's Echo",
    "cost": 2750,
    "buyDisplay": "2750g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 100,
        "sourceKey": "ap"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 600,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "3118",
    "slug": "malignance",
    "name": "Malignance",
    "cost": 2700,
    "buyDisplay": "2700g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 90,
        "sourceKey": "ap"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 600,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "3004",
    "slug": "manamune",
    "name": "Manamune",
    "cost": 2900,
    "buyDisplay": "2900g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 35,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 500,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "3156",
    "slug": "maw-of-malmortius",
    "name": "Maw of Malmortius",
    "cost": 3100,
    "buyDisplay": "3100g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 60,
        "sourceKey": "ad"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 40,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "3041",
    "slug": "mejais-soulstealer",
    "name": "Mejai's Soulstealer",
    "cost": 1500,
    "buyDisplay": "1500g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 20,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 100,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3139",
    "slug": "mercurial-scimitar",
    "name": "Mercurial Scimitar",
    "cost": 3200,
    "buyDisplay": "3200g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 50,
        "sourceKey": "ad"
      },
      {
        "type": "lifeSteal",
        "label": "Life steal",
        "value": 10,
        "sourceKey": "lifesteal"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 35,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "3111",
    "slug": "mercurys-treads",
    "name": "Mercury's Treads",
    "cost": 1250,
    "buyDisplay": "1250g",
    "stats": [
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 20,
        "sourceKey": "mr"
      },
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      },
      {
        "type": "tenacity",
        "label": "Tenacity",
        "value": 30,
        "sourceKey": "tenacity"
      }
    ]
  },
  {
    "id": "3222",
    "slug": "mikaels-blessing",
    "name": "Mikael's Blessing",
    "cost": 2300,
    "buyDisplay": "2300g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 250,
        "sourceKey": "hp"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "healAndShieldPower",
        "label": "Heal and shield power",
        "value": 12,
        "sourceKey": "hsp"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 100,
        "sourceKey": "mp5"
      }
    ]
  },
  {
    "id": "6617",
    "slug": "moonstone-renewer",
    "name": "Moonstone Renewer",
    "cost": 2200,
    "buyDisplay": "2200g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 25,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 125,
        "sourceKey": "mp5"
      }
    ]
  },
  {
    "id": "3165",
    "slug": "morellonomicon",
    "name": "Morellonomicon",
    "cost": 2850,
    "buyDisplay": "2850g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 75,
        "sourceKey": "ap"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 350,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3033",
    "slug": "mortal-reminder",
    "name": "Mortal Reminder",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 35,
        "sourceKey": "ad"
      },
      {
        "type": "percentageArmorPenetration",
        "label": "Percentage armor penetration",
        "value": 30,
        "sourceKey": "armpen"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      }
    ]
  },
  {
    "id": "3115",
    "slug": "nashors-tooth",
    "name": "Nashor's Tooth",
    "cost": 2900,
    "buyDisplay": "2900g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 80,
        "sourceKey": "ap"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 50,
        "sourceKey": "as"
      }
    ]
  },
  {
    "id": "6675",
    "slug": "navori-flickerblade",
    "name": "Navori Flickerblade",
    "cost": 2650,
    "buyDisplay": "2650g",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 40,
        "sourceKey": "as"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "1058",
    "slug": "needlessly-large-rod",
    "name": "Needlessly Large Rod",
    "cost": 1200,
    "buyDisplay": "1200g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 65,
        "sourceKey": "ap"
      }
    ]
  },
  {
    "id": "1057",
    "slug": "negatron-cloak",
    "name": "Negatron Cloak",
    "cost": 850,
    "buyDisplay": "850g",
    "stats": [
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 45,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "6670",
    "slug": "noonquiver",
    "name": "Noonquiver",
    "cost": 1300,
    "buyDisplay": "1300g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 15,
        "sourceKey": "ad"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 20,
        "sourceKey": "crit"
      }
    ]
  },
  {
    "id": "1033",
    "slug": "null-magic-mantle",
    "name": "Null-Magic Mantle",
    "cost": 400,
    "buyDisplay": "400g",
    "stats": [
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 20,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "3916",
    "slug": "oblivion-orb",
    "name": "Oblivion Orb",
    "cost": 800,
    "buyDisplay": "800g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 25,
        "sourceKey": "ap"
      }
    ]
  },
  {
    "id": "2501",
    "slug": "overlords-bloodmail",
    "name": "Overlord's Bloodmail",
    "cost": 3300,
    "buyDisplay": "3300g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 550,
        "sourceKey": "hp"
      },
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 30,
        "sourceKey": "ad"
      }
    ]
  },
  {
    "id": "3044",
    "slug": "phage",
    "name": "Phage",
    "cost": 1100,
    "buyDisplay": "1100g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 15,
        "sourceKey": "ad"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3046",
    "slug": "phantom-dancer",
    "name": "Phantom Dancer",
    "cost": 2650,
    "buyDisplay": "2650g",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 65,
        "sourceKey": "as"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 10,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "1037",
    "slug": "pickaxe",
    "name": "Pickaxe",
    "cost": 875,
    "buyDisplay": "875g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 25,
        "sourceKey": "ad"
      }
    ]
  },
  {
    "id": "3047",
    "slug": "plated-steelcaps",
    "name": "Plated Steelcaps",
    "cost": 1200,
    "buyDisplay": "1200g",
    "stats": [
      {
        "type": "armor",
        "label": "Armor",
        "value": 25,
        "sourceKey": "armor"
      },
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      }
    ]
  },
  {
    "id": "6698",
    "slug": "profane-hydra",
    "name": "Profane Hydra",
    "cost": 2850,
    "buyDisplay": "2850g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 55,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 18,
        "sourceKey": "lethality"
      }
    ]
  },
  {
    "id": "2525",
    "slug": "protoplasm-harness",
    "name": "Protoplasm Harness",
    "cost": 2500,
    "buyDisplay": "2500g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 20,
        "sourceKey": "ah"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 600,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3140",
    "slug": "quicksilver-sash",
    "name": "Quicksilver Sash",
    "cost": 1300,
    "buyDisplay": "1300g",
    "stats": [
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 30,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "3089",
    "slug": "rabadons-deathcap",
    "name": "Rabadon's Deathcap",
    "cost": 3500,
    "buyDisplay": "3500g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 130,
        "sourceKey": "ap"
      }
    ]
  },
  {
    "id": "3143",
    "slug": "randuins-omen",
    "name": "Randuin's Omen",
    "cost": 2700,
    "buyDisplay": "2700g",
    "stats": [
      {
        "type": "armor",
        "label": "Armor",
        "value": 75,
        "sourceKey": "armor"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 350,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3094",
    "slug": "rapid-firecannon",
    "name": "Rapid Firecannon",
    "cost": 2650,
    "buyDisplay": "2650g",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 35,
        "sourceKey": "as"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "3074",
    "slug": "ravenous-hydra",
    "name": "Ravenous Hydra",
    "cost": 3300,
    "buyDisplay": "3300g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 65,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "lifeSteal",
        "label": "Life steal",
        "value": 12,
        "sourceKey": "lifesteal"
      }
    ]
  },
  {
    "id": "6690",
    "slug": "rectrix",
    "name": "Rectrix",
    "cost": 775,
    "buyDisplay": "775g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 15,
        "sourceKey": "ad"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "1043",
    "slug": "recurve-bow",
    "name": "Recurve Bow",
    "cost": 700,
    "buyDisplay": "700g",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 15,
        "sourceKey": "as"
      }
    ]
  },
  {
    "id": "3107",
    "slug": "redemption",
    "name": "Redemption",
    "cost": 2250,
    "buyDisplay": "2250g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 30,
        "sourceKey": "ap"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "healAndShieldPower",
        "label": "Heal and shield power",
        "value": 10,
        "sourceKey": "hsp"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 100,
        "sourceKey": "mp5"
      }
    ]
  },
  {
    "id": "1006",
    "slug": "rejuvenation-bead",
    "name": "Rejuvenation Bead",
    "cost": 300,
    "buyDisplay": "300g",
    "stats": [
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 100,
        "sourceKey": "hp5"
      }
    ]
  },
  {
    "id": "4633",
    "slug": "riftmaker",
    "name": "Riftmaker",
    "cost": 3100,
    "buyDisplay": "3100g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 70,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 350,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "6657",
    "slug": "rod-of-ages",
    "name": "Rod of Ages",
    "cost": 2600,
    "buyDisplay": "2600g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 45,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 350,
        "sourceKey": "hp"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 500,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "1028",
    "slug": "ruby-crystal",
    "name": "Ruby Crystal",
    "cost": 400,
    "buyDisplay": "400g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 150,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3085",
    "slug": "runaans-hurricane",
    "name": "Runaan's Hurricane",
    "cost": 2650,
    "buyDisplay": "2650g",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 40,
        "sourceKey": "as"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "3866",
    "slug": "runic-compass",
    "name": "Runic Compass",
    "cost": 400,
    "buyDisplay": "=>World Atlas",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 100,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 50,
        "sourceKey": "hp5"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 50,
        "sourceKey": "mp5"
      },
      {
        "type": "goldGeneration",
        "label": "Gold generation",
        "value": 5,
        "sourceKey": "gp10"
      }
    ]
  },
  {
    "id": "3116",
    "slug": "rylais-crystal-scepter",
    "name": "Rylai's Crystal Scepter",
    "cost": 2600,
    "buyDisplay": "2600g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 65,
        "sourceKey": "ap"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 400,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "1027",
    "slug": "sapphire-crystal",
    "name": "Sapphire Crystal",
    "cost": 300,
    "buyDisplay": "300g",
    "stats": [
      {
        "type": "mana",
        "label": "Mana",
        "value": 300,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "3144",
    "slug": "scouts-slingshot",
    "name": "Scout's Slingshot",
    "cost": 600,
    "buyDisplay": "600g",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 20,
        "sourceKey": "as"
      }
    ]
  },
  {
    "id": "2420",
    "slug": "seekers-armguard",
    "name": "Seeker's Armguard",
    "cost": 1600,
    "buyDisplay": "1600g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 40,
        "sourceKey": "ap"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 25,
        "sourceKey": "armor"
      }
    ]
  },
  {
    "id": "6695",
    "slug": "serpents-fang",
    "name": "Serpent's Fang",
    "cost": 2500,
    "buyDisplay": "2500g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 55,
        "sourceKey": "ad"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 15,
        "sourceKey": "lethality"
      }
    ]
  },
  {
    "id": "3134",
    "slug": "serrated-dirk",
    "name": "Serrated Dirk",
    "cost": 1000,
    "buyDisplay": "1000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 20,
        "sourceKey": "ad"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 10,
        "sourceKey": "lethality"
      }
    ]
  },
  {
    "id": "6694",
    "slug": "seryldas-grudge",
    "name": "Serylda's Grudge",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 45,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "percentageArmorPenetration",
        "label": "Percentage armor penetration",
        "value": 35,
        "sourceKey": "armpen"
      }
    ]
  },
  {
    "id": "4645",
    "slug": "shadowflame",
    "name": "Shadowflame",
    "cost": 3200,
    "buyDisplay": "3200g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 110,
        "sourceKey": "ap"
      },
      {
        "type": "flatMagicPenetration",
        "label": "Flat magic penetration",
        "value": 15,
        "sourceKey": "mpenflat"
      }
    ]
  },
  {
    "id": "3057",
    "slug": "sheen",
    "name": "Sheen",
    "cost": 900,
    "buyDisplay": "900g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      }
    ]
  },
  {
    "id": "2065",
    "slug": "shurelyas-battlesong",
    "name": "Shurelya's Battlesong",
    "cost": 2200,
    "buyDisplay": "2200g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 50,
        "sourceKey": "ap"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 125,
        "sourceKey": "mp5"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "2422",
    "slug": "slightly-magical-boots",
    "name": "Slightly Magical Boots",
    "cost": 0,
    "buyDisplay": "0g",
    "stats": [
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 25,
        "sourceKey": "msflat"
      }
    ]
  },
  {
    "id": "3876",
    "slug": "solstice-sleigh",
    "name": "Solstice Sleigh",
    "cost": 400,
    "buyDisplay": "=>Bounty of Worlds",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 75,
        "sourceKey": "hp5"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 75,
        "sourceKey": "mp5"
      },
      {
        "type": "goldGeneration",
        "label": "Gold generation",
        "value": 9,
        "sourceKey": "gp10"
      }
    ]
  },
  {
    "id": "3020",
    "slug": "sorcerers-shoes",
    "name": "Sorcerer's Shoes",
    "cost": 1100,
    "buyDisplay": "1100g",
    "stats": [
      {
        "type": "flatMagicPenetration",
        "label": "Flat magic penetration",
        "value": 12,
        "sourceKey": "mpenflat"
      },
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      }
    ]
  },
  {
    "id": "3161",
    "slug": "spear-of-shojin",
    "name": "Spear of Shojin",
    "cost": 3100,
    "buyDisplay": "3100g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 45,
        "sourceKey": "ad"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 450,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3211",
    "slug": "spectres-cowl",
    "name": "Spectre's Cowl",
    "cost": 1250,
    "buyDisplay": "1250g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 35,
        "sourceKey": "mr"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 100,
        "sourceKey": "hp5"
      }
    ]
  },
  {
    "id": "3175",
    "slug": "spellslingers-shoes",
    "name": "Spellslinger's Shoes",
    "cost": 1100,
    "buyDisplay": "=>Sorcerer's Shoes",
    "stats": [
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 45,
        "sourceKey": "msflat"
      },
      {
        "type": "flatMagicPenetration",
        "label": "Flat magic penetration",
        "value": 18,
        "sourceKey": "mpenflat"
      },
      {
        "type": "percentageMagicPenetration",
        "label": "Percentage magic penetration",
        "value": 8,
        "sourceKey": "mpen"
      }
    ]
  },
  {
    "id": "3065",
    "slug": "spirit-visage",
    "name": "Spirit Visage",
    "cost": 2700,
    "buyDisplay": "2700g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 400,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 100,
        "sourceKey": "hp5"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 50,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "6616",
    "slug": "staff-of-flowing-water",
    "name": "Staff of Flowing Water",
    "cost": 2250,
    "buyDisplay": "2250g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 35,
        "sourceKey": "ap"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 125,
        "sourceKey": "mp5"
      },
      {
        "type": "healAndShieldPower",
        "label": "Heal and shield power",
        "value": 10,
        "sourceKey": "hsp"
      }
    ]
  },
  {
    "id": "3087",
    "slug": "statikk-shiv",
    "name": "Statikk Shiv",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 45,
        "sourceKey": "ad"
      },
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 45,
        "sourceKey": "ap"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 30,
        "sourceKey": "as"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "2019",
    "slug": "steel-sigil",
    "name": "Steel Sigil",
    "cost": 1100,
    "buyDisplay": "1100g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 15,
        "sourceKey": "ad"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 30,
        "sourceKey": "armor"
      }
    ]
  },
  {
    "id": "3053",
    "slug": "steraks-gage",
    "name": "Sterak's Gage",
    "cost": 3200,
    "buyDisplay": "3200g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 0,
        "sourceKey": "ad"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 400,
        "sourceKey": "hp"
      },
      {
        "type": "tenacity",
        "label": "Tenacity",
        "value": 20,
        "sourceKey": "tenacity"
      }
    ]
  },
  {
    "id": "3097",
    "slug": "stormrazor",
    "name": "Stormrazor",
    "cost": 3200,
    "buyDisplay": "3200g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 50,
        "sourceKey": "ad"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 20,
        "sourceKey": "as"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      }
    ]
  },
  {
    "id": "4646",
    "slug": "stormsurge",
    "name": "Stormsurge",
    "cost": 2800,
    "buyDisplay": "2800g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 90,
        "sourceKey": "ap"
      },
      {
        "type": "flatMagicPenetration",
        "label": "Flat magic penetration",
        "value": 15,
        "sourceKey": "mpenflat"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 6,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "6631",
    "slug": "stridebreaker",
    "name": "Stridebreaker",
    "cost": 3300,
    "buyDisplay": "3300g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 40,
        "sourceKey": "ad"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 25,
        "sourceKey": "as"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 450,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "6610",
    "slug": "sundered-sky",
    "name": "Sundered Sky",
    "cost": 3100,
    "buyDisplay": "3100g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 400,
        "sourceKey": "hp"
      },
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 45,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      }
    ]
  },
  {
    "id": "3068",
    "slug": "sunfire-aegis",
    "name": "Sunfire Aegis",
    "cost": 2700,
    "buyDisplay": "2700g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 50,
        "sourceKey": "armor"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 350,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3170",
    "slug": "swiftmarch",
    "name": "Swiftmarch",
    "cost": 1000,
    "buyDisplay": "=>Boots of Swiftness",
    "stats": [
      {
        "type": "flatMovementSpeed",
        "label": "Flat movement speed",
        "value": 65,
        "sourceKey": "msflat"
      }
    ]
  },
  {
    "id": "3070",
    "slug": "tear-of-the-goddess",
    "name": "Tear of the Goddess",
    "cost": 400,
    "buyDisplay": "400g",
    "stats": [
      {
        "type": "mana",
        "label": "Mana",
        "value": 240,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "3302",
    "slug": "terminus",
    "name": "Terminus",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 30,
        "sourceKey": "ad"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 35,
        "sourceKey": "as"
      }
    ]
  },
  {
    "id": "2020",
    "slug": "the-brutalizer",
    "name": "The Brutalizer",
    "cost": 1337,
    "buyDisplay": "1337g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 25,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 5,
        "sourceKey": "lethality"
      }
    ]
  },
  {
    "id": "6676",
    "slug": "the-collector",
    "name": "The Collector",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 50,
        "sourceKey": "ad"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 25,
        "sourceKey": "crit"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 10,
        "sourceKey": "lethality"
      }
    ]
  },
  {
    "id": "3075",
    "slug": "thornmail",
    "name": "Thornmail",
    "cost": 2450,
    "buyDisplay": "2450g",
    "stats": [
      {
        "type": "armor",
        "label": "Armor",
        "value": 75,
        "sourceKey": "armor"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 150,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3077",
    "slug": "tiamat",
    "name": "Tiamat",
    "cost": 1200,
    "buyDisplay": "1200g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 20,
        "sourceKey": "ad"
      }
    ]
  },
  {
    "id": "3748",
    "slug": "titanic-hydra",
    "name": "Titanic Hydra",
    "cost": 3300,
    "buyDisplay": "3300g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 40,
        "sourceKey": "ad"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 600,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3078",
    "slug": "trinity-force",
    "name": "Trinity Force",
    "cost": 3333,
    "buyDisplay": "3333g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 36,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 30,
        "sourceKey": "as"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 333,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "2021",
    "slug": "tunneler",
    "name": "Tunneler",
    "cost": 1150,
    "buyDisplay": "1150g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 15,
        "sourceKey": "ad"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 250,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3179",
    "slug": "umbral-glaive",
    "name": "Umbral Glaive",
    "cost": 2800,
    "buyDisplay": "2800g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 60,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 18,
        "sourceKey": "lethality"
      }
    ]
  },
  {
    "id": "2502",
    "slug": "unending-despair",
    "name": "Unending Despair",
    "cost": 2800,
    "buyDisplay": "2800g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 400,
        "sourceKey": "hp"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 50,
        "sourceKey": "armor"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      }
    ]
  },
  {
    "id": "1053",
    "slug": "vampiric-scepter",
    "name": "Vampiric Scepter",
    "cost": 900,
    "buyDisplay": "900g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 15,
        "sourceKey": "ad"
      },
      {
        "type": "lifeSteal",
        "label": "Life steal",
        "value": 7,
        "sourceKey": "lifesteal"
      }
    ]
  },
  {
    "id": "4632",
    "slug": "verdant-barrier",
    "name": "Verdant Barrier",
    "cost": 1600,
    "buyDisplay": "1600g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 40,
        "sourceKey": "ap"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 25,
        "sourceKey": "mr"
      }
    ]
  },
  {
    "id": "3135",
    "slug": "void-staff",
    "name": "Void Staff",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 95,
        "sourceKey": "ap"
      },
      {
        "type": "percentageMagicPenetration",
        "label": "Percentage magic penetration",
        "value": 40,
        "sourceKey": "mpen"
      }
    ]
  },
  {
    "id": "6699",
    "slug": "voltaic-cyclosword",
    "name": "Voltaic Cyclosword",
    "cost": 3000,
    "buyDisplay": "3000g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 55,
        "sourceKey": "ad"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 10,
        "sourceKey": "lethality"
      }
    ]
  },
  {
    "id": "3082",
    "slug": "wardens-mail",
    "name": "Warden's Mail",
    "cost": 1000,
    "buyDisplay": "1000g",
    "stats": [
      {
        "type": "armor",
        "label": "Armor",
        "value": 40,
        "sourceKey": "armor"
      }
    ]
  },
  {
    "id": "3083",
    "slug": "warmogs-armor",
    "name": "Warmog's Armor",
    "cost": 3100,
    "buyDisplay": "3100g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 1000,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 100,
        "sourceKey": "hp5"
      }
    ]
  },
  {
    "id": "2526",
    "slug": "whispering-circlet",
    "name": "Whispering Circlet",
    "cost": 2250,
    "buyDisplay": "2250g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "healAndShieldPower",
        "label": "Heal and shield power",
        "value": 8,
        "sourceKey": "hsp"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 300,
        "sourceKey": "mana"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 75,
        "sourceKey": "mp5"
      }
    ]
  },
  {
    "id": "3066",
    "slug": "winged-moonplate",
    "name": "Winged Moonplate",
    "cost": 800,
    "buyDisplay": "800g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "3119",
    "slug": "winters-approach",
    "name": "Winter's Approach",
    "cost": 2400,
    "buyDisplay": "2400g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 550,
        "sourceKey": "hp"
      },
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 15,
        "sourceKey": "ah"
      },
      {
        "type": "mana",
        "label": "Mana",
        "value": 500,
        "sourceKey": "mana"
      }
    ]
  },
  {
    "id": "3091",
    "slug": "wits-end",
    "name": "Wit's End",
    "cost": 2800,
    "buyDisplay": "2800g",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 50,
        "sourceKey": "as"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 45,
        "sourceKey": "mr"
      },
      {
        "type": "tenacity",
        "label": "Tenacity",
        "value": 20,
        "sourceKey": "tenacity"
      }
    ]
  },
  {
    "id": "3865",
    "slug": "world-atlas",
    "name": "World Atlas",
    "cost": 400,
    "buyDisplay": "400g",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 30,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 25,
        "sourceKey": "hp5"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 25,
        "sourceKey": "mp5"
      },
      {
        "type": "goldGeneration",
        "label": "Gold generation",
        "value": 3,
        "sourceKey": "gp10"
      }
    ]
  },
  {
    "id": "3142",
    "slug": "youmuus-ghostblade",
    "name": "Youmuu's Ghostblade",
    "cost": 2800,
    "buyDisplay": "2800g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 55,
        "sourceKey": "ad"
      },
      {
        "type": "lethality",
        "label": "Lethality",
        "value": 18,
        "sourceKey": "lethality"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "3032",
    "slug": "yun-tal-wildarrows",
    "name": "Yun Tal Wildarrows",
    "cost": 3100,
    "buyDisplay": "3100g",
    "stats": [
      {
        "type": "attackDamage",
        "label": "Attack damage",
        "value": 50,
        "sourceKey": "ad"
      },
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 40,
        "sourceKey": "as"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 0,
        "sourceKey": "crit"
      }
    ]
  },
  {
    "id": "3871",
    "slug": "zazzaks-realmspike",
    "name": "Zaz'Zak's Realmspike",
    "cost": 400,
    "buyDisplay": "=>Bounty of Worlds",
    "stats": [
      {
        "type": "health",
        "label": "Health",
        "value": 200,
        "sourceKey": "hp"
      },
      {
        "type": "baseHealthRegeneration",
        "label": "Base health regeneration",
        "value": 75,
        "sourceKey": "hp5"
      },
      {
        "type": "baseManaRegeneration",
        "label": "Base mana regeneration",
        "value": 75,
        "sourceKey": "mp5"
      },
      {
        "type": "goldGeneration",
        "label": "Gold generation",
        "value": 9,
        "sourceKey": "gp10"
      }
    ]
  },
  {
    "id": "3086",
    "slug": "zeal",
    "name": "Zeal",
    "cost": 1200,
    "buyDisplay": "1200g",
    "stats": [
      {
        "type": "attackSpeed",
        "label": "Attack speed",
        "value": 15,
        "sourceKey": "as"
      },
      {
        "type": "criticalStrikeChance",
        "label": "Critical strike chance",
        "value": 15,
        "sourceKey": "crit"
      },
      {
        "type": "percentageMovementSpeed",
        "label": "Percentage movement speed",
        "value": 4,
        "sourceKey": "ms"
      }
    ]
  },
  {
    "id": "3050",
    "slug": "zekes-convergence",
    "name": "Zeke's Convergence",
    "cost": 2200,
    "buyDisplay": "2200g",
    "stats": [
      {
        "type": "abilityHaste",
        "label": "Ability haste",
        "value": 10,
        "sourceKey": "ah"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 25,
        "sourceKey": "armor"
      },
      {
        "type": "magicResistance",
        "label": "Magic resistance",
        "value": 25,
        "sourceKey": "mr"
      },
      {
        "type": "health",
        "label": "Health",
        "value": 300,
        "sourceKey": "hp"
      }
    ]
  },
  {
    "id": "3157",
    "slug": "zhonyas-hourglass",
    "name": "Zhonya's Hourglass",
    "cost": 3250,
    "buyDisplay": "3250g",
    "stats": [
      {
        "type": "abilityPower",
        "label": "Ability power",
        "value": 105,
        "sourceKey": "ap"
      },
      {
        "type": "armor",
        "label": "Armor",
        "value": 50,
        "sourceKey": "armor"
      }
    ]
  }
];
