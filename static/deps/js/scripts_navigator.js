// Получаем все ссылки в навигационном меню
const navLinks = document.querySelectorAll('.navigation-menu a');

// Добавляем обработчик события на каждую ссылку
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        const targetId = link.getAttribute('href'); // Получаем ID целевой секции
        const targetSection = document.querySelector(targetId); // Получаем целевую секцию по ID

        // Плавный скролл к целевой секции
        targetSection.scrollIntoView({
            behavior: 'smooth' // Параметр для плавного скролла
        });
    });
});


// кнопка подробнее
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        const targetId = btn.getAttribute('href'); // Получаем href кнопки
        const targetSection = document.querySelector(targetId); // Находим целевую секцию

        // Прокручиваем плавно к целевой секции
        targetSection.scrollIntoView({
            behavior: 'smooth' // Плавная прокрутка
        });
    });
});

window.addEventListener('scroll', function() {
        var header = document.querySelector('.header-nav');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });



