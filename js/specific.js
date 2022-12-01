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
	

		<a href= Photographer.html?username=${result.user.username}>
			<h2 class=photographer>See more from Photographer: ${result.user.name}</h2>		
		</a>	
		<div><p>${result.description}</p>
		</div>	
		<div class=imageContainer><img class=image image-contain src=${result.urls.small} /></div>
		
		<div class=location>
		<p>${result.location.country}</p>
		</div>		
<a href= ${result.download} class=button DLbutton>Download full size</a>
		
`;
}

GetSpecificImage();
