import "./styles.css";
import { loadHome } from "./home";

const homeButton = document.querySelector("#home") as HTMLButtonElement;
const menuButton = document.querySelector("#menu") as HTMLButtonElement;
const aboutButton = document.querySelector("#about") as HTMLButtonElement;

let currentPage: HTMLButtonElement = homeButton;

homeButton.addEventListener("click", (e) => {
	if (currentPage == homeButton) {
		return;
	}

	loadHome();
	highlightButton(e);

	currentPage = homeButton;
})

menuButton.addEventListener("click", (e) => {
	if (currentPage == menuButton) {
		return;
	}

	highlightButton(e);

	currentPage = menuButton;
})

aboutButton.addEventListener("click", (e) => {
	if (currentPage == aboutButton) {
		return;
	}

	highlightButton(e);
	currentPage = aboutButton;
})

const highlightButton = (e: MouseEvent) => {
	const highlighted = document.querySelector(".highlight") as HTMLButtonElement;
	highlighted.classList.remove("highlight");
	const target = e.target as HTMLElement;
	target.classList.add("highlight");
}