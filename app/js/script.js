document.addEventListener("DOMContentLoaded", function () {


    let burger = document.querySelector(".burger");
    let header = document.querySelector('.header');
    let startScreen = document.querySelector('.js-main');
    // let headerFixed = startScreen.offsetHeight;
    const rootElement = document.documentElement;
    let menuFlag = false;

    // window.onscroll = function () {
    //     fixed();
    // }

    // function fixed() {
    //     //&& window.pageYOffset >= headerFixed
    //     if (window.scrollY > 0) {
    //         header.classList.add("header__fixed");
    //     } else {
    //         header.classList.remove("header__fixed");
    //     }
    // }

    if (burger) {
        burger.addEventListener("click", () => {
            if (!menuFlag) {
                rootElement.classList.add("block");
                burger.classList.add("clicked")
                header.classList.add("header--open");
                menuFlag = true;
            } else {
                rootElement.classList.remove("block");
                header.classList.remove("header--open");
                burger.classList.remove("clicked");
                menuFlag = false;
            }

        })
    }

    let swiperWork = new Swiper(".work__swiper", {
        spaceBetween: 10,
        // loop:true,
        slidesPerView: 'auto',
        pagination: {
            el: ".swiper-pagination",
        },
        watchSlidesProgress: true,
        breakpoints: {
            768: {
                spaceBetween: 45,
                centeredSlides: true,
                centeredSlidesBounds: true,
            },

        }
    });

    let swiperComment = new Swiper(".comment__swiper", {

        slidesPerView: "auto",
        spaceBetween: 5,
        navigation: {
            nextEl: ".comment__next",
            prevEl: ".comment__prev",
        },
    });

    let swiperTeam = new Swiper(".team__swiper", {
        spaceBetween: 10,
        // loop:true,
        slidesPerView: 'auto',
        // centeredSlides: true,
        // centeredSlidesBounds: true,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            768: {
                spaceBetween: 75,
            },

        },
        // on: {
        //     beforeTransitionStart: (e) => {
        //
        //         // Put in variable activeSlide the real active slide
        //         let activeSlide;
        //         let slides = e.slides;
        //         slides.forEach(item => {
        //             if (item.classList.contains("swiper-slide-active")) {
        //                 activeSlide = item;
        //             }
        //         });
        //
        //         // Find out dataset of the slide
        //         let activeSlideYear = activeSlide.dataset.slide;
        //
        //         let stamps = document.querySelectorAll(".history__stamp");
        //         stamps = Array.from(stamps);
        //
        //         // Put in variable targetStamp the real target stamp
        //         let targetStamp;
        //         stamps.forEach(item => {
        //             if (item.dataset.target == activeSlideYear) {
        //                 targetStamp = item;
        //             }
        //         });
        //
        //         // Find out index of the target stamp
        //         let targetStampIndex = stamps.indexOf(targetStamp);
        //
        //         if (targetStampIndex > 0) {
        //             historyTimeline.slideTo(targetStampIndex);
        //         }
        //     }
        // }
    });

    let swiperGallery = new Swiper(".gallery__swiper", {
        // spaceBetween: 10,
        // watchSlidesProgress: true,
        //
        //
        // slidesPerView: 'auto',
        // pagination: {
        //     el: ".swiper-pagination",
        // },
        // breakpoints: {
        //     768: {
        //         spaceBetween: 21,
        //         slidesPerView: 3,
        //         centeredSlidesBounds: true,
        //     },
        //     1200:{
        //         spaceBetween: 25
        //     }
        //
        // }
        spaceBetween: 10,
        // loop:true,
        slidesPerView: 'auto',
        pagination: {
            el: ".swiper-pagination",
        },
        watchSlidesProgress: true,
        breakpoints: {
            768: {
                spaceBetween: 45,
                centeredSlides: true,
                centeredSlidesBounds: true,
            },

        }
    })

    let mouseCursor = document.querySelector(".cursor");
    let sliderSlide = document.querySelectorAll(".work__slide");


    sliderSlide.forEach((item) => {
        item.addEventListener("mouseover", cursor)
    })

    // window.addEventListener("mousemove", cursor)

    function cursor(e) {
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";
    }

    const moveCursor = (e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;

        mouseCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }


    // let marquee = document.querySelectorAll('.marquee__item');
    //
    //
    //
    //
    //
    // addEventListener("load", function () {
    //     marquee.forEach(el => {
    //         let rate = 0;
    //         let distance = el.clientWidth;
    //         let style = window.getComputedStyle(el);
    //         let marginRight = parseInt(style.marginRight) || 0;
    //         let totalDistance = distance + marginRight;
    //         let time = totalDistance / rate;
    //         let container = el.parentElement;
    //         gsap.to(container, time, {
    //             repeat: -1,
    //             x: '-'+totalDistance,
    //             ease: Linear.easeNone,
    //         });
    //     });
    // });
    let architectureItem = document.querySelector(".architecture__item");
    let architectureSubList = document.querySelector(".architecture-sub__list");
    let architectureSubItem = document.querySelectorAll(".architecture-sub__item");

    if (architectureItem) {
        architectureItem.addEventListener("click", (e) => {
            if (!architectureItem.classList.contains("architecture__item--open")) {
                architectureItem.classList.add("architecture__item--open");
                architectureSubList.classList.add("architecture-sub__list--open");
            } else {
                architectureItem.classList.remove("architecture__item--open");
                architectureSubList.classList.remove("architecture-sub__list--open");
            }
        })
    }
    if (architectureSubItem) {
        architectureSubItem.forEach((item) => {
            item.addEventListener("click", () => {
                architectureItem.classList.remove("architecture__item--open");
                architectureSubList.classList.remove("architecture-sub__list--open");
            })
        })
    }
    window.addEventListener("click", (e) => {
        let target = e.target;
        console.log(target)
        if (target.classList.contains("architecture-sub__list") ) {
            architectureItem.classList.remove("architecture__item--open");
            architectureSubList.classList.remove("architecture-sub__list--open");
        }
    })
    console.log("DOM fully loaded and parsed");
})