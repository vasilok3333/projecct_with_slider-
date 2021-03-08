// Hamburger

const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

const HAMBURGER = document.getElementById('hamburger');
const HAMBURGER_MENU = document.getElementById('hamburger_menu');
const HAMBURGER_CLOSE = document.getElementById('hamburger_close');
const HAMBURGER_ITEMS = document.getElementsByClassName('hamb__item');
console.log(HAMBURGER_ITEMS)

HAMBURGER.addEventListener('click', () => {
    HAMBURGER_MENU.classList = ('hamburger-menu show');
});

HAMBURGER_CLOSE.addEventListener('click', () => {
    HAMBURGER_MENU.classList = ('hamburger-menu');
});

for (let i =0; i < HAMBURGER_ITEMS.length; i++) {
    HAMBURGER_ITEMS[i].addEventListener('click', () => {
        HAMBURGER_MENU.classList = ('hamburger-menu');
    })    
}

HAMBURGER_ITEMS[0].addEventListener('click', () => {
    HAMBURGER_MENU.classList = ('hamburger-menu');
})

// Hamburger

// Add toggle fucntion for changing classes in plan section

const CHANGE_COMPANY_FOCUS = () => {
    COMPANY.classList = ('plan__toggle-focused');
    INDIVIDUAL.classList = ('plan__toggle-unfocused');
}

const CHANGE_INDIVIDUAL_FOCUS = () => {
    COMPANY.classList = ('plan__toggle-unfocused');
    INDIVIDUAL.classList = ('plan__toggle-focused');
}

const INDIVIDUAL = document.getElementById('individual__toggle')
const COMPANY = document.getElementById('company__toggle')

COMPANY.onclick = CHANGE_COMPANY_FOCUS;
INDIVIDUAL.onclick = CHANGE_INDIVIDUAL_FOCUS;

// Add toggle fucntion for changing classes in plan section

// Add toggle fucntion for changing classes in plan section (cards)

const CHANGE_STARTER_FOCUS = () => {
    PRO.classList = ('plan__item');
    PRO_BUTTON.classList = ('plan__item-confirm')
    STARTER.classList = ('plan__item plan__item-focused');
    STARTER_BUTTON.classList = ('plan__item-confirm plan__item-confirm-focused');
}

const CHANGE_PRO_FOCUS = () => {
    STARTER.classList = ('plan__item');
    STARTER_BUTTON.classList = ('plan__item-confirm')
    PRO.classList = ('plan__item plan__item-focused');
    PRO_BUTTON.classList = ('plan__item-confirm plan__item-confirm-focused');
}

const STARTER = document.getElementById('starter__toggle')
const PRO = document.getElementById('pro__toggle')

const STARTER_BUTTON = document.getElementById('started__button')
const PRO_BUTTON = document.getElementById('pro__button')

STARTER.onclick = CHANGE_STARTER_FOCUS;
PRO.onclick = CHANGE_PRO_FOCUS;

// Add toggle fucntion for changing classes in plan section (cards)