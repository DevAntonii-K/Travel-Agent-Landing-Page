//  SWIPER
import Swiper from 'swiper';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';

export const initSliders = () => {
    // --- FEEDBACK SWIPER ---
    const feedbackColumns = document.querySelectorAll('.feedback__column.swiper');
    feedbackColumns.forEach((column, i) => {
        const swiper = new Swiper(column, {
            modules: [FreeMode, Autoplay],
            direction: 'horizontal',
            slidesPerView: 1.25,
            spaceBetween: 12,
            loop: true,
            speed: 20000,
            allowTouchMove: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: i % 2 !== 0,
            },
            breakpoints: {
                768: { direction: 'vertical', slidesPerView: 'auto', spaceBetween: 20 },
                1230: { 
                    direction: 'vertical', 
                    slidesPerView: 'auto', 
                    allowTouchMove: true, 
                    autoplay: false,
                    freeMode: { enabled: true, sticky: true }
                }
            }
        });

        column.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });


        // --- STOP FUNCTIONALE ---
        column.addEventListener('touchstart', () => {
            if (window.innerWidth < 1230) {
                
                const style = window.getComputedStyle(swiper.wrapperEl);
                const matrix = new WebKitCSSMatrix(style.transform);
                
                // 2. Додаємо клас для 0ms transition у CSS
                column.classList.add('is-paused');

                // 3. Миттєво фіксуємо слайдер у цій точці
                swiper.wrapperEl.style.transform = `translate3d(${matrix.m41}px, ${matrix.m42}px, 0px)`;
                
                swiper.autoplay.stop();
            }
        }, { passive: true });

        column.addEventListener('touchend', () => {
            if (window.innerWidth < 1230) {
                column.classList.remove('is-paused');
                // Скидаємо ручне значення, щоб Swiper знову міг керувати wrapper-ом
                swiper.wrapperEl.style.transform = ''; 
                swiper.autoplay.start();
            }
        }, { passive: true });
    });

    // ----- POPULAR DESTINATIONS SWIPER -----
    const destinationSliders = document.querySelectorAll('.destinations__slider.swiper');
    destinationSliders.forEach((slide) => {
        new Swiper(slide, {
            modules: [Navigation, FreeMode],
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 16,
            loop: true,
            navigation: {
                nextEl: '.destinations__btn--next',
                prevEl: '.destinations__btn--prev',
            },
            breakpoints: {
                768: { slidesPerView: 2.2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 }
            }
        });
    });
};
