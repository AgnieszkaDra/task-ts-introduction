"use strict";
let products = [
    { name: "Smartfon", category: "Elektronika", price: 3000, isAvailable: true, sales: 11 },
    { name: "Laptop", category: "Elektronika", price: 6000, isAvailable: false, sales: 15 },
    { name: "T-shirt", category: "Odzież", price: 50, isAvailable: true, sales: 13 },
    { name: "Bluza", category: "Odzież", price: 150, isAvailable: false, sales: 99 },
    { name: "Lodówka", category: "AGD", price: 2000, isAvailable: true, sales: 22 },
];
function getAvailableProducts(array) {
    return array.filter((product) => product.isAvailable);
}
function getProductsByCategory(array, categoryName) {
    const filteredArray = array.filter((element) => element.category === categoryName);
    return filteredArray;
}
function getAveragePriceByCategory(array, categoryName) {
    const categoryProducts = getProductsByCategory(array, categoryName);
    return categoryProducts.length
        ? categoryProducts.reduce((sum, { price }) => sum + price, 0) / categoryProducts.length
        : 0;
}
function sortProducts(array, key, sort) {
    return [...array].sort((a, b) => {
        if (key === "name") {
            return sort === "ASC" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
        else if (key === "price") {
            return sort === "ASC" ? a.price - b.price : b.price - a.price;
        }
        else if (key === "popularity") {
            return sort === "ASC" ? a.sales - b.sales : b.sales - a.sales;
        }
        return 0;
    });
}
console.log(getAvailableProducts(products));
console.log(getProductsByCategory(products, 'Elektronika'));
console.log(getAveragePriceByCategory(products, "Elektronika"));
console.log(sortProducts(products, "name", "ASC"));
console.log(sortProducts(products, "name", "DESC"));
console.log(sortProducts(products, "popularity", "ASC"));
//# sourceMappingURL=app.js.map