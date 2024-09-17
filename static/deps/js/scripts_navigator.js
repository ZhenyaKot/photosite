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




let currentIndex = {
    portraits: 0,
    fashion: 0,
    beauty: 0,
    studio: 0,
};

function getContainerWidth(galleryId) {
    const imagesContainer = document.getElementById(galleryId);
    return imagesContainer.clientWidth; // Получаем ширину контейнера
}

function moveLeft(galleryId) {
    if (currentIndex[galleryId] > 0) {
        currentIndex[galleryId]--;
        updateGalleryPosition(galleryId);
    }
}

function moveRight(galleryId) {
    const imagesContainer = document.getElementById(galleryId);
    const imagesCount = imagesContainer.children.length;

    if (currentIndex[galleryId] < imagesCount - 1) {
        currentIndex[galleryId]++;
        updateGalleryPosition(galleryId);
    }
}

function updateGalleryPosition(galleryId) {
    const imagesContainer = document.getElementById(galleryId);
    const itemWidth = 415; // Ширина одного изображения + отступы
    const offset = currentIndex[galleryId] * itemWidth; // Вычисляем необходимый сдвиг
    imagesContainer.style.transform = `translateX(-${offset}px)`;
}

// Вызывайте эту функцию при загрузке страницы, чтобы установить первоначальное состояние
window.onload = () => {
    const galleries = ['portraits', 'fashion', 'beauty', 'studio'];
    galleries.forEach(galleryId => {
        updateGalleryPosition(galleryId);
    });
};










