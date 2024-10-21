"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAbout = loadAbout;
function loadAbout() {
    var content = document.querySelector("#content");
    //Append title
    var title = document.createElement("h2");
    title.className = "title";
    title.textContent = "About Us";
    content.appendChild(title);
    //Append story
    var aboutSection = document.createElement("div");
    aboutSection.classList.add("about-section", "section");
    var aboutTitle = document.createElement("h3");
    aboutTitle.innerText = "Our Story";
    var aboutText = document.createElement("p");
    aboutText.textContent = "We are a family owned business which was established in \n\t\t\t\t 1957. This place was bought by my grandfather, and it has been our family business\n\t\t\t\t since then. Here at Bob's Breakfast, we strive to serve the best breakfast in the\n\t\t\t\t state. Our ingredients are fresh and our food is cooked perfectly. Make sure to come \n\t\t\t\t downtown and give our place a try.";
    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutText);
    content.appendChild(aboutSection);
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
    //Append contact
    var contact = document.createElement("div");
    contact.classList.add("contact", "section");
    var contactTitle = document.createElement("h3");
    contactTitle.innerText = "Contact Us";
    var number = document.createElement("p");
    number.innerText = "123-456-7890";
    var email = document.createElement("p");
    email.innerText = "bobsbob@gmail.com";
    contact.appendChild(contactTitle);
    contact.appendChild(number);
    contact.appendChild(email);
    content.appendChild(contact);
}
