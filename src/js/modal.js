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