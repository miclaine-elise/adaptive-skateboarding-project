import aboutPageImg from './about-page-img.jpg';
import rightIcon from './menu-right.svg';
import leftIcon from './menu-left.svg';
import imageSlider from './ImageSlider/imageSlider.json';
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
    definition.textContent = "The Adaptive Skateboard Project aims to highlight adaptive skateboarders and serve as a resource for people who are involved or would like to be involved in adaptive skateboarding. We want to connect. We want to build community. We want to share experiences. We want to share resources. We want to share information on techniques and strategies. We want to all have a place to skate. We want to compete. We want to expand and grow. Most of all we all want to skateboard! This will take advocacy and teamwork, please connect, and send any information you have."
    defineContainer.appendChild(defineTitle);
    defineContainer.appendChild(definition);

    content.appendChild(topImgContainer);
    content.appendChild(quoteVideoContainer);
    content.appendChild(defineContainer);
    imageSliderHandler();
}
function imageSliderHandler() {
    const video = document.querySelector('#about-video');
    video.controls = true;
    video.autoplay = true;
    video.muted = true;
    video.width = 400;
    // video.height = 800;
    const videoSrc = document.createElement('source');
    video.appendChild(videoSrc);
    videoSrc.src = '../src/ImageSlider/slider_1.mp4';
    videoSrc.type = 'video/mp4';
    let currentVideo = 1;
    function playNextVideo() {
        currentVideo = currentVideo + 1;
        if (currentVideo > imageSlider.videos.length) {
            currentVideo = 1;
        }
        videoSrc.src = '../src/ImageSlider/slider_' + currentVideo + '.mp4';
        video.load();
    }
    video.addEventListener('ended', playNextVideo);
    const nextVideoButton = document.querySelector('#about-next-video');
    nextVideoButton.addEventListener('click', playNextVideo);
    const previousVideoButton = document.querySelector('#about-previous-video');
    previousVideoButton.addEventListener('click', function playPreviousVideo() {
        currentVideo = currentVideo - 1;
        if (currentVideo < 1) {
            currentVideo = imageSlider.videos.length;
        }
        videoSrc.src = '../src/ImageSlider/slider_' + currentVideo + '.mp4';
        video.load();
    })
    for (let i = 0; i < imageSlider.videos.length; i++) {
        let pagination = document.createElement('div');
        let num = i + 1
        pagination.id = 'page-' + num;
        const imageSliderContainer = document.querySelector('#about-image-slider-container');
        imageSliderContainer.appendChild(pagination);
    }

}
