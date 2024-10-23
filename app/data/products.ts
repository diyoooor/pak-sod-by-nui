const vegetables = [
  {
    id: 1,
    name: "มะเขือเทศ",
    otherNames: ["Tomato"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม", "ร้านส้มตำ"],
    image: "/images/products/tomato.png",
    prices: [
      { id: 1, value: 35, label: "กก." },
      { id: 2, value: 150, label: "ถุง" },
      { id: 3, value: 330, label: "กล่อง" },
    ],
  },
  {
    id: 2,
    name: "ตะไคร้",
    otherNames: ["Lemongrass"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม", "อาหารตามสั่ง"],
    image: "/images/products/lemongrass.png",
    prices: [
      { id: 1, value: 20, label: "กก." },
      { id: 2, value: 1.99, label: "ถุง" },
    ],
  },
  {
    id: 3,
    name: "กระเจี๊ยบเขียว",
    otherNames: ["Okra"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม", "ร้านส้มตำ"],
    image: "/images/products/okra.png",
    prices: [
      { id: 1, value: 40, label: "กก." },
      { id: 2, value: 3.49, label: "ถุง" },
    ],
  },
  {
    id: 4,
    name: "แครอท",
    otherNames: ["Carrot"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/carrot.png",
    prices: [
      { id: 1, value: 35, label: "กก." },
      { id: 2, value: 2.29, label: "ถุง" },
    ],
  },
  {
    id: 5,
    name: "ฟักทอง",
    otherNames: ["Pumpkin"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม", "อาหารตามสั่ง"],
    image: "/images/products/pumpkin.png",
    prices: [
      { id: 1, value: 4.29, label: "กก." },
      { id: 2, value: 2.99, label: "ถุง" },
    ],
  },
  {
    id: 6,
    name: "มะเขือเปราะ",
    otherNames: ["Thai Eggplant"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม", "ร้านส้มตำ"],
    image: "/images/products/thai-eggplant.png",
    prices: [
      { id: 1, value: 3.19, label: "กก." },
      { id: 2, value: 1.99, label: "ถุง" },
    ],
  },

  {
    id: 10,
    name: "สะตอ",
    otherNames: ["Bitter Bean"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/bitter_bean.png",
    prices: [
      { id: 1, value: 6.99, label: "กก." },
      { id: 2, value: 4.49, label: "ถุง" },
    ],
  },
  {
    id: 11,
    name: "แตงกวา",
    otherNames: ["Cucumber"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม", "ร้านส้มตำ"],
    image: "/images/products/cucumber.png",
    prices: [
      { id: 1, value: 1.99, label: "กก." },
      { id: 2, value: 1.09, label: "ถุง" },
    ],
  },
  {
    id: 12,
    name: "ผักบุ้ง",
    otherNames: ["Water Spinach"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/water_spinach.png",
    prices: [
      { id: 1, value: 2.29, label: "กก." },
      { id: 2, value: 1.29, label: "ถุง" },
    ],
  },

  {
    id: 15,
    name: "โหระพา",
    otherNames: ["Thai Basil"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/thai_basil.png",
    prices: [
      { id: 1, value: 2.19, label: "กก." },
      { id: 2, value: 1.19, label: "ถุง" },
    ],
  },

  {
    id: 17,
    name: "กวางตุ้ง",
    otherNames: ["Choy Sum"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/choy_sum.png",
    prices: [
      { id: 1, value: 2.79, label: "กก." },
      { id: 2, value: 1.79, label: "ถุง" },
    ],
  },

  {
    id: 19,
    name: "บวบเหลี่ยม",
    otherNames: ["Luffa"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/luffa.png",
    prices: [
      { id: 1, value: 3.99, label: "กก." },
      { id: 2, value: 1.99, label: "ถุง" },
    ],
  },
  {
    id: 20,
    name: "บร็อคโคลี่",
    otherNames: ["Broccoli"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/broccoli.png",
    prices: [
      { id: 1, value: 6.19, label: "กก." },
      { id: 2, value: 3.59, label: "ถุง" },
    ],
  },

  {
    id: 22,
    name: "มะกรูด",
    otherNames: ["Kaffir Lime"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/kaffir_lime.png",
    prices: [
      { id: 1, value: 3.49, label: "กก." },
      { id: 2, value: 1.89, label: "ถุง" },
    ],
  },
  {
    id: 23,
    name: "บัวบก",
    otherNames: ["Gotu Kola"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/gotu_kola.png",
    prices: [
      { id: 1, value: 3.19, label: "กก." },
      { id: 2, value: 1.99, label: "ถุง" },
    ],
  },
  {
    id: 28,
    name: "ต้นหอม",
    otherNames: ["Green Onion"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/green_onion.png",
    prices: [
      { id: 1, value: 2.99, label: "กก." },
      { id: 2, value: 1.69, label: "ถุง" },
    ],
  },
  {
    id: 29,
    name: "ถั่วฝักยาว",
    otherNames: ["Long Bean"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/long_bean.png",
    prices: [
      { id: 1, value: 3.29, label: "กก." },
      { id: 2, value: 1.79, label: "ถุง" },
    ],
  },
  {
    id: 30,
    name: "ฟักทอง",
    otherNames: ["Pumpkin"],
    type: "ผักสด",
    category: ["ผักสด", "ยอดนิยม"],
    image: "/images/products/pumpkin.png",
    prices: [
      { id: 1, value: 4.19, label: "กก." },
      { id: 2, value: 2.39, label: "ถุง" },
    ],
  },
];

export const highlightProducts = () => {
  return vegetables.filter((product) => product.id < 5);
};

export const normalProducts = () => {
  return vegetables;
};

export const getPaginatedVegetables = (page: number, limit: number) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return vegetables.slice(start, end);
};
