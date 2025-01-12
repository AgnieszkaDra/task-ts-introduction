"use strict";
let products = [
    { name: "Smartfon", category: "Elektronika", price: 3000, isAvailable: true, sales: 11 },
    { name: "Laptop", category: "Elektronika", price: 6000, isAvailable: false, sales: 15 },
    { name: "T-shirt", category: "Odzież", price: 50, isAvailable: true, sales: 13 },
    { name: "Bluza", category: "Odzież", price: 150, isAvailable: false, sales: 99 },
    { name: "Lodówka", category: "AGD", price: 2000, isAvailable: true, sales: 22 },
];
function getAvailableProducts(array) {
    let availableProducts = [];
    availableProducts = array.filter((product) => product).map((product) => product.name);
    return availableProducts;
}
function getProductsByCategory(array, { category }) {
    const filteredArray = array.filter((element) => element.category === category);
    return filteredArray;
}
function getAveragePriceByCategory(array, category) {
    const categoryProducts = getProductsByCategory(array, { category: category });
    return categoryProducts.length
        ? categoryProducts.reduce((sum, { price }) => sum + price, 0) / categoryProducts.length
        : 0;
}
function sortProducts(array, key, bool = true) {
    if (key === "isAvailable") {
        return array.filter((product) => product.isAvailable === bool);
    }
    return [...array].sort((a, b) => {
        if (key === "name") {
            return bool ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
        else if (key === "price") {
            return bool ? a.price - b.price : b.price - a.price;
        }
        return 0;
    });
}
console.log(getAvailableProducts(products));
console.log(getProductsByCategory(products, { category: 'Elektronika' }));
console.log(getAveragePriceByCategory(products, "Elektronika"));
console.log("Sorted by name ascending:", sortProducts(products, "name", true));
console.log("Sorted by isAvailable product", sortProducts(products, "isAvailable", false));
//# sourceMappingURL=app.js.map