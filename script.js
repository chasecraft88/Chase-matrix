// Animation for the hero section
gsap.from('.hero h2', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('.hero p', { opacity: 0, x: -50, duration: 1, delay: 1 });

// Scroll animations
gsap.from('.section', {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: '.section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
    },
});

// Mouse interactions
document.addEventListener('mousemove', (e) => {
    gsap.to('.element-to-follow-mouse', {
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
    });
});

// 3D transformations
gsap.to('.three-d-element', {
    rotationY: 360,
    duration: 2,
    repeat: -1,
    ease: 'power2.out',
});

// Loading animation
gsap.to('.spinner', {
    rotation: 360,
    duration: 1,
    repeat: -1,
    ease: 'linear',
});

// Draggable elements
gsap.registerPlugin(Draggable);
Draggable.create('.draggable-element', {
    type: 'x,y',
    bounds: '.draggable-area',
    edgeResistance: 0.65,
});

// Text animation
const text = 'Welcome to ChaseCraft Universe!';
const textElement = document.querySelector('.animated-text');
const duration = 2;

gsap.fromTo(
    textElement,
    { opacity: 0 },
    { opacity: 1, duration: 1 }
);

gsap.fromTo(
    textElement,
    { width: 0 },
    { width: '100%', duration, delay: 1 }
);

gsap.to(
    textElement,
    { text: text, duration, delay: 2 }
);

// Animation for the hero section
gsap.from('.hero h2', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('.hero p', { opacity: 0, x: -50, duration: 1, delay: 1 });

// Scroll animations
gsap.from('.section', {
    opacity: 0,
    y: 100,
    scrollTrigger: {
        trigger: '.section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
    },
});

// Mouse interactions
document.addEventListener('mousemove', (e) => {
    gsap.to('.element-to-follow-mouse', {
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
    });
});

// 3D transformations
gsap.to('.three-d-element', {
    rotationY: 360,
    duration: 2,
    repeat: -1,
    ease: 'power2.out',
});

// Loading animation
gsap.to('.spinner', {
    rotation: 360,
    duration: 1,
    repeat: -1,
    ease: 'linear',
});

// Draggable elements
gsap.registerPlugin(Draggable);
Draggable.create('.draggable-element', {
    type: 'x,y',
    bounds: '.draggable-area',
    edgeResistance: 0.65,
});

// Text animation
const text = 'Welcome to ChaseCraft Universe!';
const textElement = document.querySelector('.animated-text');
const duration = 2;

gsap.fromTo(
    textElement,
    { opacity: 0 },
    { opacity: 1, duration: 1 }
);

gsap.fromTo(
    textElement,
    { width: 0 },
    { width: '100%', duration, delay: 1 }
);

gsap.to(
    textElement,
    { text: text, duration, delay: 2 }
);