const searchBar = document.querySelector(".searchBar");
searchBar.addEventListener("submit", searchSubmit);

const numberOfResults = document.querySelector(".numberOfResults");
const animatedLoader = document.querySelector(".animatedLoader");
let totalResults;
let page = 1;
let searchQuery;

const apiKey = "6fUav6-qw96GakG3rN9KIL5YBRjddRuAkpzhEZqJepU";

const searchResults = document.querySelector(".searchResults");
/*

   ╔══════════════════╗
   ║ SHOW MORE BUTTON ║
   ╚╦════════════════╦╝
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*/
const showMoreBtn = document.querySelector(".showMoreBtn");
showMoreBtn.addEventListener("click", () => {
	page += 1;
	fetchResults(searchQuery);
});

/*

   ╔══════════════╗
   ║ FETCH IMAGES ║
   ╚╦════════════╦╝
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*/
async function fetchResults(searchQuery) {
	const url = `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=10&page=${page}&client_id=${apiKey}`;
	animatedLoader.classList.remove("hidden");

	try {
		const response = await fetch(url);
		const json = await response.json();

		totalResults = json.total;
		numberOfResults.textContent = `We found ${totalResults} images`;

		json.results.forEach((result) => {
			searchResults.insertAdjacentHTML(
				"beforeend",
				`
		<div class=card>
		<a href="./specific.html?id=${result.id}">
			<div class="cardIMG" style="background-image: url(${result.urls.small});"></div>
		</a>
		<p class="photographer-name cardTitle">
			<a href=Photographer.html?username=${result.user.username} style="color: black; text-decoration:none;">Photo by ${result.user.name}</a>
		</p>
	</div>
	`
			);
		});

		/* add show More button 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔ */
		showMoreBtn.classList.remove("hidden");
		if (page >= totalResults) {
			showMoreBtn.innerHTML = "no more content";
		}
	} catch (err) {
		console.log(err);
		alert("Failed to search Unsplash");
	}
	animatedLoader.classList.add("hidden");
}

/*
   ╔════════╗
   ║ SEARCH ║
   ╚╦══════╦╝
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*/
function searchSubmit(event) {
	event.preventDefault();
	page = 1;
	const inputValue = document.querySelector(".js-searchInput").value;
	searchQuery = inputValue.trim();
	console.log(searchQuery);
	fetchResults(searchQuery);
}
