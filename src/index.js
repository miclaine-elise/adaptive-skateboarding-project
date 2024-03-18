import logo from './adaptive-logo.svg';
import emailIcon from './email-icon.svg';
import instagramIcon from './instagram-icon.svg';
import { loadAboutPage } from './about.js';
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
    loadAboutPage();
})

experienceBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    currentPage = "experience";
    loadExperiencePage();
})

eventsBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    currentPage = "events";
    loadEventsPage();
})
skateparksBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    currentPage = "skateparks";
    loadSkateparksPage();
})
resourcesBtn.addEventListener('click', function () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
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
