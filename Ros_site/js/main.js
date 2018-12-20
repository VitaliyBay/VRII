// Initiation of WoW.js animation
new WOW().init();

// Script for start-block
let btn = document.querySelector('#btn_start');
btn.onclick = function () {
	let carousel = document.querySelector('#carousel-example-generic');
	carousel.style.display = "block"
	document.querySelector('.start-block').style.display = "none";
}