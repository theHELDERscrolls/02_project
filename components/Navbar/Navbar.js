import "../Navbar/Navbar.css";

export const Navbar = () => `
    <nav>
      <ul>
        <li>
          <a href="#" id="home_link">Inicio</a>
        </li>
        <li>
          <a href="#" id="projects_link">Proyectos</a>
        </li>
        <li>
          <a href="#" id="about_link">Sobre mí</a>
        </li>
        <li>
          <button id="themeBtn">☾</button>
        </li>
      </ul>
    </nav>
`;

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☾") {
    themeBtn.innerText = "☀";
  } else {
    themeBtn.innerText = "☾";
  }
};

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};
