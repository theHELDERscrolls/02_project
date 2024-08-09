import "../Home/Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
      <div id="work_profile">
        <img src="public/assets/profile_img.jpg" alt="profile">
        <a href="https://www.linkedin.com/in/helder-manuel-vieira-ruiz-63a2821b4/" target="_blank"
          rel="noopener noreferrer">¿Trabajamos?</a>
      </div>
      <p>Hola, mi nombre es</p>
      <h1>Helder</h1>
      <p>soy <span>programador web full stack junior</span> residente en Jaén, España. Estoy comenzando mi carrera en el
        desarrollo web, pero ya cuento con una sólida base en la creación de aplicaciones web funcionales y bien
        estructuradas. Me entusiasma seguir aprendiendo y perfeccionando mis habilidades mientras aporto soluciones
        innovadoras. ¡Gracias por visitar mi portfolio!</p>
      <section id="contact">
        <div class="social_button">
          <img src="public/assets/mail.png" alt="email">
          <a href="mailto:manuhelderruiz@gmail.com">Email</a>
        </div>
        <div class="social_button">
          <img src="public/assets/Github_light.svg" alt="github">
          <a href="https://github.com/theHELDERscrolls" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </section>
    </section>
`;
};
