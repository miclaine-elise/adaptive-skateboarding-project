import aboutPageImg from './about-page-img.jpg';

export function loadAboutPage() {
    const content = document.querySelector('#content');

    const topImgContainer = document.createElement('div');
    const aboutPageTitle = document.createElement('span');
    aboutPageTitle.textContent = "The Adaptive Skateboard Project";
    const mainImg = document.createElement('img');
    mainImg.src = aboutPageImg;
    topImgContainer.appendChild(aboutPageTitle);
    topImgContainer.appendChild(mainImg);

    const quoteContainer = document.createElement('div');
    const quote = document.createElement('p');
    quote.textContent = "I credit it with saving my life post injury…I think I would have been in a far darker place had I not found a way to get back to the sports I love!";
    const realStoriesBtn = document.createElement('button');
    realStoriesBtn.textContent = 'READ REAL STORIES';
    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(realStoriesBtn);

    content.appendChild(topImgContainer);
    content.appendChild(quoteContainer);

}