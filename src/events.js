import emailIcon from './email-icon.svg';
import instagramIcon from './instagram-icon.svg';

export function loadEventsPage() {
    const eventsBtn = document.querySelector('#events');
    eventsBtn.style.textDecoration = 'underline';

    const content = document.querySelector('#content');

    const eventsHeader = document.createElement('div');
    eventsHeader.id = 'events-header';
    const eventsHeaderLargeText = document.createElement('h1');
    eventsHeaderLargeText.textContent = `LET'S SKATE!`;
    content.appendChild(eventsHeader);
    eventsHeader.appendChild(eventsHeaderLargeText);

    const contactUs = document.createElement('div');
    contactUs.id = 'events-contact';
    const contactText = document.createElement('p');
    contactText.textContent = "Have an event coming up? Let us know!";
    const emailButton = document.createElement('button');
    emailButton.id = 'events-email-button';
    const emailImg = document.createElement('img');
    emailImg.src = emailIcon;
    emailButton.appendChild(emailImg);
    emailButton.addEventListener("click", function () {
        window.location.replace("mailto:adaptiveskateboard@gmail.com");
    })
    const instagramButton = document.createElement('button');
    instagramButton.id = 'events-instagram-button';
    const instagramImg = document.createElement('img');
    instagramImg.src = instagramIcon;
    instagramButton.appendChild(instagramImg);
    instagramButton.addEventListener("click", function () {
        window.location.replace("https://www.instagram.com/adaptiveskateboard");
    })

    content.appendChild(contactUs);
    contactUs.appendChild(contactText);
    contactUs.appendChild(emailButton);
    emailButton.appendChild(emailImg);
    contactUs.appendChild(instagramButton);
    instagramButton.appendChild(instagramImg);
    const noEvents = document.createElement('p');
    noEvents.id = 'events-text';
    noEvents.textContent = "no events yet";
    content.appendChild(noEvents);

}
