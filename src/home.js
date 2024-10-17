"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadHome = loadHome;
function loadHome() {
    var content = document.querySelector("#content");
    //Append title
    var title = document.createElement("h2");
    title.className = "title";
    title.textContent = "Bob's Breakfast";
    content.appendChild(title);
    //Append quote
    var quote = document.createElement("div");
    quote.classList.add("section", "quote");
    var quoteText = document.createElement("p");
    quoteText.innerText = "Bob's cooks up some of the best breakfast that I have ever had. It is a must visit for anyone in the area!";
    var author = document.createElement("h3");
    author.className = "author";
    author.textContent = "-Bobby";
    quote.appendChild(quoteText);
    quote.appendChild(author);
    content.appendChild(quote);
    //Append hours
    var hours = document.createElement("div");
    hours.classList.add("section", "hours");
    var hourText = document.createElement("p");
    hourText.innerText = "Hours";
    var weekTimes = document.createElement("div");
    weekTimes.className = "times";
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var times = ["8am - 8pm", "6am - 6pm", "6am - 6pm", "6am - 6pm", "6am - 10pm", "6am - 10pm", "8am - 10pm"];
    for (var i = 0; i < 7; i++) {
        var day = document.createElement('p');
        day.textContent = days[i] + ": " + times[i];
        weekTimes.appendChild(day);
    }
    hours.appendChild(hourText);
    hours.appendChild(weekTimes);
    content.appendChild(hours);
    //Append location
    var location = document.createElement("div");
    location.classList.add("section", "location");
    var locationText = document.createElement("h3");
    locationText.innerText = "Location";
    var address = document.createElement("p");
    address.innerText = "123 Bob Drive, Bobcity, Bobland";
    location.appendChild(locationText);
    location.appendChild(address);
    content.appendChild(location);
}
