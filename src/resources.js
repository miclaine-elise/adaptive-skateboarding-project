export function loadResourcesPage() {
    const resourcesBtn = document.querySelector('#resources');
    resourcesBtn.style.textDecoration = 'underline';

    const content = document.querySelector('#content');
    const programsTitle = document.createElement('span');
    programsTitle.textContent = 'PROGRAMS';
    const programsList = document.createElement('ul');
    content.appendChild(programsTitle);
    content.appendChild(programsList);
    const programs = [['Sheckler Foundation', 'https://www.shecklerfoundation.org/'], ['Poseiden Foundation', 'https://www.poseidenfoundation.org/'], ['Life Rolls On', 'https://liferollson.org/'], ['Keep Pushing Inc.', 'https://www.keeppushinginc.com/about'], ['Challenged Athletes Foundation', 'https://www.challengedathletes.org/'], ['Adaptive Action Sports', 'https://adacs.org/'], ['Brazillian Association of Paraskateboard', 'https://www.abpsk.com.br/'], ['Bridge to Skate', 'https://www.bridgetoskate.org/'], ['Grind for Life Series', 'https://www.grindforlife.org/']];
    programs.forEach(function (element) {
        let listElement = document.createElement('li');
        let linkElement = document.createElement('a');
        linkElement.textContent = element[0];
        linkElement.href = element[1];
        listElement.appendChild(linkElement);
        programsList.appendChild(listElement);
    });
}