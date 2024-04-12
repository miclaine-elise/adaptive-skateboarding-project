import { displayStories } from './experienceManager.js';
import emailIcon from './email-icon.svg';
export function loadExperiencePage() {
    const experienceBtn = document.querySelector('#experience');
    experienceBtn.style.textDecoration = 'underline';

    const content = document.querySelector('#content');

    const experienceHeader = document.createElement('div');
    experienceHeader.id = 'experience-header';
    const experienceHeaderLargeText = document.createElement('h1');
    experienceHeaderLargeText.textContent = 'REAL PEOPLE, REAL STORIES';
    content.appendChild(experienceHeader);
    experienceHeader.appendChild(experienceHeaderLargeText);

    const shareStoryContainer = document.createElement('div');
    shareStoryContainer.id = 'share-story-container';
    const shareStoryText = document.createElement('span');
    shareStoryText.textContent = "share your story with us!";
    const shareStoryButton = document.createElement('button');
    shareStoryButton.id = 'share-story-button';
    const shareStoryButtonImg = document.createElement('img');
    shareStoryButtonImg.src = emailIcon;
    shareStoryContainer.appendChild(shareStoryText);
    shareStoryContainer.appendChild(shareStoryButton);
    shareStoryButton.appendChild(shareStoryButtonImg);
    shareStoryButton.addEventListener("click", function () {
        window.location.replace("mailto:adaptiveskateboard@gmail.com");

    })
    content.appendChild(shareStoryContainer);
    const domStoryList = document.createElement('div');
    domStoryList.id = 'story-list';
    content.appendChild(domStoryList);
    displayStories();
}

export class storyDomElement {
    constructor(name, city, country, age, instagram, instagramLink, photo, info) {
        this.storyContainer = document.createElement('div');
        this.storyContainer.setAttribute('class', 'story-container');
        this.storyTextContainer = document.createElement('div');
        this.storyTextContainer.setAttribute('class', 'story-text-container');
        this.name = document.createElement('span');
        this.name.setAttribute('class', 'story-name');
        this.name.textContent = 'MEET ' + name + '!';
        this.location = document.createElement('span');
        this.location.setAttribute('class', 'story-location');
        this.location.textContent = 'FROM: ' + city + ', ' + country;
        this.age = document.createElement('span');
        this.age.setAttribute('class', 'story-age');
        this.age.textContent = 'AGE: ' + age;
        this.instagramLink = document.createElement('a');
        this.instagramLink.classList.add('story-instagram-link')
        this.instagramLink.textContent = instagram;
        this.instagramLink.href = instagramLink;
        this.photo = document.createElement('img');
        this.photo.setAttribute('class', 'story-photo');
        this.photo.src = photo;
        this.photo.classList.add('story-img');
        this.info = document.createElement('p');
        this.info.setAttribute('class', 'story-info');
        this.info.textContent = info;
    }
    displayStory() {
        const domStoryList = document.querySelector('#story-list');
        domStoryList.appendChild(this.storyContainer);
        this.storyContainer.appendChild(this.photo);
        this.storyContainer.appendChild(this.storyTextContainer);
        this.storyTextContainer.appendChild(this.name);
        this.storyTextContainer.appendChild(this.age);
        this.storyTextContainer.appendChild(this.location);
        this.storyTextContainer.appendChild(this.instagramLink);
        this.storyTextContainer.appendChild(this.info);
    }
}