window.addEventListener("DOMContentLoaded", () => {
const orderList = document.querySelector(".orders__list");
const ordersSpan = document.querySelector(".orders__box-spn");
const ubsenceList = document.querySelector(".ubsence__list");
const hideSpan = document.querySelector(".orders__box-span");

ordersSpan.addEventListener("click", () => {
    if (orderList.classList.contains("hide__orders-list")) {
        orderList.classList.remove("hide__orders-list")
    } else {
        orderList.classList.add("hide__orders-list")
    }
})

hideSpan.addEventListener("click", () => {
    if (ubsenceList.classList.contains("hide__ubsence-list")) {
        ubsenceList.classList.remove("hide__ubsence-list")
    } else {
        ubsenceList.classList.add("hide__ubsence-list")
    }
})


})
