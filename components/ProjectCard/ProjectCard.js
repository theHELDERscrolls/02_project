import "../ProjectCard/ProjectCard.css";

export const ProjectCard = (project) => `
      <img src="${project.image}" alt="${project.title}">
      <div class="project_card-intro">
        <h3>${project.title}</h3>
        <div class="tech">${project.tech.join(" - ")}</div>
      </div>
      <p class="project_card-desc">${project.description}</p>
      <div class="project_card-link">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer">
          <img src="./public/assets/Github_light.svg" alt="Github Icon">
        </a>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">
          <img src="./public/assets/web.png" alt="Web Icon">
        </a>
      </div>
`;
