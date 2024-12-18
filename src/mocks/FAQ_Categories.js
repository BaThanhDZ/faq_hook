const FAQ_CATEGORIES = [
  {
    id: 1,
    name: "SHIPPING",
  },
  {
    id: 2,
    name: "PAYMENT",
  },
  {
    id: 3,
    name: "ORDER & RETURNS",
  },
];

const FAQ_CATEGORIES_OBJ = {};

// FAQ_CATEGORIES_OBJ.abc = 1;
// FAQ_CATEGORIES_OBJ['xyz'] = 2;
// let newProp = 'xxx';
// FAQ_CATEGORIES_OBJ[newProp] = 3;
// console.log(FAQ_CATEGORIES_OBJ);

for (let i = 0; i < FAQ_CATEGORIES.length; i++) {
  FAQ_CATEGORIES_OBJ[FAQ_CATEGORIES[i].id] = { ...FAQ_CATEGORIES[i] };
}

export { FAQ_CATEGORIES, FAQ_CATEGORIES_OBJ };
// const categoryId = 3;
// const category = FAQ_CATEGORIES.find(el => el.id === categoryId);

// let FAQ_CATEGORIES_OBJ = {
//   1: {
//     id: 1,
//     name: "SHIPPING",
//   },
//   2: {
//     id: 2,
//     name: "PAYMENT",
//   },
//   3: {
//     id: 3,
//     name: "ORDER & RETURNS",
//   },
// };

// const categoryNew = FAQ_CATEGORIES_OBJ[categoryId];
