"use strict";
let products = [
    { name: "Smartfon", category: "Elektronika", price: 3000, isAvailable: true, sales: 11 },
    { name: "Laptop", category: "Elektronika", price: 6000, isAvailable: false, sales: 15 },
    { name: "T-shirt", category: "Odzież", price: 50, isAvailable: true, sales: 13 },
    { name: "Bluza", category: "Odzież", price: 150, isAvailable: false, sales: 99 },
    { name: "Lodówka", category: "AGD", price: 2000, isAvailable: true, sales: 22 },
];
function getAvailableProducts(products) {
    let availableProducts = [];
    availableProducts = products.filter((product) => product).map((product) => product.name);
    return availableProducts;
}
console.log(getAvailableProducts(products));
//# sourceMappingURL=app.js.map