window.addEventListener("DOMContentLoaded", () => {
	
	const formatNumber = (x) => x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
	const ACTION = {
		PLUS: 'plus',
		MINUS: 'minus',
		MAX: "max-2",
	}

	const totalPriceWrapper = document.getElementById("total__sum");
	const totalPriceSecond = document.getElementById("sum-total")
	const getItemSubTotalPrice = (input) => Number(input.value) * Number(input.dataset.price);
	const setTotalPrice = (value) => {
		totalPriceWrapper.textContent = formatNumber(value);
		totalPriceWrapper.dataset.value = value;

		totalPriceSecond.textContent = `${formatNumber(value)} сом`;
		totalPriceSecond.dataset.value = value;


	};


	let totalCost = 0;

	[...document.querySelectorAll(".orders__wrap")].forEach((item) => {
		totalCost += getItemSubTotalPrice(
			item.querySelector(".order__counter-spn")
		);
	});

	setTotalPrice(totalCost);
	// buttons
	const calculateSeparateItem = (item, action) => {
		const input = item.querySelector(".order__counter-spn");

		switch (action) {
			case ACTION.PLUS:
				input.value++;
				setTotalPrice(Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price));
				break;

			case ACTION.MINUS:
				input.value--;
				setTotalPrice(Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price));
				break;
			default:
				break;
		}

		const itemArr = document.querySelectorAll(".order__counter-spn");

	let data = [];
	for (const item of itemArr) {
		data.push(+item.value)
	}

	document.querySelector(".sum__item-text").innerText = `${data.slice(0,3).reduce((a,c) => a + c,0)} товара`

		item.querySelector(".order__total-price").textContent = `${formatNumber(getItemSubTotalPrice(input))} сом`;
	};

	document.querySelectorAll(".orders__wrap").forEach((item) => {
		item.addEventListener("click", (event) => {
			if (event.target.classList.contains("btn-minus")) {
				const input = event.target.closest(".orders__wrap").querySelector(".order__counter-spn");

				if (Number(input.value) !== 1) {
					calculateSeparateItem(
						event.target.closest(".orders__wrap"),
						ACTION.MINUS
					);
					document.querySelector(".btn-minus").classList.add("btn-disable")
				} else {
					document.querySelector(".btn-minus").classList.remove("btn-disable")
				}
			}

			if (event.target.classList.contains("btn-plus")) {

				calculateSeparateItem(
					event.target.closest(".orders__wrap"),
					ACTION.PLUS
				);
			}
		});

		
	});

});
