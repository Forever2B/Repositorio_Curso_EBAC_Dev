document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const  heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        if (scrollY < heightHero) {
            ocultHeader();
        } else {
            showHeader();
        }
    });

    /* Seção de atrações e programação das abas */
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const targetTab = botao.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            escondeTodasAbas();
            tab.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    /* Seção FAQ, accordion */
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', switchAnswer);
    }
});

function ocultHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}
function showHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function switchAnswer(element) {
    const classSwitchAccordeon = 'faq__questions__item--is-open';
    const elementFather = element.target.parentNode;

    console.log(element);
    elementFather.classList.toggle(classSwitchAccordeon)
};

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
};

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
};