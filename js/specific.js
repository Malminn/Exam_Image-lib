/* ————————————————————————————————————————————————————————————————————
		js - Image specific
———————————————————————————————————————————————————————————————————————— */

const query = document.location.search;
const params = new URLSearchParams(query);
const imageID = params.get("id");

const headTitle = document.querySelector("title");
const headMetaText = document.querySelector("head");
const container_loader = document.querySelector(".container_loader");
const apiKey = "6fUav6-qw96GakG3rN9KIL5YBRjddRuAkpzhEZqJepU";

const specificContainer = document.querySelector(
	".specificContainer"
);
const url = `https://api.unsplash.com/photos/${imageID}/?client_id=${apiKey}`;
console.warn(url);

/*
   ╔════════════════════╗
   ║ GET SPECIFIC IMAGE ║
   ╚╦══════════════════╦╝
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*/
async function GetSpecificImage() {
	specificContainer.innerHTML = ``;

	const response = await fetch(url);
	const result = await response.json();

	specificContainer.innerHTML += `
	
	<div class="container">

		<a href= Photographer.html?username=${result.user.username}>
			<h1>${result.user.name}</h1>		
		</a>	

		<div class=imageContainer>
			<img src="${result.urls.regular}">
		</div>

		<div>${result.description}
		</div>						
		
		<div class=location>
		${result.location.country}<p>
		</div>		
`;
}

GetSpecificImage();
