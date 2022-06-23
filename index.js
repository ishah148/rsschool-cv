import { projectsData } from './projects.js'

const projectWrapper = document.querySelector('.projects-wrapper');
projectsData.forEach(project => projectWrapper.insertAdjacentHTML('beforeend', getHtml(project)))

function getHtml(obj) {
    const html = `
    <div class="project__container">
        <div class="description-project">
        <h3>${obj.name}</h3>
        <h4>${obj.description}</h4>
            <div class="link-wrapper git">
            <a href="${obj.linkGit}">
            <img src="assets/svg/link.svg" alt=""></a>
            <p><a href="${obj.linkGit}">GitHub</a></p>
            </div>
            <div class="link-wrapper deploy">
            <a href="${obj.linkDeploy}">
            <img src="assets/svg/link.svg" alt=""></a>
            <p><a href="${obj.linkDeploy}">Deploy</a></p>
            </div>
        </div>
    <img class="project__image" src="assets/png/${obj.imageName}.png" alt="">
    </div>`
    return html
}


const projects = document.querySelectorAll('.project__container');
projects.forEach(project => {
    project.addEventListener('click', function () {
        this.classList.toggle('push')
    })
})