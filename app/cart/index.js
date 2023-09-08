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
