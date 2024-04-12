import skateparkCards from './skateparkCards.json';
import headerImg from './skateparks-header-img.jpg';
import downloadIcon from './download.svg';
import infographicPDF from './skatepark_accessibility_infographic.pdf';
export function loadSkateparksPage() {
    const skateparksBtn = document.querySelector('#skateparks');
    skateparksBtn.style.textDecoration = 'underline';

    const content = document.querySelector('#content');
    const skateparksHeader = document.createElement('div');
    skateparksHeader.id = 'skateparks-header';
    const skateparksHeaderLine1 = document.createElement('h1');
    const skateparksHeaderLine2 = document.createElement('h1');
    const skateparksHeaderLine3 = document.createElement('p');
    skateparksHeaderLine1.textContent = 'WHAT MAKES A SKATEPARK';
    skateparksHeaderLine1.id = 'skateparks-header-line1';
    skateparksHeaderLine2.textContent = 'ACCESSIBLE?';
    skateparksHeaderLine2.id = 'skateparks-header-line2';
    skateparksHeaderLine3.textContent = 'A look into how skateparks can be made more inclusive for everyone. Have any other suggestions? Contact us!';
    skateparksHeaderLine3.id = 'skateparks-header-line3';
    const skateparksHeaderImg = document.createElement('img');
    skateparksHeaderImg.src = headerImg;
    skateparksHeader.appendChild(skateparksHeaderLine1);
    skateparksHeader.appendChild(skateparksHeaderLine2);
    skateparksHeader.appendChild(skateparksHeaderLine3);
    skateparksHeader.appendChild(skateparksHeaderImg);
    content.appendChild(skateparksHeader);
    const cardList = document.createElement('div');
    cardList.id = 'card-list';
    content.appendChild(cardList);

    const downloadContainer = document.createElement('div');
    downloadContainer.id = 'download-container';
    const infographic = document.createElement('a');
    infographic.href = infographicPDF;
    infographic.textContent = 'Downloadable Infographic';
    infographic.target = '_blank';
    const download = document.createElement('img');
    download.src = downloadIcon;
    content.appendChild(downloadContainer);
    downloadContainer.appendChild(infographic);
    downloadContainer.appendChild(download);
    for (let card of skateparkCards.cards) {
        let newCard = new InfoCard(card.title, card.info, card.photo);
        newCard.displayInfoCard();
    }
}
export class InfoCard {
    constructor(title, info, photo) {
        this.infoCard = document.createElement('div');
        this.infoCard.setAttribute('class', 'skatepark-card');
        this.title = document.createElement('h1');
        this.title.setAttribute('class', 'skatepark-card-title');
        this.title.textContent = title;
        this.info = document.createElement('p');
        this.info.setAttribute('class', 'skatepark-card-info');
        this.info.textContent = info;
        this.photo = document.createElement('img');
        this.photo.setAttribute('class', 'skatepark-card-img');
        this.photo.src = photo;
        this.infoCard.appendChild(this.title);
        this.infoCard.appendChild(this.info);
        this.infoCard.appendChild(this.photo);
    }
    displayInfoCard() {
        const cardList = document.querySelector('#card-list');
        cardList.appendChild(this.infoCard);
    }
}