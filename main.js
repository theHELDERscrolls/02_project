import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { About } from "./pages/About/About";
import { basedTech } from "./components/ProjectCard/ProjectCard";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#home_link", Home);
linkPage("#projects_link", Projects);
linkPage("#about_link", About);

changeTheme();
Home();
basedTech();
