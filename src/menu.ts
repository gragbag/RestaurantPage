const coffeeImg = require("./img/coffee.jpg");
const smoothieImg = require("./img/smoothie.jpg");
const pancakeImg = require("./img/pancakes.jpg");
const breakfastImg = require("./img/breakfast-combo.jpg");


const images = [coffeeImg, smoothieImg, pancakeImg, breakfastImg];

function loadMenu() {
	const content = document.querySelector("#content") as HTMLDivElement;

	//Append title
	const menuTitle = document.createElement("h2");
	menuTitle.className = "title";
	menuTitle.innerText = "Menu";
	content.appendChild(menuTitle);

	//Append beverages section
	const beverages = document.createElement("div");
	beverages.classList.add("beverages", "menu-section");

	const beveragesTitle = document.createElement("h3");
	beveragesTitle.className = "section-title";
	beveragesTitle.innerText = "Beverages"
	beverages.appendChild(beveragesTitle);

	const coffee = addItem("Coffee", "Some hot coffee with a side of cream", "$3", 0);
	beverages.appendChild(coffee);

	const smoothie = addItem("Smoothie", "Blend of fruits and vegetables to make a delicious smoothie", "$5", 1);
	beverages.appendChild(smoothie);

	content.appendChild(beverages);

	//Append breakfast item section
	const breakfast = document.createElement("div");
	breakfast.classList.add("breakfast", "menu-section");

	const breakfastTitle = document.createElement("h3");
	breakfastTitle.className = "section-title";
	breakfastTitle.innerText = "Breakfast Items"
	breakfast.appendChild(breakfastTitle);

	const pancakes = addItem("Pancakes", "3 fresh, fluffy pancakes with a side of fruit and maple syrup", "$8", 2);
	breakfast.appendChild(pancakes);

	const breakfastCombo = addItem("Breakfast Combo", "Eggs(Cooked as asked), 2 sausage patties, side of hashbrowns, sourdough bread and avocado", "$12", 3);
	breakfast.appendChild(breakfastCombo);

	content.appendChild(breakfast);

}

function addItem(name: string, desc: string, price: string, imgSrc: number): HTMLDivElement {
	const foodSection = document.createElement("div");
	foodSection.className = "food-section";

	//Append foodName
	const foodName = document.createElement("h4");
	foodName.className = "food-name";
	foodName.innerText = name;
	foodSection.appendChild(foodName);

	//Append description
	const description = document.createElement("p");
	description.className = "food-desc";
	description.innerText = desc;
	foodSection.appendChild(description);

	//Append price
	const priceText = document.createElement("p");
	priceText.className = "price";
	priceText.innerText = price;
	foodSection.appendChild(priceText);

	//Append image
	const image = document.createElement("img");
	image.src = images[imgSrc];
	foodSection.append(image);

	return foodSection;
}

export {loadMenu}