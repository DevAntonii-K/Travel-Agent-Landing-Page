
//  SWIPER
import Swiper from 'swiper';
import { Navigation, FreeMode } from 'swiper/modules';

export const initSliders = () => {
    // Слайдер відгуків (Vertical)
    const feedbackColumns = document.querySelectorAll('.feedback__column.swiper');
    feedbackColumns.forEach((column) => {
        new Swiper(column, {
            modules: [FreeMode],
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,
            freeMode: {
                enabled: true,
                sticky: false,
                momentum: true,
            },
            loopedSlides: 8,
            grabCursor: true,
        });
    });

    // Слайдер напрямків (Horizontal)
    const destinationSliders = document.querySelectorAll('.destinations__slider.swiper');
    destinationSliders.forEach((slide) => {
        new Swiper(slide, {
            modules: [Navigation, FreeMode],
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 32,
            loop: true,
            freeMode: {
                enabled: true,
                sticky: false,
                momentum: true,
            },
            navigation: {
                nextEl: '.destinations__btn--next',
                prevEl: '.destinations__btn--prev',
            },
            grabCursor: true,
            watchSlidesProgress: true,
        });
    });
};
