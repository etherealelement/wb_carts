window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    // order content
    const orderTotalHint = document.querySelector(".order__total-ghost");
    const orderTooltip = document.querySelector(".order__total-tooltip");
    const orderTooltip2 = document.getElementById("tooltip-2")
    const orderTotalHint2 = document.getElementById("ghost-2");
    const orderTooltip3 = document.getElementById("tooltip-3")
    const orderTotalHint3 = document.getElementById("ghost-3");

    // place content
    const placeHint = document.querySelector(".order__container-span");
    const placeTooltip = document.getElementById("tooltip-place-1");
    const placeHint2 = document.getElementById("place-2");
    const placeTooltip2 = document.getElementById("tooltip-place-2");
    const placeHint3 = document.getElementById("place-3");
    const placeTooltip3 = document.getElementById("tooltip-place-3");

    // delevery content
    
    const deleveryHint = document.querySelector(".delevery__info-green");
    const deleveryTooltip = document.getElementById("info-tooltip-1");

    // redelevry content

    const redeleveryHint = document.querySelector(".redelivery__green");
    const redeleveryTooltip = document.getElementById("redelivery-tooltip-1")

    redeleveryHint.addEventListener("mouseover", () => {
        redeleveryTooltip.classList.add("redelivery__visible")
    });

    redeleveryHint.addEventListener("mouseleave", () => {
        redeleveryTooltip.classList.remove("redelivery__visible")
    })



    deleveryHint.addEventListener("mouseover", () => {
        deleveryTooltip.classList.add("info-visible")
    })

    deleveryHint.addEventListener("mouseleave", () => {
        deleveryTooltip.classList.remove("info-visible")
    })



    placeHint3.addEventListener("mouseover", () => {
        placeTooltip3.classList.add("visible-tooltip-place");
    })

    placeHint3.addEventListener("mouseleave", () => {
        placeTooltip3.classList.remove("visible-tooltip-place");
    })


    placeHint.addEventListener("mouseover", () => {
        placeTooltip.classList.add("visible-tooltip-place");
    })

    placeHint.addEventListener("mouseleave", () => {
        placeTooltip.classList.remove("visible-tooltip-place");
    })

    placeHint2.addEventListener("mouseover", () => {
        placeTooltip2.classList.add("visible-tooltip-place");
    })

    placeHint2.addEventListener("mouseleave", () => {
        placeTooltip2.classList.remove("visible-tooltip-place");
    })


    // order logic
    orderTotalHint.addEventListener("mouseover", () => {
        orderTooltip.classList.add("visible-tooltip");
    })
    orderTotalHint.addEventListener("mouseleave", () => {
        orderTooltip.classList.remove("visible-tooltip");
    })

    orderTotalHint2.addEventListener("mouseover", () => {
        orderTooltip2.classList.add("visible-tooltip");
    })
    orderTotalHint2.addEventListener("mouseleave", () => {
        orderTooltip2.classList.remove("visible-tooltip");
    })

    orderTotalHint3.addEventListener("mouseover", () => {
        orderTooltip3.classList.add("visible-tooltip");
    })
    orderTotalHint3.addEventListener("mouseleave", () => {
        orderTooltip3.classList.remove("visible-tooltip");
    })


})