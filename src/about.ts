
function loadAbout() {
	const content = document.querySelector("#content") as HTMLDivElement;

	//Append title
	const title = document.createElement("h2");
	title.className = "title";
	title.textContent = "About Us"

	content.appendChild(title);

	//Append story
	const aboutSection = document.createElement("div");
	aboutSection.classList.add("about-section", "section");
	
	const aboutTitle = document.createElement("h3");
	aboutTitle.innerText = "Our Story";
	const aboutText = document.createElement("p");
	aboutText.textContent = `We are a family owned business which was established in 
				 1957. This place was bought by my grandfather, and it has been our family business
				 since then. Here at Bob's Breakfast, we strive to serve the best breakfast in the
				 state. Our ingredients are fresh and our food is cooked perfectly. Make sure to come 
				 downtown and give our place a try.`
	
	aboutSection.appendChild(aboutTitle);
	aboutSection.appendChild(aboutText);

	content.appendChild(aboutSection);

	//Append location
	const location = document.createElement("div");
	location.classList.add("section", "location");

	const locationText = document.createElement("h3");
	locationText.innerText = "Location";
	const address = document.createElement("p");
	address.innerText = "123 Bob Drive, Bobcity, Bobland"

	location.appendChild(locationText);
	location.appendChild(address);

	content.appendChild(location);

	//Append contact
	const contact = document.createElement("div");
	contact.classList.add("contact", "section");

	const contactTitle = document.createElement("h3");
	contactTitle.innerText = "Contact Us";
	const number = document.createElement("p");
	number.innerText = "123-456-7890";
	const email = document.createElement("p");
	email.innerText = "bobsbob@gmail.com";

	contact.appendChild(contactTitle);
	contact.appendChild(number);
	contact.appendChild(email);

	content.appendChild(contact);
}

export {loadAbout};