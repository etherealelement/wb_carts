window.addEventListener("DOMContentLoaded", () => {
    "use strict"

    // payments data
    const closeBtn = document.querySelector(".popup-payment__top-spn");
    const openBtn = document.getElementById("delevery-btn");
    const overlay = document.querySelector(".overlay");
    const popupContainer = document.querySelector(".popup-payment");
    const openCartPayments = document.querySelector(".payment__cart-btn");
    // delevery data

    const closeBtnDel = document.getElementById("popup-delevery-close");
    const openBtnDel = document.querySelector(".delevery__button");
    const overlayDel = document.querySelector(".delevery-overlay")
    const deleveryContainer = document.querySelector(".delevery-popup")
    const openCartDel = document.querySelector(".point__box-span");
    // delevery popup

    openCartPayments.addEventListener("click", () => {
        overlay.classList.add("open-overlay")
    })

    openCartDel.addEventListener("click", () => {
        overlayDel.classList.add("open-delevery-overlay");
    })


    openBtnDel.addEventListener("click", () => {
        overlayDel.classList.add("open-delevery-overlay")
    })

    closeBtnDel.addEventListener("click", () => {
        overlayDel.classList.remove("open-delevery-overlay")
    })

    overlayDel.addEventListener("click", (e) => {
        overlayDel.classList.remove("open-delevery-overlay");        
        e.stopPropagation();
    })

    deleveryContainer.addEventListener("click",  (e) => {
        e.stopPropagation()
    }) 

    // payments popup
    openBtn.addEventListener("click", () => {
        overlay.classList.add("open-overlay")
    })

    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("open-overlay")
    })

    overlay.addEventListener("click", (e) => {
        overlay.classList.remove("open-overlay");        
        e.stopPropagation();
    })

    popupContainer.addEventListener("click",  (e) => {
        e.stopPropagation()
    })  
})