import { storyDomElement } from './experience.js';
import storyFile from './Stories/stories.json';
const storyList = [];

export class Story {
    constructor(name, city, country, age, instagram, instagramLink, photo, info) {
        this.name = name;
        this.city = city;
        this.country = country;
        this.age = age;
        this.instagram = instagram;
        this.instagramLink = instagramLink;
        this.photo = photo;
        this.info = info;
        console.table(this);
    }

    addStoryToList() {
        storyList.push(this);
        console.table(storyList);
    }
}

export function createStories() {
    storyFile.stories.forEach((story) => {
        let newStory = new Story(story.name, story.city, story.country, story.age, story.instagram, story.instagramLink, story.photo, story.info);
        newStory.addStoryToList()
    })
}
export function displayStories() {
    createStories();
    for (let i = 0; i < storyList.length; i++) {
        require(`./Stories/story_image_${i + 1}.jpg`);
        new storyDomElement(storyList[i].name, storyList[i].city, storyList[i].country, storyList[i].age, storyList[i].instagram, storyList[i].instagramLink, storyList[i].photo, storyList[i].info).displayStory();
    }
}


