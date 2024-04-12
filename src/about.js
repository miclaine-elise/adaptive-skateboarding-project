import aboutPageImg from './about-page-img.jpg';
import rightIcon from './menu-right.svg';
import leftIcon from './menu-left.svg';
import imageSlider from './ImageSlider/imageSlider.json';
import aboutGallery from './AboutGallery/aboutGallery.json';
import { selectExperiencePage } from './index.js';
import adaptiveLogo from './adaptive-logo-background.png';
import slider_1 from './ImageSlider/slider_1.mp4';
import slider_2 from './ImageSlider/slider_2.mp4';
import slider_3 from './ImageSlider/slider_3.mp4';
import slider_4 from './ImageSlider/slider_4.mp4';



export function loadAboutPage() {
    const aboutBtn = document.querySelector('#about');
    aboutBtn.style.textDecoration = 'underline';

    const content = document.querySelector('#content');

    const topImgContainer = document.createElement('div');
    topImgContainer.id = "about-top-img-container";
    const aboutPageTitle = document.createElement('span');
    aboutPageTitle.id = "about-title";
    aboutPageTitle.textContent = "THE ADAPTIVE SKATEBOARD PROJECT";
    const mainImg = document.createElement('img');
    mainImg.src = aboutPageImg;
    mainImg.id = "about-main-img";
    topImgContainer.appendChild(aboutPageTitle);
    topImgContainer.appendChild(mainImg);

    const quoteVideoContainer = document.createElement('div');
    quoteVideoContainer.id = 'about-quote-video';
    const quoteContainer = document.createElement('div');
    quoteContainer.id = 'about-quote-container';
    const quote = document.createElement('p');
    quote.id = 'about-quote'
    quote.textContent = '"I CREDIT IT WITH SAVING MY LIFE POST INJURY…I THINK I WOULD HAVE BEEN IN A FAR DARKER PLACE HAD I NOT FOUND A WAY BACK TO THE SPORTS I LOVE."';
    const realStoriesBtn = document.createElement('button');
    realStoriesBtn.id = 'about-experience-btn';
    realStoriesBtn.textContent = 'READ REAL STORIES';
    realStoriesBtn.addEventListener('click', selectExperiencePage);

    const imageSliderContainer = document.createElement('div');
    imageSliderContainer.id = 'about-image-slider-container';
    const nextVideoButton = document.createElement('img');
    nextVideoButton.src = rightIcon;
    nextVideoButton.id = 'about-next-video';
    const previousVideoButton = document.createElement('img');
    previousVideoButton.id = 'about-previous-video';
    previousVideoButton.src = leftIcon;
    imageSliderContainer.appendChild(nextVideoButton);
    imageSliderContainer.appendChild(previousVideoButton);

    quoteVideoContainer.appendChild(quoteContainer);
    quoteVideoContainer.appendChild(imageSliderContainer);
    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(realStoriesBtn);


    const video = document.createElement('video');
    video.id = 'about-video';
    imageSliderContainer.appendChild(video);


    const defineContainer = document.createElement('div');
    defineContainer.id = 'about-define-container';
    const defineTitle = document.createElement('span');
    defineTitle.id = 'about-define-title';
    defineTitle.textContent = "WHAT IS THE ADAPTIVE SKATEBOARD PROJECT?"
    const definition = document.createElement('p');
    definition.id = 'about-definition';
    definition.textContent = "The Adaptive Skateboard Project aims to highlight adaptive skateboarders and serve as a resource for people who are involved or would like to get involved in adaptive skateboarding. We want to connect. We want to build community. We want to share experiences. We want to share resources. We want to share information on techniques and strategies. We want to have a place to skate. We want to compete. We want to expand and grow. Most of all we all want to skateboard."
    defineContainer.appendChild(defineTitle);
    defineContainer.appendChild(definition);

    const galleryTitle = document.createElement('h1');
    galleryTitle.id = 'about-gallery-title';
    galleryTitle.textContent = 'the adaptive skate community is growing';
    const galleryContainer = document.createElement('div');
    galleryContainer.id = 'about-gallery-container';
    for (let i = 1; i <= aboutGallery.photos.length; i++) {
        let imageContainer = document.createElement('div');
        imageContainer.classList.add('about-gallery-image-container');
        let photo = document.createElement('img');
        let imageSrc = require(`./AboutGallery/image_${i}.jpg`);
        photo.src = imageSrc;
        let instagram = document.createElement('a');
        instagram.textContent = aboutGallery.photos[i - 1].instagram;
        instagram.href = aboutGallery.photos[i - 1].instagramLink;
        galleryContainer.appendChild(imageContainer);
        imageContainer.appendChild(photo);
        imageContainer.appendChild(instagram);
    }

    content.appendChild(topImgContainer);
    content.appendChild(quoteVideoContainer);
    content.appendChild(defineContainer);
    content.appendChild(galleryTitle);
    content.appendChild(galleryContainer);
    imageSliderHandler();
}
function imageSliderHandler() {
    const videos = [slider_1, slider_2, slider_3, slider_4];
    const video = document.querySelector('#about-video');
    const paginationContainer = document.createElement('div');
    paginationContainer.id = 'about-pagination-container';
    const previousVideoButton = document.querySelector('#about-previous-video');
    const imageSliderContainer = document.querySelector('#about-image-slider-container');
    const nextVideoButton = document.querySelector('#about-next-video');

    imageSliderContainer.appendChild(paginationContainer);
    let currentVideo = 1;


    for (let i = 0; i < imageSlider.videos.length; i++) {
        let pagination = document.createElement('div');
        let num = i + 1
        pagination.id = 'page-' + num;
        pagination.classList.add('pagination');
        paginationContainer.appendChild(pagination);
    }
    initVideo();
    function initVideo() {
        video.controls = true;
        video.autoplay = true;
        video.muted = true;
        video.width = 400;
        video.src = videos[currentVideo - 1];
        video.type = 'video/mp4';
        handlePagination();
    }

    function playNextVideo() {
        currentVideo = currentVideo + 1;
        if (currentVideo > imageSlider.videos.length) {
            currentVideo = 1;
        }
        video.src = videos[currentVideo - 1];
        video.load();
        handlePagination();
    }
    video.addEventListener('ended', playNextVideo);
    nextVideoButton.addEventListener('click', playNextVideo);
    previousVideoButton.addEventListener('click', function playPreviousVideo() {
        currentVideo = currentVideo - 1;
        if (currentVideo < 1) {
            currentVideo = imageSlider.videos.length;
        }
        video.src = videos[currentVideo - 1];
        video.load();
        handlePagination();
    })
    function handlePagination() {
        const allPages = document.querySelectorAll('.pagination');
        for (let page of allPages) {
            page.style.backgroundColor = 'white';
        }
        let currentPagination = document.querySelector('#page-' + currentVideo);
        currentPagination.style.backgroundColor = 'black';
    }
}
