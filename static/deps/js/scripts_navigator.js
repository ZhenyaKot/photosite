// Получаем все ссылки в навигационном меню
const navLinks = document.querySelectorAll('.navigation-menu a');

// Добавляем обработчик события на каждую ссылку
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href'); // Получаем href ссылки

        // Проверяем, является ли ссылка якорной
        if (href.startsWith('#')) {
            e.preventDefault(); // Предотвращаем стандартное поведение для якорных ссылок
            const targetId = href; // Получаем ID целевой секции
            const targetSection = document.querySelector(targetId); // Получаем целевую секцию по ID

            // Плавный скролл к целевой секции
            targetSection.scrollIntoView({
                behavior: 'smooth' // Параметр для плавного скролла
            });
        }
        // Если ссылка не якорная, перехват не используется, и браузер выполняет стандартное поведение
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

// Получаем ссылку на кнопку
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Показываем/скрываем кнопку при прокрутке
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block"; // Показать кнопку
    } else {
        scrollToTopBtn.style.display = "none"; // Скрыть кнопку
    }
};

// Прокрутка вверх
scrollToTopBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Плавная прокрутка
    });
});




let currentIndex = 0; // Текущий индекс видимой группы

function moveLeft(galleryId) {
    const gallery = document.getElementById(galleryId);
    const items = gallery.getElementsByClassName('gallery-item');
    const totalImages = items.length;

    // Фиксируем, сколько изображений показываем
    const imagesToShow = 3;

    // Проверяем, что можем сдвинуться влево
    if (currentIndex > 0) {
        currentIndex--; // Уменьшаем индекс группы
        updateGallery(gallery, items, currentIndex, imagesToShow);
    }
}

function moveRight(galleryId) {
    const gallery = document.getElementById(galleryId);
    const items = gallery.getElementsByClassName('gallery-item');
    const totalImages = items.length;

    // Фиксируем, сколько изображений показываем
    const imagesToShow = 3;

    // Проверяем, что можем сдвинуться вправо
    if (currentIndex < totalImages - imagesToShow) {
        currentIndex++; // Увеличиваем индекс группы
        updateGallery(gallery, items, currentIndex, imagesToShow);
    }
}

function updateGallery(gallery, items, currentIndex, imagesToShow) {
    const itemWidth = items[0].offsetWidth; // Ширина одного изображения

    // Вычисляем новое смещение, учитывая, что показываем три изображения
    const newOffset = -(currentIndex * itemWidth); // Смещение на ширину одного изображения
    gallery.style.transform = `translateX(${newOffset}px)`; // Применяем смещение
}

// Инициализация - показываем 3 изображения
document.querySelectorAll('.gallery-images').forEach((gallery) => {
    gallery.style.transform = 'translateX(0)';
});

document.addEventListener("DOMContentLoaded", function() {
    const notification = document.getElementById('notification');
    if (notification) {
        setTimeout(() => {
            notification.style.transition = 'opacity 0.5s'; // Анимация
            notification.style.opacity = '0'; // Установка прозрачности

            // Слушаем событие завершения перехода
            notification.addEventListener('transitionend', () => {
                notification.remove(); // Удаляем элемент из DOM
            });
        }, 10000); // Скрыть через 10 секунд
    }
});









