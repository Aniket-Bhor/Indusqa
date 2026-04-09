document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation (Simple implementation)
    const setupMobileNav = () => {
        // ...
    };

    // 2. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Stats Counter Animation
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat-number');
        const speed = 200;

        stats.forEach(stat => {
            const updateCount = () => {
                const target = +stat.getAttribute('data-target');
                const count = +stat.innerText;
                const inc = target / speed;

                if (count < target) {
                    stat.innerText = Math.ceil(count + inc) + (target >= 20 ? '+' : '');
                    setTimeout(updateCount, 1);
                } else {
                    stat.innerText = target + '+';
                }
            };
            updateCount();
        });
    };

    // Intersection Observer for Stats
    const statsSection = document.querySelector('.stats-container');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateStats();
                observer.unobserve(statsSection);
            }
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }

    // 4. Easter Eggs
    // Konami Code: Up Up Down Down Left Right Left Right B A
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateAuditMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    const activateAuditMode = () => {
        document.body.classList.toggle('audit-mode');
        console.log("You found the backend ninja zone 🥷");
        alert("🛡️ AUDIT MODE ACTIVATED: Compliance is sexy! 🛡️");
    };

    // Logo Click Animation
    const logo = document.querySelector('.logo img');
    let logoClicks = 0;
    if (logo) {
        logo.addEventListener('click', () => {
            logoClicks++;
            if (logoClicks >= 5) {
                logo.style.transform = 'rotate(360deg)';
                logo.style.transition = 'transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                setTimeout(() => {
                    logo.style.transform = 'rotate(0deg)';
                    logoClicks = 0;
                }, 1000);
            }
        });
    }

    // Console Message
    console.log("%cINDUSQA - Quality | Certification | Consulting", "color: #f39221; font-size: 20px; font-weight: bold;");
    console.log("Looking for vulnerabilities? Compliance is the answer. 🛡️");

    // 5. Contact Form Handling (Mock)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Store in LocalStorage for prototype
            const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
            submissions.push({
                ...data,
                date: new Date().toISOString()
            });
            localStorage.setItem('contact_submissions', JSON.stringify(submissions));

            alert('Thank you! Your message has been received. Our team will contact you soon.');
            contactForm.reset();
        });
    }
});
