const vegetables = [
  {
    id: 1,
    name: "มะเขือเทศ",
    otherNames: ["Tomato"],
    category: ["ผักยอดนิยม"],
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
    category: ["ผักยอดนิยม"],
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
    category: ["ผักยอดนิยม"],
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
    category: ["ผักยอดนิยม"],
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
    category: ["ผักยอดนิยม"],
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
    category: ["ผักยอดนิยม"],
    image: "/images/products/thai-eggplant.png",
    prices: [
      { id: 1, value: 3.19, label: "กก." },
      { id: 2, value: 1.99, label: "ถุง" },
    ],
  },
  {
    id: 7,
    name: "ฟักข้าว",
    otherNames: ["Spiny Gourd"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/spiny_gourd.png",
    prices: [
      { id: 1, value: 5.49, label: "กก." },
      { id: 2, value: 3.99, label: "ถุง" },
    ],
  },
  {
    id: 8,
    name: "กะเพรา",
    otherNames: ["Holy Basil"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/holy_basil.png",
    prices: [
      { id: 1, value: 2.59, label: "กก." },
      { id: 2, value: 1.49, label: "ถุง" },
    ],
  },
  {
    id: 9,
    name: "ตำลึง",
    otherNames: ["Ivy Gourd"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/ivy_gourd.png",
    prices: [
      { id: 1, value: 2.99, label: "กก." },
      { id: 2, value: 1.69, label: "ถุง" },
    ],
  },
  {
    id: 10,
    name: "สะตอ",
    otherNames: ["Bitter Bean"],
    category: ["ผักยอดนิยม"],
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
    category: ["ผักยอดนิยม"],
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
    category: ["ผักยอดนิยม"],
    image: "/images/products/water_spinach.png",
    prices: [
      { id: 1, value: 2.29, label: "กก." },
      { id: 2, value: 1.29, label: "ถุง" },
    ],
  },
  {
    id: 13,
    name: "บีทรูท",
    otherNames: ["Beetroot"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/beetroot.png",
    prices: [
      { id: 1, value: 5.19, label: "กก." },
      { id: 2, value: 2.99, label: "ถุง" },
    ],
  },
  {
    id: 14,
    name: "มะระขี้นก",
    otherNames: ["Bitter Melon"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/bitter_melon.png",
    prices: [
      { id: 1, value: 4.39, label: "กก." },
      { id: 2, value: 2.29, label: "ถุง" },
    ],
  },
  {
    id: 15,
    name: "โหระพา",
    otherNames: ["Thai Basil"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/thai_basil.png",
    prices: [
      { id: 1, value: 2.19, label: "กก." },
      { id: 2, value: 1.19, label: "ถุง" },
    ],
  },
  {
    id: 16,
    name: "ฟักเขียว",
    otherNames: ["Winter Melon"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/winter_melon.png",
    prices: [
      { id: 1, value: 3.59, label: "กก." },
      { id: 2, value: 1.99, label: "ถุง" },
    ],
  },
  {
    id: 17,
    name: "กวางตุ้ง",
    otherNames: ["Choy Sum"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/choy_sum.png",
    prices: [
      { id: 1, value: 2.79, label: "กก." },
      { id: 2, value: 1.79, label: "ถุง" },
    ],
  },
  {
    id: 18,
    name: "ปวยเล้ง",
    otherNames: ["Spinach"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/spinach.png",
    prices: [
      { id: 1, value: 4.19, label: "กก." },
      { id: 2, value: 2.29, label: "ถุง" },
    ],
  },
  {
    id: 19,
    name: "บวบเหลี่ยม",
    otherNames: ["Luffa"],
    category: ["ผักยอดนิยม"],
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
    category: ["ผักยอดนิยม"],
    image: "/images/products/broccoli.png",
    prices: [
      { id: 1, value: 6.19, label: "กก." },
      { id: 2, value: 3.59, label: "ถุง" },
    ],
  },
  {
    id: 21,
    name: "ดอกแค",
    otherNames: ["Sesbania"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/sesbania.png",
    prices: [
      { id: 1, value: 4.29, label: "กก." },
      { id: 2, value: 2.29, label: "ถุง" },
    ],
  },
  {
    id: 22,
    name: "มะกรูด",
    otherNames: ["Kaffir Lime"],
    category: ["ผักยอดนิยม"],
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
    category: ["ผักยอดนิยม"],
    image: "/images/products/gotu_kola.png",
    prices: [
      { id: 1, value: 3.19, label: "กก." },
      { id: 2, value: 1.99, label: "ถุง" },
    ],
  },
  {
    id: 24,
    name: "ขิง",
    otherNames: ["Ginger"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/ginger.png",
    prices: [
      { id: 1, value: 4.99, label: "กก." },
      { id: 2, value: 2.99, label: "ถุง" },
    ],
  },
  {
    id: 25,
    name: "ขมิ้น",
    otherNames: ["Turmeric"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/turmeric.png",
    prices: [
      { id: 1, value: 3.89, label: "กก." },
      { id: 2, value: 1.89, label: "ถุง" },
    ],
  },
  {
    id: 26,
    name: "กระเทียม",
    otherNames: ["Garlic"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/garlic.png",
    prices: [
      { id: 1, value: 5.29, label: "กก." },
      { id: 2, value: 2.99, label: "ถุง" },
    ],
  },
  {
    id: 27,
    name: "หอมแดง",
    otherNames: ["Shallot"],
    category: ["ผักยอดนิยม"],
    image: "/images/products/shallot.png",
    prices: [
      { id: 1, value: 4.49, label: "กก." },
      { id: 2, value: 2.39, label: "ถุง" },
    ],
  },
  {
    id: 28,
    name: "ต้นหอม",
    otherNames: ["Green Onion"],
    category: ["ผักยอดนิยม"],
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
    category: ["ผักยอดนิยม"],
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
    category: ["ผักยอดนิยม"],
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
