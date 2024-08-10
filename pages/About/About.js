import { cleanPage } from "../../utils/cleanPage";
import "../About/About.css";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <div id="construction">
      <iframe src="https://giphy.com/embed/hjLtnBNLduUyA">
      </iframe>
    </div>
`;
};
