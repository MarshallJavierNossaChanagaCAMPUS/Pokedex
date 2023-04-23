let input = document.querySelector("#filter");

import myNav from "./components/myNav.js";
import { filter, showPokemon } from "./components/myFunctions.js";

myNav.showNav();

showPokemon();

filter();