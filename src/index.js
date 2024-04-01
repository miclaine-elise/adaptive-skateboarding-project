import logo from './adaptive-logo.svg';
import emailIcon from './email-icon.svg';
import instagramIcon from './instagram-icon.svg';
import { loadAboutPage } from './about.js';
import { loadResourcesPage } from './resources.js';
import { loadExperiencePage } from './experience.js';
import { loadSkateparksPage } from './skateparks.js';
import './normalize.css';
import './style.css';

const header = document.querySelector('#header');
const headerImg = document.querySelector('#header-logo');
headerImg.src = logo;
const instagramImg = document.querySelector('#instagram-icon');
instagramImg.src = instagramIcon;
const emailImg = document.querySelector('#email-icon');
emailImg.src = emailIcon;
const aboutBtn = document.querySelector('#about');
const experienceBtn = document.querySelector('#experience');
const eventsBtn = document.querySelector('#events');
const skateparksBtn = document.querySelector('#skateparks');
const resourcesBtn = document.querySelector('#resources');

const content = document.querySelector('#content');
let currentPage = "about";
reloadCurrentPage();

aboutBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    currentPage = "about";
    removeUnderline();
    loadAboutPage();
})

experienceBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    removeUnderline();
    const experienceBtn = document.querySelector('#experience');
    experienceBtn.style.textDecoration = 'underline';
    currentPage = "experience";
    loadExperiencePage();
})

eventsBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    removeUnderline();
    const eventsBtn = document.querySelector('#events');
    eventsBtn.style.textDecoration = 'underline';
    currentPage = "events";
    loadEventsPage();
})
skateparksBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    removeUnderline();
    const skateparksBtn = document.querySelector('#skateparks');
    skateparksBtn.style.textDecoration = 'underline';
    currentPage = "skateparks";
    loadSkateparksPage();
})
resourcesBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    removeUnderline();

    currentPage = "resources";
    loadResourcesPage();
})

export function reloadCurrentPage() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    switch (currentPage) {
        case 'about':
            loadAboutPage();
            break;
        case 'experience':
            loadExperiencePage();
            break;
        case 'events':
            loadEventsPage();
            break;
        case 'skateparks':
            loadSkateparksPage();
            break;
        case 'resources':
            loadResourcesPage();
            break;
    }
}

function removeUnderline() {
    const aboutBtn = document.querySelector('#about');
    aboutBtn.style.textDecoration = 'none';
    const experienceBtn = document.querySelector('#experience');
    experienceBtn.style.textDecoration = 'none';
    const eventsBtn = document.querySelector('#events');
    eventsBtn.style.textDecoration = 'none';
    const skateparksBtn = document.querySelector('#skateparks');
    skateparksBtn.style.textDecoration = 'none';
    const resourcesBtn = document.querySelector('#resources');
    resourcesBtn.style.textDecoration = 'none';
}