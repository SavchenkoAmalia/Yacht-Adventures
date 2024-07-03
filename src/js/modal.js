document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var btn = document.querySelector('.rent-home__button');
    var closeBtn = document.getElementById('closeModal');

    btn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
