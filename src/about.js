import aboutPageImg from './about-page-img.jpg';

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

    const quoteContainer = document.createElement('div');
    quoteContainer.id = 'about-quote-container';
    const quote = document.createElement('p');
    quote.id = 'about-quote'
    quote.textContent = '"I CREDIT IT WITH SAVING MY LIFE POST INJURY…I THINK I WOULD HAVE BEEN IN A FAR DARKER PLACE HAD I NOT FOUND A WAY BACK TO THE SPORTS I LOVE."';
    const realStoriesBtn = document.createElement('button');
    realStoriesBtn.id = 'about-experience-btn';
    realStoriesBtn.textContent = 'READ REAL STORIES';
    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(realStoriesBtn);


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
    content.appendChild(quoteContainer);
    content.appendChild(defineContainer);
}