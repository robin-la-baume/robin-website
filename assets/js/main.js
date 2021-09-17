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

const buttonTag = document.querySelector('div.burger-wrapper');
const menuTag = document.querySelector('nav');
const middleLineTag = document.querySelector('div.burger-middle-line');
const topLineTag = document.querySelector('div.burger-top-line');
const bottomLineTag = document.querySelector('div.burger-bottom-line');
const contentTag = document.querySelector('.content-wrapper');


buttonTag.addEventListener('click', function() {
  menuTag.classList.toggle('menu-open');

  if (menuTag.classList.contains('menu-open')) {
    // buttonTag.style.transform = 'translateX(calc(-100vw + 60px))';
    middleLineTag.style.opacity = '0';
    topLineTag.style.transform = 'rotate(45deg) translate(7px, 8px)';
    bottomLineTag.style.transform = 'rotate(-45deg) translate(7px, -8px)';
    titleTag.style.transform = 'translateX(-400px)';
    // contentTag.style.transform = 'translateX(calc(-100vw + 60px))';
  } else {
    buttonTag.style.transform = 'translateX(0)';
    middleLineTag.style.opacity = '1';
    topLineTag.style.transform = 'rotate(0deg) translate(0)';
    bottomLineTag.style.transform = 'rotate(0deg) translate(0)';
    titleTag.style.transform = 'translateX(0)';
    contentTag.style.transform = 'translateX(0)';
  };
});

