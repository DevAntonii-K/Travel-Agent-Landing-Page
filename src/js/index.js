import { initSliders } from './modules/swiper.js';
import { initDatePicker } from './modules/datepicker.js';

document.addEventListener('DOMContentLoaded', () => {
    initSliders();
    initDatePicker();
});


const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');    
})

// CLOSE MENU ON CLICK

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
    }
})