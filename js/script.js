const products = [
  {
    id: 0,
    name: "product1",
    category: "clothing",
    price: "20",
    class: "clothing",
  },
  {
    id: 1,
    name: "product2",
    category: "clothing",
    price: "20",
    class: "clothing",
  },
  {
    id: 2,
    name: "product3",
    category: "electronics",
    price: "25",
    class: "electronics",
  },
  {
    id: 3,
    name: "product4",
    category: "electronics",
    price: "25",
    class: "electronics",
  },
  {
    id: 4,
    name: "product5",
    category: "healthy and beauty",
    price: "15",
    class: "healthy",
  },
  {
    id: 5,
    name: "product6",
    category: "healthy and beauty",
    price: "15",
    class: "healthy",
  },
  {
    id: 6,
    name: "product7",
    category: "foods",
    price: "12",
    class: "foods",
  },
  {
    id: 7,
    name: "product8",
    category: "foods",
    price: "12",
    class: "foods",
  },
  {
    id: 8,
    name: "product9",
    category: "furniture",
    price: "200",
    class: "furniture",
  },
  {
    id: 9,
    name: "product10",
    category: "furniture",
    price: "200",
    class: "furniture",
  },
  {
    id: 10,
    name: "product11",
    category: "travel",
    price: "50",
    class: "travel",
  },
  {
    id: 11,
    name: "product12",
    category: "travel",
    price: "50",
    class: "travel",
  },

  {
    id: 12,
    name: "product13",
    category: "dining",
    price: "26",
    class: "dining",
  },
  {
    id: 13,
    name: "product14",
    category: "dining",
    price: "26",
    class: "dining",
  },
  {
    id: 14,
    name: "product15",
    category: "body fit cushion",
    price: "80",
    class: "fit",
  },
  {
    id: 15,
    name: "product16",
    category: "body fit cushion",
    price: "80",
    class: "fit",
  },
  {
    id: 16,
    name: "product17",
    category: "bathroom",
    price: "40",
    class: "bathroom",
  },
  {
    id: 17,
    name: "product18",
    category: "bathroom",
    price: "40",
    class: "bathroom",
  },
  {
    id: 18,
    name: "product19",
    category: "bedding",
    price: "33",
    class: "bedding",
  },
  {
    id: 19,
    name: "product20",
    category: "bedding",
    price: "33",
    class: "bedding",
  },
  {
    id: 20,
    name: "product21",
    category: "housekeeping",
    price: "60",
    class: "housekeeping",
  },
  {
    id: 21,
    name: "product22",
    category: "housekeeping",
    price: "60",
    class: "housekeeping",
  },
];

const renderProducts = (products) => {
  const source = $("#products-template").html();
  const template = Handlebars.compile(source);
  const productsHTMLElement = template({ products });
  const productsContainer = $("#products-content");
  productsContainer.append(productsHTMLElement);
};

const filterByCategory = (category) => {
  document.getElementById("products-content").innerHTML = "";
  if (category === "all") {
    renderProducts(products);
  } else {
    const filteredProducts = products.filter((p) => p.category === category);
    renderProducts(filteredProducts);
  }
};

renderProducts(products);
