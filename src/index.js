import logo from './adaptive-logo.svg';
import emailIcon from './email-icon.svg';
import instagramIcon from './instagram-icon.svg';
import './normalize.css';
import './style.css';

const header = document.querySelector('#header');
const headerImg = document.querySelector('#header-logo');
headerImg.src = logo;
const instagramImg = document.querySelector('#instagram-icon');
instagramImg.src = instagramIcon;
const emailImg = document.querySelector('#email-icon');
emailImg.src = emailIcon;