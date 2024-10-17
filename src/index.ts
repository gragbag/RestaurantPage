import "./styles.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";

const homeButton = document.querySelector("#home") as HTMLButtonElement;
const menuButton = document.querySelector("#menu") as HTMLButtonElement;
const aboutButton = document.querySelector("#about") as HTMLButtonElement;

let currentPage: HTMLButtonElement = homeButton;
loadHome();

homeButton.addEventListener("click", (e) => {
	if (currentPage == homeButton) {
		return;
	}

	clearContent();
	loadHome();
	highlightButton(e);

	currentPage = homeButton;
})

menuButton.addEventListener("click", (e) => {
	if (currentPage == menuButton) {
		return;
	}

	clearContent();
	loadMenu();
	highlightButton(e);
	currentPage = menuButton;
})

aboutButton.addEventListener("click", (e) => {
	if (currentPage == aboutButton) {
		return;
	}

	clearContent();
	highlightButton(e);
	currentPage = aboutButton;
})

const highlightButton = (e: MouseEvent) => {
	const highlighted = document.querySelector(".highlight") as HTMLButtonElement;
	highlighted.classList.remove("highlight");
	const target = e.target as HTMLElement;
	target.classList.add("highlight");
}

const clearContent = () => {
	const content = document.querySelector("#content") as HTMLDivElement;
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
}