import { projects } from "../../data/projects";
import "../ProjectCard/ProjectCard.css";

export const ProjectCard = (project) => `
      <img src="${project.image}" alt="${project.title}">
      <div class="project_card-intro">
        <h3>${project.title}</h3>
        <div class="tech">${project.tech.join(" ")}</div>
      </div>
      <p class="project_card-desc">${project.description}</p>
      <div class="project_card-link">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer">
          <img src="/assets/Github_light.svg" alt="Github Icon">
        </a>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">
          <img src="/assets/web.png" alt="Web Icon">
        </a>
      </div>
`;

//Sustituir el nombre de las tecnologías por las rutas de icono.

const techIcons = {
  HTML5: "/assets/html5.svg",
  CSS3: "/assets/css.svg",
  JavaScript: "/assets/javascript.svg",
};

export const basedTech = () => {
  for (const project of projects) {
    project.tech = project.tech.map((tech) => {
      return `<img src="${techIcons[tech]}" alt="${tech}">`
    });
  }
};