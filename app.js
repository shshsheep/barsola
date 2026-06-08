document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Toggle hamburger icon animation states
            const bars = navToggle.querySelectorAll('.bar');
            if (navToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }

    // --- Smooth Scroll for Internal Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Scroll Fade-In Animations ---
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        const checkVisibility = () => {
            fadeElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (rect.top <= windowHeight * 0.85) {
                    el.classList.add('visible');
                }
            });
        };
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Initial check
    }

    // --- Set Default Date to Tomorrow in Reservation Form ---
    const bookingDateInput = document.getElementById('bookingDate');
    if (bookingDateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const yyyy = tomorrow.getFullYear();
        const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const dd = String(tomorrow.getDate()).padStart(2, '0');
        bookingDateInput.value = `${yyyy}-${mm}-${dd}`;
        bookingDateInput.min = `${yyyy}-${mm}-${dd}`; // Cannot book past dates
    }

    // --- Reservation System Modal Flow ---
    const bookingForm = document.getElementById('bookingForm');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalSummary = document.getElementById('modalSummary');

    if (bookingForm && modalOverlay && modalCloseBtn && modalSummary) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Retrieve form inputs
            const name = document.getElementById('bookingName').value.trim();
            const phone = document.getElementById('bookingPhone').value.trim();
            const date = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;
            const guests = document.getElementById('bookingGuests').value;
            const areaSelect = document.getElementById('bookingArea');
            const areaText = areaSelect.options[areaSelect.selectedIndex].text;
            const notes = document.getElementById('bookingNotes').value.trim() || '無特殊需求';

            // Generate booking code
            const bookingCode = 'BS' + Math.floor(100000 + Math.random() * 900000);

            // Construct summary html
            modalSummary.innerHTML = `
                <div class="summary-row">
                    <span class="summary-label">預約編號</span>
                    <span class="summary-val" style="color: #c4a493; font-weight: 600;">${bookingCode}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">預約人姓名</span>
                    <span class="summary-val">${name}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">聯絡電話</span>
                    <span class="summary-val">${phone}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">預約時間</span>
                    <span class="summary-val">${date} ＠ ${time}</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">人數 / 區域</span>
                    <span class="summary-val">${guests} 位 ｜ ${areaText}</span>
                </div>
                <div class="summary-row" style="flex-direction: column; gap: 0.2rem; align-items: flex-start;">
                    <span class="summary-label">備註事項</span>
                    <span class="summary-val" style="font-weight: 300; margin-top: 0.2rem; line-height: 1.5;">${notes}</span>
                </div>
            `;

            // Open Modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop background scrolling
        });

        // Close Modal
        const closeModal = () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Resume background scrolling
            bookingForm.reset(); // Reset fields

            // Reset Tomorrow Date
            if (bookingDateInput) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                const yyyy = tomorrow.getFullYear();
                const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
                const dd = String(tomorrow.getDate()).padStart(2, '0');
                bookingDateInput.value = `${yyyy}-${mm}-${dd}`;
            }
        };

        modalCloseBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
});
