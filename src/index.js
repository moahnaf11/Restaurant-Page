import "./style.css";
import { loadInitial, displayHome } from "../js/home";
import { displayMenu } from "../js/menu";
import { displayAbout } from "../js/about";

let aboutButton = document.querySelector(".about");
let homeButton = document.querySelector(".home");
homeButton.focus();
let menuButton = document.querySelector(".menu");

homeButton.addEventListener("click", () => displayHome(homeButton, menuButton, aboutButton));
homeButton.classList.add("active");
loadInitial();
menuButton.addEventListener("click", () => displayMenu(homeButton, menuButton, aboutButton));

aboutButton.addEventListener("click", () => displayAbout(homeButton, menuButton, aboutButton));
