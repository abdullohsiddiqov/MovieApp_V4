import "./main.css";

import { init } from "./main";
import { createGenres } from "./genres";

function initialize() { 
    init();
    createGenres();
}
initialize();