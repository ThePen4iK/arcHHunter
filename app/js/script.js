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
        slidesPerView: 'auto',
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            768: {
                spaceBetween: 75,
            },

        },
    });

    let swiperGallery = new Swiper(".gallery__swiper", {

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

    let sliderSlide = document.querySelectorAll(".js-slide");
    let bodyCursor = document.querySelector(".cursor-custom");
    let allLink = document.querySelectorAll("a");
    let initCursor = false;

    for (let i = 0; i < allLink.length; i++) {
        let selfLink = allLink[i];

        selfLink.addEventListener("mouseover", function () {
            bodyCursor.classList.add("custom-cursor--link");
        });
        selfLink.addEventListener("mouseout", function () {
            bodyCursor.classList.remove("custom-cursor--link");
        });
    }
    for (let i = 0; i < sliderSlide.length; i++) {
        let swiperSlide = sliderSlide[i];

        swiperSlide.addEventListener("mouseover", function () {
            bodyCursor.classList.remove("cursor-custom");
            bodyCursor.classList.add("cursor-slider");
        })
        swiperSlide.addEventListener("mouseout", function () {
            bodyCursor.classList.remove("cursor-slider");
            bodyCursor.classList.add("cursor-custom");
        })
    }

    window.onmousemove = function (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        if (!initCursor) {
            // cursor.style.opacity = 1;
            TweenLite.to(bodyCursor, 0.3, {
                opacity: 1
            });
            initCursor = true;
        }

        TweenLite.to(bodyCursor, 0, {
            top: mouseY + "px",
            left: mouseX + "px"
        });
    };

    window.onmouseout = function (e) {
        TweenLite.to(bodyCursor, 0.3, {
            opacity: 0
        });
        initCursor = false;
    };


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
        if (target.classList.contains("architecture-sub__list")) {
            architectureItem.classList.remove("architecture__item--open");
            architectureSubList.classList.remove("architecture-sub__list--open");
        }
    });


    function app() {
        const buttons = document.querySelectorAll(".architecture__link");
        const contents = document.querySelectorAll(".portfolio__list");
        const portfolioCategory = document.querySelector(".js-navigation-list");


        function filter(category, items) {
            items.forEach((item) => {
                const isItemFiltered = !item.classList.contains(category);
                const isShowAll = category.toLowerCase() === 'all'
                if (isItemFiltered && !isShowAll) {
                    item.classList.add("hide")
                } else {
                    item.classList.remove("hide");
                }
            })
        }

        buttons.forEach((item, i) => {


            item.addEventListener('click', (e) => {
                const currentCategory = item.dataset.filter;
                filter(currentCategory, contents)
            })

            portfolioCategory.addEventListener("click", (e) => {
                const allCategory = document.querySelectorAll(".architecture__link")
                const target = e.target;
                allCategory.forEach((item) => {
                    item.classList.remove('architecture__link--active')
                })
                target.classList.add('architecture__link--active')
            })
        })
    }

    app()

    let btnPopup = document.querySelector(".js-btn-popup");
    let overlay = document.querySelector(".overlay");
    let popup = document.querySelector(".popup--thank");
    let popupClose = document.querySelectorAll(".popup__close");
    if(btnPopup){
        btnPopup.addEventListener("click", (e) => {
            e.preventDefault();
            rootElement.classList.add("block");
            popup.classList.add("popup__show");
            overlay.classList.add("active-overlay");

            popupClose.forEach((item) => {
                item.addEventListener("click", () => {
                    popup.classList.remove("popup__show");
                    overlay.classList.remove("active-overlay");
                    rootElement.classList.remove("block");
                })
            })
        })
    }

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {
            popup.classList.remove("popup__show");
            popupSlide.classList.remove("popup__show");

            overlay.classList.remove("active-overlay");
            rootElement.classList.remove("block");
        };
    }, false);
    window.addEventListener("click", (e) => {
        let target = e.target;
        if (target.classList.contains("active-overlay")) {
            popup.classList.remove("popup__show");
            popupSlide.classList.remove("popup__show");

            overlay.classList.remove("active-overlay");
            rootElement.classList.remove("block");
        }
    })



    let projectsItem = document.querySelectorAll(".portfolio__item"),
        popupSlide = document.querySelector(".popup--project");


    window.activateProjectsPopup = (projects) => {
        projects.forEach((item) => {
            item.classList.add('popup-activated');
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const popupHeader = document.querySelector('.popup__project'),
                    popupContent = document.querySelector(".popup__name"),
                    popupTemplateImg = item.querySelector(".popup__template--img"),
                    popupTemplateName = item.querySelector(".popup__template--name");
                popupHeader.innerHTML = '';
                popupContent.innerHTML = '';
                popupHeader.appendChild(popupTemplateImg.content.cloneNode(true));
                popupContent.appendChild(popupTemplateName.content.cloneNode(true));
                popupSlide.classList.add("popup__show");
                overlay.classList.add("active-overlay");
                rootElement.classList.add("block");
            })
        });
    };
    if(popupClose){
        popupClose.forEach((item) => {
            item.addEventListener("click", () => {
                popupSlide.classList.remove("popup__show");
                overlay.classList.remove("active-overlay");
                rootElement.classList.remove("block");
            })
        })
    }
    window.activateProjectsPopup(projectsItem);

    console.log("DOM fully loaded and parsed");
})