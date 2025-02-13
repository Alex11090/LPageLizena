//  ------------modal--------------------
// Отримуємо елементи
const modal = document.getElementById("contactModal");
const openModalBtn = document.querySelectorAll(".open-modal-btn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.forEach(btn => {
	btn.addEventListener("click", function () {
		modal.style.display = "block";
	})
})

// Закриття модального вікна
closeModalBtn.onclick = function () {
	modal.style.display = "none";
}

// Закриття модального вікна при натисканні поза ним
window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
}




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