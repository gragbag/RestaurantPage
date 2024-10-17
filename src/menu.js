"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMenu = loadMenu;
var coffeeImg = require("./img/coffee.jpg");
var smoothieImg = require("./img/smoothie.jpg");
var pancakeImg = require("./img/pancakes.jpg");
var breakfastImg = require("./img/breakfast-combo.jpg");
var images = [coffeeImg, smoothieImg, pancakeImg, breakfastImg];
function loadMenu() {
    var content = document.querySelector("#content");
    //Append title
    var menuTitle = document.createElement("h2");
    menuTitle.className = "title";
    menuTitle.innerText = "Menu";
    content.appendChild(menuTitle);
    //Append beverages section
    var beverages = document.createElement("div");
    beverages.classList.add("beverages", "menu-section");
    var beveragesTitle = document.createElement("h3");
    beveragesTitle.className = "section-title";
    beveragesTitle.innerText = "Beverages";
    beverages.appendChild(beveragesTitle);
    var coffee = addItem("Coffee", "Some hot coffee with a side of cream", "$3", 0);
    beverages.appendChild(coffee);
    var smoothie = addItem("Smoothie", "Blend of fruits and vegetables to make a delicious smoothie", "$5", 1);
    beverages.appendChild(smoothie);
    content.appendChild(beverages);
    //Append breakfast item section
    var breakfast = document.createElement("div");
    breakfast.classList.add("breakfast", "menu-section");
    var breakfastTitle = document.createElement("h3");
    breakfastTitle.className = "section-title";
    breakfastTitle.innerText = "Breakfast Items";
    breakfast.appendChild(breakfastTitle);
    var pancakes = addItem("Pancakes", "3 fresh, fluffy pancakes with a side of fruit and maple syrup", "$8", 2);
    breakfast.appendChild(pancakes);
    var breakfastCombo = addItem("Breakfast Combo", "Eggs(Cooked as asked), 2 sausage patties, side of hashbrowns, sourdough bread and avocado", "$12", 3);
    breakfast.appendChild(breakfastCombo);
    content.appendChild(breakfast);
}
function addItem(name, desc, price, imgSrc) {
    var foodSection = document.createElement("div");
    foodSection.className = "food-section";
    //Append foodName
    var foodName = document.createElement("h4");
    foodName.className = "food-name";
    foodName.innerText = name;
    foodSection.appendChild(foodName);
    //Append description
    var description = document.createElement("p");
    description.className = "food-desc";
    description.innerText = desc;
    foodSection.appendChild(description);
    //Append price
    var priceText = document.createElement("p");
    priceText.className = "price";
    priceText.innerText = price;
    foodSection.appendChild(priceText);
    //Append image
    var image = document.createElement("img");
    image.src = images[imgSrc];
    foodSection.append(image);
    return foodSection;
}
