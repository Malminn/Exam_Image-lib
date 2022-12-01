/*

js - 𝓟𝓱𝓸𝓽𝓸𝓰𝓻𝓪𝓹𝓱𝓮𝓻  
▔▔▔▔▔▔▔▔▔▔▔▔▔

  ╔═══════════╗
  ║ VARIABLES ║
  ╚╦═════════╦╝
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*/

const apiKey = "6fUav6-qw96GakG3rN9KIL5YBRjddRuAkpzhEZqJepU";
const profileContainer = document.querySelector(".profileContainer");
const query = document.location.search;
const params = new URLSearchParams(query);
const username = params.get("username");
const profileURL = `https://api.unsplash.com/users/${username}?client_id=${apiKey}&username=${username}`;
const imagesURL = `https://api.unsplash.com/users/${username}/photos?client_id=${apiKey}&username=${username}`;
const resultsContainer = document.querySelector(".resultsContainer")
console.warn(profileURL);
console.warn(imagesURL);

let totalResults;
let page;
/* ———————————————————————————————————————————— */
const animatedLoader = document.querySelector(".animatedLoader");
const numberOfResults = document.querySelector(".numberOfResults");
const photographerImages = document.querySelector(
	".photographerImages"
);
/*
   ╔══════════════════════╗
   ║ PHOTOGRAPHER PROFILE ║
   ╚╦════════════════════╦╝
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*/
async function getProfile() {
	try {
		profileContainer.innerHTML = "";
		const response = await fetch(profileURL);
		const result = await response.json();

		profileContainer.innerHTML += `		
	
		<div class=imageContainer>
				<img class = "image" src="${result.profile_image.large}" />
			</div>

				<h2 class=name> The photographer behind these wonderful images <br> goes by the name of  ${result.name}</h2>
	
`;
	} catch (err) {
		console.error(err);
		alert("Error with profile API");
	}
}

getProfile();
/*

   ╔══════════════════╗
   ║ SHOW MORE BUTTON ║
   ╚╦════════════════╦╝
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*/
const showMoreBtn = document.querySelector(".showMoreBtn");
showMoreBtn.addEventListener("click", () => {
	page += 1;
	getProfile();
});

/*
   ╔═════════════════════╗
   ║ PHOTOGRAPHER IMAGES ║
   ╚╦═══════════════════╦╝
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*/
animatedLoader.classList.remove("hidden");
async function getImages() {
	try {
		const response = await fetch(imagesURL);
		const result = await response.json();

		console.log(result);

		totalResults = result.total;
		numberOfResults.textContent = `The photographer has posted ${totalResults} images`;

		result.forEach((result) => {
			resultsContainer.insertAdjacentHTML(
				"beforeend",
				`
				<div class=card>
				<a href="specific.html?id=${result.id}">
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
		console.error(err);
		alert("Failed to search Unsplash");
	}
	animatedLoader.classList.add("hidden");
}
getImages();
