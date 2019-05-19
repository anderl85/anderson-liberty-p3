/*
name, class, background, alignment, race

*/
function Character(n, r, c, bg, a){
	this.name = n;
	this.race = r;
	this.class = c;
	this.background = bg;
	this.alignment = a;
}
var name;
var race;
var cclass;
var background;
var alignment;

function get(element) {
	return document.getElementById(element);
}

function init(){
	//get('intro').classList.add('visible');
	var startbtn = get('start');
	startbtn.onclick = getName;
}
function getName(){
	get('intro').style.display = 'none';
	get('end-display').classList.remove('visible');
	get('name').classList.add('visible');
	get('name-next').onclick = getRace;
}
function getRace(){
	var input = get('name-input');
	name = input.value;
	get('name').classList.remove('visible');
	get('race').classList.add('visible');
	get('race-next').onclick = getClass;
}
function getClass(){
	race = checkRadios('races');
	get('race').classList.remove('visible');
	get('class').classList.add('visible');
	get('class-next').onclick = getAlign;
}
function getAlign(){
	cclass = checkRadios('cclass');
	get('class').classList.remove('visible');
	get('alignment').classList.add('visible');
	get('align-next').onclick = getBg;
}
function getBg(){
	alignment = checkRadios('align');
	get('alignment').classList.remove('visible');
	get('background').classList.add('visible');
	get('bg-next').onclick = finish;
}
function finish(){
	background = checkRadios('bg');
	get('background').classList.remove('visible');
	get('end-display').classList.add('visible');
	get('display-name').textContent += name;
	get('display-race').textContent += race;
	get('display-class').textContent += cclass;
	get('display-bg').textContent += background;
	get('display-align').textContent += alignment;
	get('againbtn').onclick = reset;
}
function reset(){
	name = '';
	race = '';
	cclass = '';
	background = '';
	alignment = '';
	getName();
}
function checkRadios(name){
	var radios = document.getElementsByName(name);
	var val;
	for (var i = 0; i < radios.length; i++)
	{
		if (radios[i].checked){
			val = radios[i].value;
			break;
		}
	}
	return val;
}
init();