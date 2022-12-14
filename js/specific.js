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

	let description = `No description to be found.<br>The image says it all";`;
	if (description) {
		description = result.description;
	}

	let location = `Location for this image is not known`;
	if (result.user.location) {
		location = result.user.location;
	}


	specificContainer.innerHTML += `
	<div><h2>Posted by ${result.user.name}</h2></div>
	<div class=location>	<p>location: ${location}</p></div>
	<a href= Photographer.html?username=${result.user.username}><p>More from this photographer</p>	</a>
	
		<div class=imageContainer>
			<img class=image image-contain src=${result.urls.small} />
		</div>
		<p>${description}</p>
		</div>	
<a href= ${result.download} class=button DLbutton><p>Download full size</p></a>
		
	


	<div>
		
	
`;
}
GetSpecificImage();
