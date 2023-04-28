function filterProduct(products){
    return function(category){
        return products.filter(ele=>ele.category === category);
    }
}

const products = [
    {name:"Shirt",category:"Clothing"},
    {name:"Pants",category:"Clothing"},
    {name:"Hat",category:"Accessories"},
    {name:"Sunglasses",category:"Accessories"},
];

const clothingProduct = filterProduct(products)("Clothing");//filterProduct(products)->invokes return function , ("Clothing")->is agrument of invoked function
const wearableProduct = filterProduct(products)("Accessories");

console.log(clothingProduct);
console.log(wearableProduct);