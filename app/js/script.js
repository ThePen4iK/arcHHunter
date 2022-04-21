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

    if(burger){
        burger.addEventListener("click", ()=>{
            if(!menuFlag){
                rootElement.classList.add("block");
                burger.classList.add("clicked")
                header.classList.add("header--open");
                menuFlag = true;
            }else{
                rootElement.classList.remove("block");
                header.classList.remove("header--open");
                burger.classList.remove("clicked");
                menuFlag = false;
            }

        })
    }


    console.log("DOM fully loaded and parsed");
})