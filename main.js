// Telegram Bot Configuration
// Настроено для отправки сообщений в Telegram

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with data-aos attribute
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Initialize smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize form handling
    initContactForm();
    
    // Initialize hover effects
    initHoverEffects();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const tgName = this.querySelector('input').value.trim();
            const message = this.querySelector('textarea').value.trim();
            const text = `Новая заявка с сайта:\nTelegram: ${tgName}\nВопрос: ${message}`;

            fetch(`https://api.telegram.org/bot7936936135:AAENnQtZ_u4C88PEHMYri5aNIyUqVXXKnEA/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: 821740830,
                    text: text
                })
            })
            .then(res => {
                document.getElementById('formMessage').style.display = 'block';
                this.reset();
                setTimeout(() => {
                    document.getElementById('formMessage').style.display = 'none';
                }, 4000);
            })
            .catch(() => {
                alert('Ошибка отправки. Попробуйте позже.');
            });
        });
    }
}

// Hover effects for collection cards
function initHoverEffects() {
    const collectionCards = document.querySelectorAll('.collection-card');
    
    collectionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Navbar background on scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.nav');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.1)';
        }
    });
}

// Initialize additional effects
document.addEventListener('DOMContentLoaded', () => {
    initParallaxEffect();
    initNavbarScroll();
});

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScrollHandler = debounce(() => {
    // Scroll-based animations can be added here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add loading animation for images
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        console.log('Loading image:', img.src);
        
        img.addEventListener('load', () => {
            console.log('Image loaded successfully:', img.src);
            img.style.opacity = '1';
        });
        
        img.addEventListener('error', () => {
            console.error('Failed to load image:', img.src);
            img.style.opacity = '1';
            img.style.background = '#f0f0f0';
            img.style.display = 'flex';
            img.style.alignItems = 'center';
            img.style.justifyContent = 'center';
            img.style.color = '#666';
            img.style.fontSize = '14px';
            img.innerHTML = 'Изображение не найдено';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
}

// Initialize image loading
document.addEventListener('DOMContentLoaded', initImageLoading);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or overlays
        const modals = document.querySelectorAll('.modal, .overlay');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }
});

// Add touch support for mobile devices
function initTouchSupport() {
    const touchElements = document.querySelectorAll('.collection-card, .cta-button');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', () => {
            element.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', () => {
            element.style.transform = '';
        });
    });
}

// Initialize touch support
document.addEventListener('DOMContentLoaded', initTouchSupport); 