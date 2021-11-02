const NEW_PIZZABLOCK = "NEW_PIZZABLOCK";

let initialState = {
  pizzaBlocks: [
    {
      id: 1,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
      title: "Чизбургер-пицца",
      dough1: "тонкое",
      dough2: "традиционное",
      size26: "26 см.",
      size30: "30 см.",
      size40: "40 см.",
      price: "от 345 ₽",
      add: "Добавить",
      pieces: 2,
      categories: 2,
    },
    {
      id: 2,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1df00c72-f3fd-4d4e-8537-3ff74035c2dc.jpg",
      title: "Пепперони",
      dough1: "тонкое",
      dough2: "традиционное",
      size26: "26 см.",
      size30: "30 см.",
      size40: "40 см.",
      price: "от 345 ₽",
      add: "Добавить",
      pieces: 2,
      categories: 1,
    },
    {
      id: 3,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/20734006e66d427fb2cbb8fbb595b21e_292x292.jpeg",
      title: "Колбаски Барбекю",
      dough1: "тонкое",
      dough2: "традиционное",
      size26: "26 см.",
      size30: "30 см.",
      size40: "40 см.",
      price: "от 345 ₽",
      add: "Добавить",
      pieces: 2,
      categories: 3,
    },
    {
      id: 4,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/c1381ce7380541ac9a8ec2e31ac86234_292x292.jpeg",
      title: "Диабло",
      dough1: "тонкое",
      dough2: "традиционное",
      size26: "26 см.",
      size30: "30 см.",
      size40: "40 см.",
      price: "от 395 ₽",
      add: "Добавить",
      pieces: 2,
      categories: 4,
    },
    {
      id: 5,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_292x292.jpeg",
      title: "Ветчина и грибы",
      dough1: "тонкое",
      dough2: "традиционное",
      size26: "26 см.",
      size30: "30 см.",
      size40: "40 см.",
      price: "от 315 ₽",
      add: "Добавить",
      pieces: 2,
      categories: 1,
    },
    {
      id: 6,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/ebf8b8670d6b4f078d9afa616d01202a_292x292.jpeg",
      title: "Сырная",
      dough1: "тонкое",
      dough2: "традиционное",
      size26: "26 см.",
      size30: "30 см.",
      size40: "40 см.",
      price: "от 245 ₽",
      add: "Добавить",
      pieces: 2,
      categories: 2,
    },
    {
      id: 7,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/67040d5b9c3a42e2a0deb93cca61f1ac_292x292.jpeg",
      title: "Фристайло",
      dough1: "тонкое",
      dough2: "традиционное",
      size26: "26 см.",
      size30: "30 см.",
      size40: "40 см.",
      price: "от 345 ₽",
      add: "Добавить",
      pieces: 2,
      categories: 2,
    },
    {
      id: 8,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/dd54edf63865431495061a9b02811a11_292x292.jpeg",
      title: "Сырный цыпленок",
      dough1: "тонкое",
      dough2: "традиционное",
      size26: "26 см.",
      size30: "30 см.",
      size40: "40 см.",
      price: "от 395 ₽",
      add: "Добавить",
      pieces: 2,
      categories: 2,
    },
  ],
  currentPizzaBlock: [],
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_PIZZABLOCK:
      return {
        ...state,
        currentPizzaBlock: action.newBlock,
      };

    default:
      return state;
  }
};

export const newPizzaBlocks = (newBlock) => ({
  type: NEW_PIZZABLOCK,
  newBlock,
});

export default pizzaReducer;
