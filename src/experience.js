import { getStories } from './experienceManager.js';
import { Story, addStoryToList } from './experienceManager.js';
import storyImg1 from './Stories/story_1.png';
import storyImg2 from './Stories/story_2.png';
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
    const domStoryList = document.createElement('div');
    domStoryList.id = 'story-list';
    content.appendChild(domStoryList);


    //this is just to test that this is going to work
    let newStory1 = new Story('Megan', 'Seattle', 'USA', '26', storyImg1, 'Hi! Im an adaptive skater... ive been adaptive skating since i was 8. My favorite thing about adaptive skating is being a part of a community.');
    newStory1.addStoryToList(newStory1);
    let newStory2 = new Story('Miclaine', 'Seattle', 'USA', '26', storyImg2, 'Hi! Im another adaptive skater... ive been adaptive skating since i was 7. My favorite thing about adaptive skating is being better than Megan.');
    newStory2.addStoryToList(newStory2);
    getStories();
}

export class storyDomElement {
    constructor(name, city, country, age, photo, info) {
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
        this.photo = document.createElement('img');
        this.photo.setAttribute('class', 'story-photo');
        this.photo.src = photo;
        this.info = document.createElement('p');
        this.info.setAttribute('class', 'story-info');
        this.info.textContent = info;
    }
    displayStories() {
        const domStoryList = document.querySelector('#story-list');
        domStoryList.appendChild(this.storyContainer);
        this.storyContainer.appendChild(this.photo);
        this.storyContainer.appendChild(this.storyTextContainer);
        this.storyTextContainer.appendChild(this.name);
        this.storyTextContainer.appendChild(this.age);
        this.storyTextContainer.appendChild(this.location);
        this.storyTextContainer.appendChild(this.info);
    }
}