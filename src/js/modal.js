// document.addEventListener('DOMContentLoaded', function() {
//     var modal = document.getElementById('modal');
//     var btn = document.querySelector('.rent-home__button');
//     var closeBtn = document.getElementById('closeModal');

//     btn.addEventListener('click', function() {
//         modal.style.display = 'block';
//     });

//     closeBtn.addEventListener('click', function() {
//         modal.style.display = 'none';
//     });
// });
// Получаем элементы модалки и кнопку закрытия
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const openModalButton = document.querySelector('.rent-home__button');

// Функция для открытия модалки
const openModal = () => {
  modal.style.display = 'block';
  document.body.classList.add('no-scroll');
}

// Функция для закрытия модалки
const closeModalFunc = () => {
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll');
}

// Добавляем обработчик событий на кнопку открытия модалки
openModalButton.addEventListener('click', openModal);

// Добавляем обработчик событий на кнопку закрытия модалки
closeModal.addEventListener('click', closeModalFunc);