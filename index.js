'use strict';

let home = 'apartment';
const woman_name = 'Vanda';
const man_name = 'Vision';
const dog_name = 'Tanos';
let first_name;
let second_name;
let peopleInHome = 2;
let typeOfHome;
const table = 'стол';
const chair = 'стул';
const armchair = 'кресло';
const sofa = 'диван';
const cupboard = 'шкаф';
const shelf = 'полка';
let book = 17;
let plant = 5;
let lamp = 2;
let pillow = 2;
let bank = 4;
let vase = 16;
let picture = 1;
let home_decoration;
let win = null;
let door = null;
let room = null;

console.log(`Добро пожаловать в дом ${woman_name} и ${man_name}, а также их собаки ${dog_name}!`);
console.log(`В квартире живет ${peopleInHome} человек. Их зовут ${woman_name} и ${man_name}.`);
console.log(`В комнате есть следующая мебель: ${table}, ${chair}, ${armchair}, ${sofa}, ${cupboard}, ${shelf}.`);
console.log(`И столько элементов декора: ${book+plant+lamp+pillow+bank+vase+picture}`);
console.log(`У нас есть следующие типы переменных: ${typeof woman_name}, ${typeof book}, ${typeof door}.`);

if (peopleInHome <=2) {
    typeOfHome = 'Это студия';
} else {
    typeOfHome = 'Это многокомнатная квартира';
}
alert(typeOfHome);

if (woman_name > man_name) {
    first_name = man_name;
    second_name = woman_name;
} else {
    first_name = woman_name;
    second_name = man_name;
}
alert(`Добро пожаловать в дом ${first_name} и ${second_name}, а также их собаки ${dog_name}!`);

if (book+plant+lamp+pillow+bank+vase+picture < 20) {
    home_decoration = 'Квартира в стиле минимализм';
} else if (book+plant+lamp+pillow+bank+vase+picture >= 20 && book+plant+lamp+pillow+bank+vase+picture<= 40) {
    home_decoration = 'Квартира в стиле модерн';
} else {
    home_decoration = 'Квартира в стиле классика';
}  
alert(home_decoration);