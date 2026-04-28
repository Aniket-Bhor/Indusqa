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
        const duration = 2000; // Total duration in ms

        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            let start = 0;
            const startTime = performance.now();

            const updateCount = (timestamp) => {
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smoother feel (easeOutExpo)
                const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                
                const currentCount = Math.floor(easedProgress * target);
                stat.innerText = currentCount + (target >= 20 ? '+' : '');

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    stat.innerText = target + '+';
                }
            };
            requestAnimationFrame(updateCount);
        });
    };

    // Intersection Observer for Stats
    const statsSection = document.querySelector('.stats-container');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                // Wait a bit or trigger when more visible
                setTimeout(() => {
                    animateStats();
                }, 200); 
                observer.unobserve(statsSection);
            }
        }, { 
            threshold: 0.7, // Trigger when 70% of the section is visible
            rootMargin: '0px 0px -50px 0px' // Slight offset to trigger closer to middle
        });
        observer.observe(statsSection);
     }
 
    // 4. Approach Steps Reveal Animation
    const approachSteps = document.querySelectorAll('.approach-step');
    if (approachSteps.length > 0) {
        const approachObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add stagger delay
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, index * 100);
                    approachObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        approachSteps.forEach(step => approachObserver.observe(step));
     }
 
    // 5. General Fade-In Animation
    const fadeElements = document.querySelectorAll('.fade-in-up');
    if (fadeElements.length > 0) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => fadeObserver.observe(el));
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
