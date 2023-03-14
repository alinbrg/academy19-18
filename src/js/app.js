// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.
const removeBtn = document.querySelector("#remove-btn");
removeBtn.addEventListener("click", (e) => {
	// console.log(removeBtn, e.target);
	removeBtn.remove();
	// e.target.remove();
});

// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:  https://picsum.photos/1400/800  ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით) , ასევე  დავამატოთ alt ატრიბუტიც. თუ საჭირო იქნება დაამატეთ კლასიც (ჯავასკრიპტიდან) და მიანიჭეთ სტილები css-დან (სქროლი არ უნდა გვქონდეს).
const homeworkSection = document.querySelector(".homework");
const newImg = document.createElement("img");

newImg.setAttribute("src", "https://picsum.photos/1400/800");
newImg.setAttribute("alt", "random image");

newImg.classList.add("random-img");

homeworkSection.append(newImg);

// 3. html-ში შექმენით <section id="countries-list"></section>
const countriesSection = document.querySelector("#countries-list");

// 4.
//     4.1 გითჰაბის გაზიარებულ რეპოზიტორში ნახეთ ფაილი => homework.js => აქ გვაქვს countries  მასივი რომელიც შედგება 4 ობიექტისგან.
console.log(countries);

//     4.2. countries   მასივიდან .map ის საშულებით შექმენით html სტრინგი (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ ატვირთული ფოტოს მსგავსი (სტილები დაადეთ css ის საშუალებით, კლასები ჯავასკრიპტიდან, ვიზუალის კიდევ უფრო გაუმჯობესებაც შეიძლება ^^).

//    4.3 დიზაინში (countries1.jpeg)  country card ზე არის სურათი (დროშა, png) და ქვეყნის ოფიციალური სახელი და  თქვენ აქ უნდა ჩასვათ ქვეყნის flag და official სახელი (ორივე ობიექტია და სწორი მნიშვნელობა უნდა ამოიღოთ).

// დავამატოთ ღილაკები წაშლა და ინფო -  ჯავასკრიპტიდან (როგორც ფოტოზეა)
//    4.4 ეს html სტრინგი ჩასვით ამ სექციაში: <section id="countries-list"></section>

// 5.  (optional) წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი  country   card-ი, ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ დაატებითი ინფო ამ კონკრეტული ქვეყნის capital, area, population (თავიდანვე უნდა გვქონდეს ეს ცხრილებიც დამატებული ქარდებზე, უბრალოდ არ უნდა ჩანდეს და ღილაკზე კლიკით უნდა გამოჩნდეს)
// countries2.jpeg ფოტოზე მოცემული ცხრილის მსგავსად

function renderCountries(arr) {
	// let htmlStr = "";

	// arr.forEach((el) => {
	// 	htmlStr += `
	// 	<div class="country">
	// 		<img src="${el.flags.png}" alt="${el.flags.alt}" />
	// 		<h3>${el.name.official}</h3>
	// 		<div class="btns">
	// 			<button class="btn see-more">see more info</button>
	// 			<button class="btn remove-card">remove </button>
	// 		</div>
	// 		<table class="hidden">
	// 			<tbody>
	// 				<tr>
	// 					<th>capital</th>
	// 					<td>${el.capital.join(", ")}</td>
	// 				</tr>
	// 				<tr>
	// 					<th>area</th>
	// 					<td>${el.area}</td>
	// 				</tr>
	// 				<tr>
	// 					<th>population</th>
	// 					<td>${el.population}</td>
	// 				</tr>
	// 			</tbody>
	// 		</table>
	// 	</div>
	// 	`;
	// });

	// console.log(htmlStr);

	const renderedHtml = arr
		.map((el) => {
			return `
		<div class="country">
			<img src="${el.flags.png}" alt="${el.flags.alt}" />
			<h3>${el.name.official}</h3>
			<div class="btns">
				<button class="btn see-more">see more info</button>
				<button class="btn remove-card">remove </button>
			</div>
			<table class="hidden">
				<tbody>
					<tr>
						<th>capital</th>
						<td>${el.capital.join(", ")}</td>
					</tr>
					<tr>
						<th>area</th>
						<td>${el.area}</td>
					</tr>
					<tr>
						<th>population</th>
						<td>${el.population}</td>
					</tr>
				</tbody>
			</table>
		</div>
		`;
		})
		.join("");

	// console.log(renderedHtml);
	countriesSection.innerHTML = renderedHtml;

	const removeBtns = countriesSection.querySelectorAll(".remove-card");
	const seeMoreBtns = countriesSection.querySelectorAll(".see-more");

	// console.log(removeBtns, seeMoreBtns);

	seeMoreBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			// console.log(btn.closest(".country"));
			const table = btn.closest(".country").querySelector("table");
			// console.log(table);

			// const table2 = btn.parentElement.nextElementSibling;
			// console.log(table2);

			table.classList.toggle("hidden");
		});
	});

	removeBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			// console.log(btn.closest(".country"));
			// console.log(btn.parentElement.parentElement);
			btn.closest(".country").remove();
		});
	});
}

renderCountries(countries);

// DRY  don't repeat yourself

// async

function printFor(num) {
	for (let i = 0; i < num; i++) {
		console.log(i);
	}
}

function syncFn() {
	console.log("start sync function");
	printFor(20);
	console.log("after for");
}

function asyncFn() {
	console.log("start async function");
	setTimeout(printFor, 2000, 5);
	console.log("after for");
}

// setInterval(() => {
// 	console.log("set interval");
// }, 5000);

const startTimeout = document.querySelector(".start-timeout");
const stopTimeout = document.querySelector(".stop-timeout");
const startInterval = document.querySelector(".start-interval");
const stopInterval = document.querySelector(".stop-interval");

let timeoutID = null;
let intervalID = null;

function startTimeoutFn() {
	console.log("start timeout fn");
	timeoutID = setTimeout(() => {
		console.log("start timeout fn");
	}, 5000);
}

function stopTimeoutFn() {
	console.log("clear timeout fn");

	clearTimeout(timeoutID);
	timeoutID = null;
}

startTimeout.addEventListener("click", startTimeoutFn);
stopTimeout.addEventListener("click", stopTimeoutFn);

function startIntervalFn() {
	console.log("start interval fn");
	intervalID = setInterval(() => {
		console.log("set interval");
	}, 2000);
}

function stopIntervalFn() {
	clearInterval(intervalID);
	intervalID = null;
}

startInterval.addEventListener("click", startIntervalFn);
stopInterval.addEventListener("click", stopIntervalFn);

// slider
const slides = document.querySelectorAll(".slide");
const leftArr = document.querySelector(".left");
const rightArr = document.querySelector(".right");

let activeSlideIndex = 0;

function renderSlides() {
	slides.forEach((slide, index) => {
		if (activeSlideIndex === index) {
			slide.classList.add("active-slide");
		} else {
			slide.classList.remove("active-slide");
		}
	});
}

function nextSlide() {
	if (activeSlideIndex === slides.length - 1) {
		activeSlideIndex = 0;
	} else {
		activeSlideIndex++;
	}

	renderSlides();
}

function prevSlide() {
	if (activeSlideIndex === 0) {
		activeSlideIndex = slides.length - 1;
	} else {
		activeSlideIndex--;
	}
	renderSlides();
}

function createSlider() {
	renderSlides();

	rightArr.addEventListener("click", nextSlide);
	leftArr.addEventListener("click", prevSlide);

	// setInterval(nextSlide, 6000);
	document.addEventListener("keyup", (e) => {
		// console.log(e.code);
		if (e.code === "ArrowRight") {
			nextSlide();
		}
		if (e.code === "ArrowLeft") {
			prevSlide();
		}
	});
}

createSlider();
