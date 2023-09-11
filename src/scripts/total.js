window.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".order__btn");
    const checkbox = document.getElementById("payments");
    const totalSum = document.getElementById("total__sum");
    const debitContext = document.querySelector('.debit__text')
    const debitSub = document.querySelector(".debit__subtitle");
    const debitMobile = document.querySelector(".debit__mobile-text");
    const debitSubMob = document.querySelector(".debit__mobile-sub")

    debitContext.addEventListener("click", () => {
        button.textContent = `Оплатить ${totalSum.innerText} сом`;
    
        if (debitSub.classList.contains("debit__subtitle-hide")) {
            button.textContent = 'Заказать';
        }
    })

    document.getElementById("mob-wrap").addEventListener("click", () => {
        if (document.getElementById('mob-check').checked) {
            debitSubMob.classList.add("debit__subtitle-hide");
            button.textContent = `Оплатить ${totalSum.innerText} сом`;
        } else {
            debitSubMob.classList.remove("debit__subtitle-hide");
            button.textContent = `Заказать`;
        }
    })

    
})