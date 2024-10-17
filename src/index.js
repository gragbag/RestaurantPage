"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles.css");
var home_1 = require("./home");
var homeButton = document.querySelector("#home");
var menuButton = document.querySelector("#menu");
var aboutButton = document.querySelector("#about");
var currentPage = homeButton;
homeButton.addEventListener("click", function (e) {
    if (currentPage == homeButton) {
        return;
    }
    (0, home_1.loadHome)();
    highlightButton(e);
    currentPage = homeButton;
});
menuButton.addEventListener("click", function (e) {
    if (currentPage == menuButton) {
        return;
    }
    highlightButton(e);
    currentPage = menuButton;
});
aboutButton.addEventListener("click", function (e) {
    if (currentPage == aboutButton) {
        return;
    }
    highlightButton(e);
    currentPage = aboutButton;
});
var highlightButton = function (e) {
    var highlighted = document.querySelector(".highlight");
    highlighted.classList.remove("highlight");
    var target = e.target;
    target.classList.add("highlight");
};
