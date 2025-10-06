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
