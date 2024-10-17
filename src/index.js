"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles.css");
var home_1 = require("./home");
var menu_1 = require("./menu");
var homeButton = document.querySelector("#home");
var menuButton = document.querySelector("#menu");
var aboutButton = document.querySelector("#about");
var currentPage = homeButton;
(0, home_1.loadHome)();
homeButton.addEventListener("click", function (e) {
    if (currentPage == homeButton) {
        return;
    }
    clearContent();
    (0, home_1.loadHome)();
    highlightButton(e);
    currentPage = homeButton;
});
menuButton.addEventListener("click", function (e) {
    if (currentPage == menuButton) {
        return;
    }
    clearContent();
    (0, menu_1.loadMenu)();
    highlightButton(e);
    currentPage = menuButton;
});
aboutButton.addEventListener("click", function (e) {
    if (currentPage == aboutButton) {
        return;
    }
    clearContent();
    highlightButton(e);
    currentPage = aboutButton;
});
var highlightButton = function (e) {
    var highlighted = document.querySelector(".highlight");
    highlighted.classList.remove("highlight");
    var target = e.target;
    target.classList.add("highlight");
};
var clearContent = function () {
    var content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
};
