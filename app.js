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

    // --- Member Carousel ---
    const members = [
        {
            name: '吐司 - Toast',
            image: 'images/Toast34.png',
            intro: [
                '看上去高冷的敖龍族女性，在黃金港有著自己的裝潢事務所，因緣際會認識了當初正在裝修店面的店長，之後決定來店裡上班。',
                '店裡是她的放鬆時刻，她時常斜靠在店內的一隅，帶著悠遠的目光看著店內發生的一切，興致上來時會特別有話聊，也喜歡聽別人的故事。',
                '「我有酒，你有故事嗎？」——她時常這樣問客人，卻鮮少說自己的事。'
            ],
            specialService: '特殊服務項目 : 1對1聊天'
        },
        {
            name: '焗烤喵/千層喵 - 阿喵',
            image: 'images/meow34.png',
            intro: [
                '在艾奧傑亞經營著萬事屋的雙胞胎兄弟檔，因為委託眾多，不一定會每日上班，兩人總是分開工作，所以他們不會一起出現。',
                '兩人都是溫柔體貼的拉拉菲爾族，據說是出生於烏爾達哈的中產家族，因為嚮往外面的冒險和幫助他人，再學習了各式各樣的能力後，兩人就出發在世界各地旅行接取各式委託。'
            ],
            specialService: '特殊服務項目 : 無'
        }
    ];

    let currentMemberIndex = 0;
    const prevBtn = document.querySelector('.arrow-left');
    const nextBtn = document.querySelector('.arrow-right');
    const memberPhotoWrapper = document.querySelector('.member-photo-wrapper');
    const memberInfoContainer = document.querySelector('.member-info-container');
    const memberName = document.querySelector('.member-name');
    const memberIntro = document.querySelector('.member-intro');

    if (prevBtn && nextBtn && memberPhotoWrapper && memberInfoContainer && memberName && memberIntro) {
        const updateMember = (newIndex, direction = 'next') => {
            const member = members[newIndex];
            const memberPhoto = memberPhotoWrapper.querySelector('img');

            // Remove previous classes
            memberPhotoWrapper.classList.remove('enter-right', 'enter-left', 'exit-left', 'exit-right');

            // Add directional exit animation
            if (direction === 'next') {
                memberPhotoWrapper.classList.add('exit-left');
            } else {
                memberPhotoWrapper.classList.add('exit-right');
            }

            // Add fade animation to text container
            memberInfoContainer.classList.remove('text-fade-enter');
            // Force reflow/repaint
            void memberInfoContainer.offsetWidth;

            // Wait for exit animation to complete (300ms)
            setTimeout(() => {
                if (memberPhoto) {
                    // Update photo src & alt
                    memberPhoto.src = member.image;
                    memberPhoto.alt = member.name;
                }

                // Update text content
                memberName.textContent = member.name;

                // Clear and rebuild intro paragraphs
                memberIntro.innerHTML = '';
                member.intro.forEach(text => {
                    const p = document.createElement('p');
                    p.className = 'intro-text';
                    p.textContent = text;
                    memberIntro.appendChild(p);
                });

                // Add special service
                const pService = document.createElement('p');
                pService.className = 'special-service';
                pService.textContent = member.specialService;
                memberIntro.appendChild(pService);

                // Swap photo exit -> enter classes
                memberPhotoWrapper.classList.remove('exit-left', 'exit-right');
                if (direction === 'next') {
                    memberPhotoWrapper.classList.add('enter-right');
                } else {
                    memberPhotoWrapper.classList.add('enter-left');
                }

                // Add text fade animation class
                memberInfoContainer.classList.add('text-fade-enter');
            }, 300);

            currentMemberIndex = newIndex;
        };

        prevBtn.addEventListener('click', () => {
            let nextIndex = currentMemberIndex - 1;
            if (nextIndex < 0) {
                nextIndex = members.length - 1;
            }
            updateMember(nextIndex, 'prev');
        });

        nextBtn.addEventListener('click', () => {
            let nextIndex = currentMemberIndex + 1;
            if (nextIndex >= members.length) {
                nextIndex = 0;
            }
            updateMember(nextIndex, 'next');
        });
    }
});
