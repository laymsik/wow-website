const burger = document.querySelector('.header__burger');
const navLinks = document.querySelector('.header__nav-links');
const navLinksLi = document.querySelectorAll('.header__nav-links li');

// Функция для закрытия меню
function closeMenu() {
    navLinks.classList.remove('nav-active');
    burger.classList.remove('toggle');
}

// Открытие/закрытие меню при клике на бургер
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Закрытие меню при клике на ссылку
navLinksLi.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (event) => {
    const isClickInside = navLinks.contains(event.target) || burger.contains(event.target);
    if (!isClickInside) {
        closeMenu();
    }
});

// 

const typedTextSpan = document.querySelector(".hero__typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["героев Великой Отечественной войны.", "героев Второй Мировой войны."];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});