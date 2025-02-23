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