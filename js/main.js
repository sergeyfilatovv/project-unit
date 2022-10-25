const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const searchButton = document.querySelector('.search__button');
const searchForm = document.querySelector('.search');



//Открытие формы поиска
searchButton.addEventListener('click', function (e) {

	if(!searchForm.classList.contains('search--visible')){

		e.preventDefault();
		searchForm.classList.toggle('search--visible');
	}else{

	}
});
//Трансформация кнопки в крестик
navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
	searchForm.classList.toggle('search--edit');

});

// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
		nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
	});
});