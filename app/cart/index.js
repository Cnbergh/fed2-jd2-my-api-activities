const mosCornerCart = [];

function addToCart(shopCart, item) {
  shopCart.push(item);
}

function displayItems(shopCart) {
  console.log("your Cart");
  console.log("-------------");
  shopCart.forEach((item) => {
    console.log(item.title);
  });
  console.log("===============");
}

addToCart(mosCornerCart, redBull);
addToCart(mosCornerCart, bread);
addToCart(mosCornerCart, cookies);

console.log(mosCornerCart);

displayItems(mosCornerCart);

//15.09.23
const recipe = {
  ingredient_0: "egg",
  ingredient_1: "milk",
  ingredient_2: "flour",
};

for (let index = 0; index <= 2; index++) {
  const ingredient = recipe["ingredient_" + index];
  console.log(ingredient);

  for (const item in recipe) {
    console.log("using for in >>>", `${item}: ${recipe[item]}`);
  }
  console.log(Object.keys(recipe));

  Object.keys(recipe).map((key) => {
    console.log("using map >>>", recipe[key]);
  });

  Object.entries(recipe).map(([key, value]) => {
    console.warn(`using entries >>> key: ${key}, value: ${value}`);
  });
}
