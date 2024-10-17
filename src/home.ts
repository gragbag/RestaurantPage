
function loadHome() {
	const content = document.querySelector("#content") as HTMLDivElement;

	//Append title
	const title = document.createElement("h2");
	title.className = "title";
	title.textContent = "Bob's Breakfast"

	content.appendChild(title);

	//Append quote
	const quote = document.createElement("div");
	quote.classList.add("section", "quote");

	const quoteText = document.createElement("p");
	quoteText.innerText = "Bob's cooks up some of the best breakfast that I have ever had. It is a must visit for anyone in the area!";
	const author = document.createElement("h3");
	author.className = "author";
	author.textContent = "-Bobby";

	quote.appendChild(quoteText);
	quote.appendChild(author);

	content.appendChild(quote);

	//Append hours
	const hours = document.createElement("div");
	hours.classList.add("section", "hours");

	const hourText = document.createElement("p");
	hourText.innerText = "Hours";
	const weekTimes = document.createElement("div");
	weekTimes.className = "times";

	const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const times: string[] = ["8am - 8pm", "6am - 6pm", "6am - 6pm", "6am - 6pm", "6am - 10pm", "6am - 10pm", "8am - 10pm"];

	for (let i = 0; i < 7; i++) {
		const day = document.createElement('p');
		day.textContent = days[i] + ": " + times[i];
		weekTimes.appendChild(day);
	}

	hours.appendChild(hourText);
	hours.appendChild(weekTimes);

	content.appendChild(hours);

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

}

export {loadHome};