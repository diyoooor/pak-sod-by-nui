const vegetables = [
  {
    id: 1,
    name: "มะเขือเทศ",
    otherNames: ["Tomato"],
    category: ["ผักยอดนิยม"],
    image: "/images/tomato.jpg",
    prices: [
      { id: 1, value: 3.99, label: "1kg" },
      { id: 2, value: 2.49, label: "500g" },
      { id: 3, value: 1.49, label: "250g" },
    ],
  },
  {
    id: 2,
    name: "ตะไคร้",
    otherNames: ["Lemongrass"],
    category: ["ผักยอดนิยม"],
    image: "/images/lemongrass.jpg",
    prices: [
      { id: 1, value: 2.99, label: "1kg" },
      { id: 2, value: 1.99, label: "500g" },
    ],
  },
  {
    id: 3,
    name: "กระเจี๊ยบเขียว",
    otherNames: ["Okra"],
    category: ["ผักยอดนิยม"],
    image: "/images/okra.jpg",
    prices: [
      { id: 1, value: 4.99, label: "1kg" },
      { id: 2, value: 3.49, label: "500g" },
    ],
  },
  {
    id: 4,
    name: "แครอท",
    otherNames: ["Carrot"],
    category: ["ผักยอดนิยม"],
    image: "/images/carrot.jpg",
    prices: [
      { id: 1, value: 3.79, label: "1kg" },
      { id: 2, value: 2.29, label: "500g" },
    ],
  },
  {
    id: 5,
    name: "ฟักทอง",
    otherNames: ["Pumpkin"],
    category: ["ผักยอดนิยม"],
    image: "/images/pumpkin.jpg",
    prices: [
      { id: 1, value: 4.29, label: "1kg" },
      { id: 2, value: 2.99, label: "500g" },
    ],
  },
  {
    id: 6,
    name: "มะเขือเปราะ",
    otherNames: ["Thai Eggplant"],
    category: ["ผักยอดนิยม"],
    image: "/images/eggplant.jpg",
    prices: [
      { id: 1, value: 3.19, label: "1kg" },
      { id: 2, value: 1.99, label: "500g" },
    ],
  },
  {
    id: 7,
    name: "ฟักข้าว",
    otherNames: ["Spiny Gourd"],
    category: ["ผักยอดนิยม"],
    image: "/images/spiny_gourd.jpg",
    prices: [
      { id: 1, value: 5.49, label: "1kg" },
      { id: 2, value: 3.99, label: "500g" },
    ],
  },
  {
    id: 8,
    name: "กะเพรา",
    otherNames: ["Holy Basil"],
    category: ["ผักยอดนิยม"],
    image: "/images/holy_basil.jpg",
    prices: [
      { id: 1, value: 2.59, label: "1kg" },
      { id: 2, value: 1.49, label: "500g" },
    ],
  },
  {
    id: 9,
    name: "ตำลึง",
    otherNames: ["Ivy Gourd"],
    category: ["ผักยอดนิยม"],
    image: "/images/ivy_gourd.jpg",
    prices: [
      { id: 1, value: 2.99, label: "1kg" },
      { id: 2, value: 1.69, label: "500g" },
    ],
  },
  {
    id: 10,
    name: "สะตอ",
    otherNames: ["Bitter Bean"],
    category: ["ผักยอดนิยม"],
    image: "/images/bitter_bean.jpg",
    prices: [
      { id: 1, value: 6.99, label: "1kg" },
      { id: 2, value: 4.49, label: "500g" },
    ],
  },
  {
    id: 11,
    name: "แตงกวา",
    otherNames: ["Cucumber"],
    category: ["ผักยอดนิยม"],
    image: "/images/cucumber.jpg",
    prices: [
      { id: 1, value: 1.99, label: "1kg" },
      { id: 2, value: 1.09, label: "500g" },
    ],
  },
  {
    id: 12,
    name: "ผักบุ้ง",
    otherNames: ["Water Spinach"],
    category: ["ผักยอดนิยม"],
    image: "/images/water_spinach.jpg",
    prices: [
      { id: 1, value: 2.29, label: "1kg" },
      { id: 2, value: 1.29, label: "500g" },
    ],
  },
  {
    id: 13,
    name: "บีทรูท",
    otherNames: ["Beetroot"],
    category: ["ผักยอดนิยม"],
    image: "/images/beetroot.jpg",
    prices: [
      { id: 1, value: 5.19, label: "1kg" },
      { id: 2, value: 2.99, label: "500g" },
    ],
  },
  {
    id: 14,
    name: "มะระขี้นก",
    otherNames: ["Bitter Melon"],
    category: ["ผักยอดนิยม"],
    image: "/images/bitter_melon.jpg",
    prices: [
      { id: 1, value: 4.39, label: "1kg" },
      { id: 2, value: 2.29, label: "500g" },
    ],
  },
  {
    id: 15,
    name: "โหระพา",
    otherNames: ["Thai Basil"],
    category: ["ผักยอดนิยม"],
    image: "/images/thai_basil.jpg",
    prices: [
      { id: 1, value: 2.19, label: "1kg" },
      { id: 2, value: 1.19, label: "500g" },
    ],
  },
  {
    id: 16,
    name: "ฟักเขียว",
    otherNames: ["Winter Melon"],
    category: ["ผักยอดนิยม"],
    image: "/images/winter_melon.jpg",
    prices: [
      { id: 1, value: 3.59, label: "1kg" },
      { id: 2, value: 1.99, label: "500g" },
    ],
  },
  {
    id: 17,
    name: "กวางตุ้ง",
    otherNames: ["Choy Sum"],
    category: ["ผักยอดนิยม"],
    image: "/images/choy_sum.jpg",
    prices: [
      { id: 1, value: 2.79, label: "1kg" },
      { id: 2, value: 1.79, label: "500g" },
    ],
  },
  {
    id: 18,
    name: "ปวยเล้ง",
    otherNames: ["Spinach"],
    category: ["ผักยอดนิยม"],
    image: "/images/spinach.jpg",
    prices: [
      { id: 1, value: 4.19, label: "1kg" },
      { id: 2, value: 2.29, label: "500g" },
    ],
  },
  {
    id: 19,
    name: "บวบเหลี่ยม",
    otherNames: ["Luffa"],
    category: ["ผักยอดนิยม"],
    image: "/images/luffa.jpg",
    prices: [
      { id: 1, value: 3.99, label: "1kg" },
      { id: 2, value: 1.99, label: "500g" },
    ],
  },
  {
    id: 20,
    name: "บร็อคโคลี่",
    otherNames: ["Broccoli"],
    category: ["ผักยอดนิยม"],
    image: "/images/broccoli.jpg",
    prices: [
      { id: 1, value: 6.19, label: "1kg" },
      { id: 2, value: 3.59, label: "500g" },
    ],
  },
  {
    id: 21,
    name: "ดอกแค",
    otherNames: ["Sesbania"],
    category: ["ผักยอดนิยม"],
    image: "/images/sesbania.jpg",
    prices: [
      { id: 1, value: 4.29, label: "1kg" },
      { id: 2, value: 2.29, label: "500g" },
    ],
  },
  {
    id: 22,
    name: "มะกรูด",
    otherNames: ["Kaffir Lime"],
    category: ["ผักยอดนิยม"],
    image: "/images/kaffir_lime.jpg",
    prices: [
      { id: 1, value: 3.49, label: "1kg" },
      { id: 2, value: 1.89, label: "500g" },
    ],
  },
  {
    id: 23,
    name: "บัวบก",
    otherNames: ["Gotu Kola"],
    category: ["ผักยอดนิยม"],
    image: "/images/gotu_kola.jpg",
    prices: [
      { id: 1, value: 3.19, label: "1kg" },
      { id: 2, value: 1.99, label: "500g" },
    ],
  },
  {
    id: 24,
    name: "ขิง",
    otherNames: ["Ginger"],
    category: ["ผักยอดนิยม"],
    image: "/images/ginger.jpg",
    prices: [
      { id: 1, value: 4.99, label: "1kg" },
      { id: 2, value: 2.99, label: "500g" },
    ],
  },
  {
    id: 25,
    name: "ขมิ้น",
    otherNames: ["Turmeric"],
    category: ["ผักยอดนิยม"],
    image: "/images/turmeric.jpg",
    prices: [
      { id: 1, value: 3.89, label: "1kg" },
      { id: 2, value: 1.89, label: "500g" },
    ],
  },
  {
    id: 26,
    name: "กระเทียม",
    otherNames: ["Garlic"],
    category: ["ผักยอดนิยม"],
    image: "/images/garlic.jpg",
    prices: [
      { id: 1, value: 5.29, label: "1kg" },
      { id: 2, value: 2.99, label: "500g" },
    ],
  },
  {
    id: 27,
    name: "หอมแดง",
    otherNames: ["Shallot"],
    category: ["ผักยอดนิยม"],
    image: "/images/shallot.jpg",
    prices: [
      { id: 1, value: 4.49, label: "1kg" },
      { id: 2, value: 2.39, label: "500g" },
    ],
  },
  {
    id: 28,
    name: "ต้นหอม",
    otherNames: ["Green Onion"],
    category: ["ผักยอดนิยม"],
    image: "/images/green_onion.jpg",
    prices: [
      { id: 1, value: 2.99, label: "1kg" },
      { id: 2, value: 1.69, label: "500g" },
    ],
  },
  {
    id: 29,
    name: "ถั่วฝักยาว",
    otherNames: ["Long Bean"],
    category: ["ผักยอดนิยม"],
    image: "/images/long_bean.jpg",
    prices: [
      { id: 1, value: 3.29, label: "1kg" },
      { id: 2, value: 1.79, label: "500g" },
    ],
  },
  {
    id: 30,
    name: "ฟักทอง",
    otherNames: ["Pumpkin"],
    category: ["ผักยอดนิยม"],
    image: "/images/pumpkin.jpg",
    prices: [
      { id: 1, value: 4.19, label: "1kg" },
      { id: 2, value: 2.39, label: "500g" },
    ],
  },
];

export const getPaginatedVegetables = (page: number, limit: number) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  return vegetables.slice(start, end);
};
