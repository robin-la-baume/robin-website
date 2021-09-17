$(document).ready(function () {
	$('.start-container').ripples({
		resolution: 512,
		dropRadius: 20,
		perturbance: 0.04,
	});

	// Automatic drops
	// setInterval(function() {
	// 	var $el = $('.container');
	// 	var x = Math.random() * $el.outerWidth();
	// 	var y = Math.random() * $el.outerHeight();
	// 	var dropRadius = 10;
	// 	var strength = 0.02 + Math.random() * 0.01;

	// 	$el.ripples('drop', x, y, dropRadius, strength);
	// }, 400);

});

const menuButton = document.querySelectorAll('#sidebar ul li.menu-button');
const menuButtonLine = document.querySelectorAll('#sidebar ul li.menu-underline')
let i = 0;
// menuButton.forEach(element => {
// 	element.addEventListener('mouseover', function () {
// 		menuButtonLine[i].style.left = '0';
// 	})
// element.addEventListener('mouseout', function () {
// 	menuButtonLine[i].style.left = '-130%';
// })
// 	i++

for (let i = 0; i < menuButton.length; i++) {
	menuButton[i].addEventListener('mouseover', function () {
		menuButtonLine[i].style.left = '0';
	})
	menuButton[i].addEventListener('mouseout', function () {
		menuButtonLine[i].style.left = '-130%';
	})
}

const buttonTag = document.querySelector('#mobile-menu-btn');
const menuTag = document.querySelector('#mobile-menu');
const middleLineTag = document.querySelector('#middle-line');
const topLineTag = document.querySelector('#top-line');
const bottomLineTag = document.querySelector('#bottom-line');
// const contentTag = document.querySelector('.content-wrapper');
const contentTag = document.querySelector('.content-container');
const startContentTag = document.querySelector('.start-container');


buttonTag.addEventListener('click', function() {
  menuTag.classList.toggle('open');
	menuTag.classList.toggle('menu-open');
	// startContentTag.classList.toggle('start-blur');
	contentTag.classList.toggle('blur');
	

  if (menuTag.classList.contains('menu-open')) {
    middleLineTag.style.opacity = '0';
    topLineTag.style.transform = 'rotate(45deg) translate(8px, 10px)';
    bottomLineTag.style.transform = 'rotate(-45deg) translate(8px, -10px)';
    titleTag.style.transform = 'translateX(-400px)';
  } else {
    buttonTag.style.transform = 'translateX(0)';
    middleLineTag.style.opacity = '1';
    topLineTag.style.transform = 'rotate(0deg) translate(0)';
    bottomLineTag.style.transform = 'rotate(0deg) translate(0)';
    titleTag.style.transform = 'translateX(0)';
  };
});

