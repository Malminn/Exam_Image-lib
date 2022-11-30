const dropDown = document.querySelector(".dropDown");
const navMenu = document.querySelector(".nav_ul");

dropDown.addEventListener("click", () => {
	dropDown.classList.toggle("active");
	navMenu.classList.toggle("active");
});

document.querySelectorAll(".navigation_li").forEach((n) =>
	n.addEventListener("click", () => {
		dropDown.classList.remove("active");
		navMenu.classList.remove("active");
	})
);
