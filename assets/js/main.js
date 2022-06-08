import { displayMenu } from "./mobileMenu.js";
import { ParallaxObject } from "./parallaxe.js";

document
  .querySelector("#mobile-menu-closed")
  .addEventListener("click", displayMenu);

ParallaxObject.bind();
