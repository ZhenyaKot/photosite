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




let currentIndex = 0;

function moveLeft(galleryId) {
    const imagesContainer = document.getElementById(galleryId);
    const totalImages = imagesContainer.children.length;

    if (currentIndex > 0) {
        currentIndex--;
    }

    // Прокрутка изображений
    imagesContainer.style.transform = `translateX(-${currentIndex * 400}px)`;
}

function moveRight(galleryId) {
    const imagesContainer = document.getElementById(galleryId);
    const totalImages = imagesContainer.children.length;

    if (currentIndex < totalImages - 1) {
        currentIndex++;
    }

    // Прокрутка изображений
    imagesContainer.style.transform = `translateX(-${currentIndex * 400}px)`;
}









// СКРИПТ ДЛЯ ПРОКРУТКИ ФОТОГРАФИЙ ВПРАВО И ВЛЕВО
//<script>
//        function moveRight(galleryId) {
//            const gallery = document.getElementById(galleryId);
//            gallery.scrollBy({ left: 210, top: 0, behavior: 'smooth' });
//        }
//
//        function moveLeft(galleryId) {
//            const gallery = document.getElementById(galleryId);
//            gallery.scrollBy({ left: -210, top: 0, behavior: 'smooth' });
//        }
//    </script>


