import { Story, addStoryToList } from './experienceManager.js';
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


    //this is just to test that this is going to work
    let newStory = new Story('Megan', 'Seattle', 'USA', '26', 'blah', 'Hi! Im an adaptive skater');
    newStory.addStoryToList(newStory);


}