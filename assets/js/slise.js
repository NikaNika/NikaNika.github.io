/*=============== PIZZA BY THE SLISE ===============*/
const optionsToppings = [
	'Гриби',
	'Кукурудза',
	'Томат',
	'Ковбаса копчена',
	'Болгарський перець',
	'Цибуля',
	'Маслини',
	'Зелень',
];
const diameterData = { 30: 111, 40: 174 };
let customerPizza = [];
let pizzaCounter = 0;
let pizzaCounterMax = 1;
const pizzaTable = document.getElementById('pizzaTable');
const pizzaToppingOptions = document.getElementById('pizzaToppingOptions');
const pizzaDiameterOptions = document.getElementById('pizzaDiameterOptions');
const diameterError = document.getElementById('pizzaDiameterErrors');
const pizzaTableErrors = document.getElementById('pizzaTableErrors');
const submitOrder = document.getElementById('submitOrder');
const pizzaImg = document.querySelector('.pizza__layers__img');
const pizzaTotalPrice = document.querySelector('.table-total');
const self = document.querySelector('.self');
let pizzaTableContent = '';
let pizzaToppingContent = '';
let pizzaDiameterContent = '';
let totalPrice = 0;
let toppingImg = [];

class Pizza {
	constructor() {
		this.toppings = '';
		this.diameter = 0;
		this.price = 0;
	}
	setToppings(value) {
		this.toppings = value;
		this.setPrice();
		return this.toppings;
	}
	setDiameter(value) {
		if (!isNaN(value)) {
			this.diameter = value;
		} else {
			console.error(value + ' is not a number.');
		}
		this.setPrice();
		return this.diameter;
	}
	setPrice() {
		this.price = 0;
		if (this.toppings) {
			this.price = this.toppings.split(',').length * 30.0;
		}
		this.price += diameterData[this.diameter];
		return this.price;
	}
	get getToppings() {
		return this.toppings;
	}
	get getDiameter() {
		return this.diameter;
	}
	get getPrice() {
		return this.price;
	}
}

// BUILDS FORM
// Adds 'topping' options to top of form
function showPizzaToppings() {
	pizzaToppingContent = ''; // Reset
	for (var i = 0; i < optionsToppings.length; i++) {
		pizzaToppingContent +=
			'<div class="checkbox"><label>' +
			'<input type="checkbox" name="pizzaTopping" value="' +
			optionsToppings[i] +
			'">' +
			optionsToppings[i] +
			'</label></div>';
	}
	pizzaToppingOptions.innerHTML = pizzaToppingContent;
}

// Adds 'diameter' options to top of form
function showPizzaDiameters() {
	pizzaDiameterContent = ''; // Reset
	for (var size in diameterData) {
		pizzaDiameterContent +=
			'<div class="radio"><label>' +
			'<input type="radio" name="pizzaDiameter" value="' +
			size +
			'">' +
			size +
			'см (' +
			diameterData[size].toFixed(2) +
			'грн.)</label></div>';
	}
	pizzaDiameterOptions.innerHTML = pizzaDiameterContent;
}

// SUBMIT ACTIONS

// Finds any checked 'topping' when submit clicked
function getSelectedTopping() {
	const topping = document.getElementsByName('pizzaTopping');
	let toppingList = '';
	for (let i = 0; i < topping.length; i++) {
		if (topping[i].checked) {
			toppingList += ', ' + topping[i].value;
			toppingImg.push(i);
		}
	}
	return toppingList.substring(1);
}

// Finds checked 'diameter' when submit clicked
function getSelectedDiameter() {
	const diameter = document.getElementsByName('pizzaDiameter');
	for (let i = 0; i < diameter.length; i++) {
		if (diameter[i].checked) {
			diameterError.innerHTML = '';
			return diameter[i].value;
		} else {
			diameterError.innerHTML = 'Ви не обрали розмір.';
		}
	}
}

// Submit's function that runs when clicked
function handleSubmitBtn() {
	let toppings = getSelectedTopping();
	let diameter = getSelectedDiameter();
	if (diameter) {
		addPizza(toppings, diameter);
	}
}

// Diable submit if max pizzas reached
function checkPizzaLimit() {
	if (pizzaCounter < pizzaCounterMax) {
		submitOrder.removeAttribute('disabled');
		pizzaTableErrors.innerHTML = '';
	} else {
		submitOrder.setAttribute('disabled', 'disabled');
		pizzaTableErrors.innerHTML = '';
	}
}

// TABLE OUTPUT
function showPizzaTable() {		
	if (customerPizza.length) {
		for (let i = 0; i < customerPizza.length; i++) {
			let checkToppings = customerPizza[i].getToppings;
			let pizzaNumberLabel = i + 1;
			if (checkToppings == '') {
				checkToppings = 'None';
			}
			pizzaTableContent += '<tr>';
			pizzaTableContent += '<td>' + pizzaNumberLabel + '</td>';
			pizzaTableContent +=
				'<td><button data-remove="' +
				i +
				'" onClick="deletePizza(' +
				i +
				')"><i class="fa-solid fa-circle-xmark"></i></button></td>';
			pizzaTableContent += '<td>' + checkToppings + '</td>';
			pizzaTableContent += '<td>' + customerPizza[i].getDiameter + 'см</td>';
			pizzaTableContent +=
				'<td>' + customerPizza[i].getPrice.toFixed(2) + 'грн.</td>';
			pizzaTableContent += '</tr>';
		}
	}		
	pizzaTable.innerHTML = pizzaTableContent;
	pizzaTotalPrice.innerHTML = totalPrice.toFixed(2) + ' грн.';
	self.setAttribute('data-price', totalPrice.toFixed(2));
}

// SHOW PIZZA IMG
function showPizzaImg() {
	if (toppingImg.length) {
		for (let i = 0; i < toppingImg.length; i++) {
			pizzaImg.innerHTML +=
				'<img class="pizza__layers__img__item" src="./assets/img/layers/topping' +
				(toppingImg[i] + 1) +
				'.png" alt="">';
		}
	} else {
		pizzaImg.innerHTML =
			'<img class="pizza__layers__img__item" src="./assets/img/layers/cake2.png" alt="" /><img class="pizza__layers__img__item" src="./assets/img/layers/sauce1.png" alt="" />';
	}
}

// MAIN PIZZA ORDER
function addPizza(toppings, diameter) {
	customerPizza[pizzaCounter] = new Pizza();
	customerPizza[pizzaCounter].setToppings(toppings);
	customerPizza[pizzaCounter].setDiameter(diameter);

	totalPrice += customerPizza[pizzaCounter].getPrice;
	pizzaCounter += 1;

	// Unchecks selections
	showPizzaToppings();
	showPizzaDiameters();

	showPizzaTable();
	checkPizzaLimit();

	showPizzaImg();
}

// DELETE ITEMS
function deletePizza(item) {
	totalPrice -= customerPizza[item].getPrice;
	pizzaCounter -= 1;

	customerPizza.splice(item, 1);

	showPizzaTable();
	checkPizzaLimit();

	toppingImg = [];
	showPizzaImg();
}

// ONLOAD
showPizzaToppings();
showPizzaDiameters();
submitOrder.addEventListener('click', handleSubmitBtn);
