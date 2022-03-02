"use strict";

document.addEventListener("DOMContentLoaded", () => {
	//Constant to hold default page header
	const pageHeader = "Countries and Flags";

	//Get three image elements
	let countryImg1 = document.querySelector("#imgCountry1");
	let countryImg2 = document.querySelector("#imgCountry2");
	let countryImg3 = document.querySelector("#imgCountry3");
	//Get header element
	let headerEl = document.querySelector("#pageHeader");

	//First Image: Attach Click event
	countryImg1.addEventListener("mouseover", () => {
		//Assign map Image
		countryImg1.src = "images/australia_map.jpg";
		//Change Hover Text
		headerEl.textContent = "Australia";
	});
	countryImg1.addEventListener("mouseout", () => {
		//Assign flag Image
		countryImg1.src = "images/au.jpg";
		//Change back to Default Heading
		headerEl.textContent = pageHeader;
	});
	//Second Image: Attach Click event
	countryImg2.addEventListener("mouseover", () => {
		//Assign map Image
		countryImg2.src = "images/bahamas_map.jpg";
		//Change Hover Text
		headerEl.textContent = "Bahamas";
	});
	countryImg2.addEventListener("mouseout", () => {
		//Assign flag map
		countryImg2.src = "images/bs.jpg";
		//Change Hover Text
		headerEl.textContent = pageHeader;
	});

	//Third Image: Attach Click event
	countryImg3.addEventListener("mouseover", () => {
		//Assign map Image
		countryImg3.src = "images/india_map.jpg";
		//Change Hover Text
		headerEl.textContent = "India";
	});
	countryImg3.addEventListener("mouseout", () => {
		//Assign map Image
		countryImg3.src = "images/in.jpg";
		//Change Hover Text
		headerEl.textContent = pageHeader;
	});
});
