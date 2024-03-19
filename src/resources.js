import shecklerImg from './sheckler-foundation.jpeg';

export function loadResourcesPage() {
    const resourcesBtn = document.querySelector('#resources');
    resourcesBtn.style.textDecoration = 'underline';

    const content = document.querySelector('#content');
    const programsContainer = document.createElement('div');
    programsContainer.id = 'resources-programs-container';
    const programsTitle = document.createElement('span');
    programsTitle.textContent = 'PROGRAMS';
    programsTitle.id = 'resources-programs-title';
    const programsList = document.createElement('ul');
    programsList.id = 'resources-programs-list';
    content.appendChild(programsContainer);
    programsContainer.appendChild(programsTitle);
    programsContainer.appendChild(programsList);
    const programs = [['Sheckler Foundation', 'https://www.shecklerfoundation.org/'], ['Poseiden Foundation', 'https://www.poseidenfoundation.org/'], ['Life Rolls On', 'https://liferollson.org/'], ['Keep Pushing Inc.', 'https://www.keeppushinginc.com/about'], ['Challenged Athletes Foundation', 'https://www.challengedathletes.org/'], ['Adaptive Action Sports', 'https://adacs.org/'], ['Brazillian Association of Paraskateboard', 'https://www.abpsk.com.br/'], ['Bridge to Skate', 'https://www.bridgetoskate.org/'], ['Grind for Life Series', 'https://www.grindforlife.org/']];
    programs.forEach(function (element) {
        let listElement = document.createElement('li');
        let linkElement = document.createElement('a');
        linkElement.textContent = element[0];
        linkElement.href = element[1];
        listElement.appendChild(linkElement);
        programsList.appendChild(listElement);
    });
    const highlightedProgram = document.createElement('div');
    highlightedProgram.id = 'resources-highlighted-program';
    const highlightedProgramImg = document.createElement('img');
    const highlightedProgramTitle = document.createElement('h1');
    highlightedProgramTitle.textContent = 'Sheckler Foundation';
    const highlightedProgramBlurb = document.createElement('p');
    highlightedProgramImg.src = shecklerImg;
    highlightedProgramBlurb.textContent = "This is who we are, it's what we're all about, join the movement to Be the Change! We have taken our 10th Annual Skate for a Cause ON THE ROAD with a 10 stop tour giving away $10,000 Be the Change grants at each stop! The first half of our tour is done, check out stops 1-5 in the recap video."
    programsContainer.appendChild(highlightedProgram);
    highlightedProgram.appendChild(highlightedProgramImg);
    highlightedProgram.appendChild(highlightedProgramTitle);
    highlightedProgram.appendChild(highlightedProgramBlurb);
}