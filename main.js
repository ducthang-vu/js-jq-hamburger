/* A script handling the hamburger menu element */

console.log('main.js is working')
console.log($)


/* GLOBAL VARIABLES */
const openButton = $('.header-right > a')
const closeButton = $('.hamburger-menu a.close')
const menu = $('header .hamburger-menu')


/* EVENTS */
$(openButton).click(function() { 
    menu.toggle();;
});


$(closeButton).click(function() { 
    menu.toggle();;
});