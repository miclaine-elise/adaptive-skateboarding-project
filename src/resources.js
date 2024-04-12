import shecklerImg from './sheckler-foundation.jpeg';

export function loadResourcesPage() {
    const resourcesBtn = document.querySelector('#resources');
    resourcesBtn.style.textDecoration = 'underline';

    const content = document.querySelector('#content');

    const resourcesHeader = document.createElement('div');
    resourcesHeader.id = 'resources-header';
    const resourcesHeaderLargeText = document.createElement('h1');
    const resourcesHeaderSmallText = document.createElement('span');
    resourcesHeaderLargeText.textContent = 'GETTING STARTED IN ADAPTIVE SKATEBOARDING';
    resourcesHeaderSmallText.textContent = 'Good people doing good things to build community and keep the stoke high'; //change this
    content.appendChild(resourcesHeader);
    resourcesHeader.appendChild(resourcesHeaderLargeText);
    resourcesHeader.appendChild(resourcesHeaderSmallText);

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
    const programs = [['Sheckler Foundation', 'https://www.shecklerfoundation.org/'], ['Poseiden Foundation', 'https://www.poseidenfoundation.org/'], ['Life Rolls On', 'https://liferollson.org/'], ['Keep Pushing Inc.', 'https://www.keeppushinginc.com/about'], ['Challenged Athletes Foundation', 'https://www.challengedathletes.org/'], ['Adaptive Action Sports', 'https://adacs.org/'], ['Brazilian Association of Paraskateboard', 'https://www.abpsk.com.br/'], ['Bridge to Skate', 'https://www.bridgetoskate.org/'], ['Grind for Life Series', 'https://www.grindforlife.org/']];
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


    const grantsContainer = document.createElement('div');
    grantsContainer.id = 'resources-grants-container';
    const grantsTitle = document.createElement('span');
    grantsTitle.textContent = 'grants';
    grantsTitle.id = 'resources-grants-title';
    const grantsList = document.createElement('ul');
    grantsList.id = 'resources-grants-list';
    content.appendChild(grantsContainer);
    grantsContainer.appendChild(grantsTitle);
    grantsContainer.appendChild(grantsList);
    const grants = [['Challenged Athletes Equipment', 'https://www.challengedathletes.org/grants/'], ['Wheels for Wheels', 'https://www.poseidenfoundation.org/']]; //Need links from Megan
    grants.forEach(function (element) {
        let listElement = document.createElement('li');
        let linkElement = document.createElement('a');
        linkElement.textContent = element[0];
        linkElement.href = element[1];
        listElement.appendChild(linkElement);
        grantsList.appendChild(listElement);
    });
    const highlightedGrant = document.createElement('div');
    highlightedGrant.id = 'resources-highlighted-grant';
    const highlightedGrantVideo = document.createElement('iframe');
    highlightedGrantVideo.src = 'https://www.youtube.com/embed/qDZHr39JteA?si=OoFs-8Y1FuLjNkcW';
    const highlightedGrantTitle = document.createElement('h1');
    highlightedGrantTitle.textContent = 'Challenged Athletes Foundation Grant';
    const highlightedGrantBlurb = document.createElement('p');
    highlightedGrantBlurb.textContent = "This is who we are, it's what we're all about, join the movement to Be the Change! We have taken our 10th Annual Skate for a Cause ON THE ROAD with a 10 stop tour giving away $10,000 Be the Change grants at each stop! The first half of our tour is done, check out stops 1-5 in the recap video."
    grantsContainer.appendChild(highlightedGrant);
    highlightedGrant.appendChild(highlightedGrantVideo);
    highlightedGrant.appendChild(highlightedGrantTitle);
    highlightedGrant.appendChild(highlightedGrantBlurb);
}
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qDZHr39JteA?si=OoFs-8Y1FuLjNkcW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */ }

