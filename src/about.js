import aboutPageImg from './about-page-img.jpg';

export function loadAboutPage() {
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

    content.appendChild(topImgContainer);
    content.appendChild(quoteContainer);

}