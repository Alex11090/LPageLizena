// -----------------Modal-------------------------

// // Получаем элементы
const modal1 = document.getElementById("consultationModal1");
// // const modal2 = document.getElementById("consultationModal2");
// const openModalButton = document.querySelectorAll(".pupap-consultation_mail");
const openModalButtonReview = document.querySelector(".pupap-consultation_review");
const closeModalButton1 = modal1.querySelector(".close");
// const closeModalButton2 = modal2.querySelector(".close");

// Открытие модальных окон
openModalButtonReview.addEventListener("click", () => {
	modal1.style.display = "block";

});

// // openModalButton.forEach(elem => {
// // 	elem.addEventListener("click", () => {
// // 		modal2.style.display = "block";
// // 	});
// // });

// Закрытие модальных окон
closeModalButton1.addEventListener("click", () => {
	modal1.style.display = "none";
});

// closeModalButton2.addEventListener("click", () => {
// 	modal2.style.display = "none";
// });

// Закрытие модальных окон при клике вне их
window.addEventListener("click", (event) => {
	if (event.target === modal1) {
		modal1.style.display = "none";
	}
	// else if (event.target === modal2) {
	// 	modal2.style.display = "none";
	// }
});




// открытие меню (сайдбап) бургер------------------------------
document.getElementById("burger").addEventListener("click", function () {
	this.classList.toggle("open");
	document.getElementById("menu").classList.toggle("open");
});
// Закрытие меню при клике на ссылку
document.querySelectorAll("#menu a").forEach(link => {
	link.addEventListener("click", function () {
		document.getElementById("burger").classList.remove("open");
		document.getElementById("menu").classList.remove("open");
	});
});

// -----------------кнопка прокрутки----------------
const scrollToTopButton = document.getElementById('scrollToTop');
// Показываем/скрываем кнопку при прокрутке
const handleScrolls = () => {
	if (window.scrollY > 300) {
		scrollToTopButton.classList.add('visible');
		scrollToTopButton.classList.remove('hidden');
	} else {
		scrollToTopButton.classList.add('hidden');
		scrollToTopButton.classList.remove('visible');
	}
};

// Прокрутка вверх при клике на кнопку
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth', // Плавный переход
	});
};

// Добавляем обработчики событий
window.addEventListener('scroll', handleScrolls);
scrollToTopButton.addEventListener('click', scrollToTop);


// ----------------Swiper-----------------------------
let swiper;

function openSlider(index) {
	document.getElementById("modalSwiper").style.display = "flex";
	if (!swiper) {
		swiper = new Swiper(".mySwiper", {
			loop: true,
			navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
			autoplay: { delay: 3000 },
		});
	}
	swiper.slideTo(index, 0);
}

function closeSlider(event) {
	const modal = document.getElementById("modalSwiper");
	if (event.target === modal) { // Проверяем, что клик был именно по фону
		modal.style.display = "none";
	}
}

// Добавляем обработчик клика на модальное окно
document.getElementById("modalSwiper").addEventListener("click", closeSlider);

function closeSliderbtn() {
	document.getElementById("modalSwiper").style.display = "none";
}






// -----------анимация секций---------------------
const sections = document.querySelectorAll('.section');
const handleScroll = () => {
	sections.forEach(section => {
		const sectionTop = section.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;
		// Если секция попадает в область видимости
		if (sectionTop < windowHeight) {
			section.classList.add('visible');
		}

	});

};
// Запускаем при прокрутке и при загрузке страницы
window.addEventListener('scroll', handleScroll);
handleScroll();

// -----------------анимация .responsive-text-------------------------
// Выбор всех элементов с классом .responsive-text
const responsiveTXT = document.querySelectorAll('.responsive-text');

// Функция, которая добавляет класс .visible, если элемент в зоне видимости
const handleLoad = () => {
	responsiveTXT.forEach(resp => {
		const responsiveTextTop = resp.getBoundingClientRect().top; // Получаем позицию относительно окна
		// const windowHeight = window.innerHeight; // Высота окна браузера

		// Если элемент виден в окне
		if (responsiveTextTop) {
			resp.classList.add('visible'); // Добавляем класс visible
		}
	});
};

// Запуск функции при загрузке страницы
window.addEventListener('load', handleLoad);