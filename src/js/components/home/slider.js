/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
    new Swiper('.insight__slider', {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            993: {
                centeredSlides: false,
            },
        },
    });
};

export const useTestimonialsSlider = () => {
    new Swiper('.testimonials__slider', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 22,
        loop: true,
        navigation: {
            nextEl: '.testimonials__btn--next',
            prevEl: '.testimonials__btn--prev',
        },
    });
};
