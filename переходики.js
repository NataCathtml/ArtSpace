// Active navigation state management
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('.section');

        // Function to update active nav link
        function updateActiveNav() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }

        // Listen for scroll events
        window.addEventListener('scroll', updateActiveNav);

        // Mobile menu toggle functionality
        const menuToggle = document.getElementById('menuToggle');
        const navLinksContainer = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinksContainer.contains(e.target)) {
                navLinksContainer.classList.remove('active');
            }
        });

        const numStars = 200; // Кол-во звёзд

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
          star.classList.add("star");

        // Случайный размер
        const size = Math.random() * 3 + 1;
        star.style.width = size + "px";
          star.style.height = size + "px";
          

        // Случайная позиция
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";

        // Разная скорость мерцания
        star.style.animationDuration = Math.random() * 3 + 1 + "s";

        document.body.appendChild(star);
      }

      // Опционально: лёгкое движение звёзд (эффект "плывущего неба")
      function moveStars() {
        document.querySelectorAll(".star").forEach((star) => {
          let top = parseFloat(star.style.top);
          top += 0.05; // скорость
          if (top > window.innerHeight) top = 0;
          star.style.top = top + "px";
        });
        requestAnimationFrame(moveStars);
      }
      moveStars();
      

//  Карусель карусель бей в жилудок не жалей:)
      
document.addEventListener('DOMContentLoaded', () => {

    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const slideHeight = slides[0].getBoundingClientRect().height;

    // --- 1. Клонирование слайдов для зацикливания ---
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    track.append(firstClone);
    track.prepend(lastClone);

    const allSlides = Array.from(track.children);
    let currentIndex = 1; // Начинаем с первого "настоящего" слайда

    // --- 2. Начальная позиция ---
    track.style.transform = `translateY(-${slideHeight * currentIndex}px)`;

    // --- 3. Функции для прокрутки ---
    const moveToSlide = (index) => {
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateY(-${slideHeight * index}px)`;
    };

    // --- 4. Обработчики кнопок ---
    nextButton.addEventListener('click', () => {
        currentIndex++;
        moveToSlide(currentIndex);

        // Если дошли до клона в конце, перескакиваем на первый реальный слайд
        if (currentIndex === allSlides.length - 1) {
            setTimeout(() => {
                track.style.transition = 'none'; // Отключаем анимацию для резкого перехода
                currentIndex = 1;
                track.style.transform = `translateY(-${slideHeight * currentIndex}px)`;
            }, 500); // 500ms - столько же, сколько длится анимация
        }
    });

    prevButton.addEventListener('click', () => {
        currentIndex--;
        moveToSlide(currentIndex);

        // Если дошли до клона в начале, перескакиваем на последний реальный слайд
        if (currentIndex === 0) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = allSlides.length - 2;
                track.style.transform = `translateY(-${slideHeight * currentIndex}px)`;
            }, 500);
        }
    });
});

// делаем так чтобы навигация пропадала когда листаешь вниз

  let lastScrollTop = 0;
  const nav = document.querySelector('.navbar'); // замени .navbar на свой класс!

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Скроллим вниз — скрыть
      nav.classList.add('hidden-nav');
    } else {
      // Скроллим вверх — показать
      nav.classList.remove('hidden-nav');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // защита от отрицательных значений
  });
