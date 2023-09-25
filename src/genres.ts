import * as d from './DOMelms'

export async function createGenres(){ 
    let response = await fetch("http://localhost:4000/api/genres");
    let genre = await response.json();
    let menu = d.menu_items;
    for(let i = 0; i < genre.length;i++){ 
        let menuItem = document.createElement("li");
        menuItem.className = "list-group-item";
        menuItem.innerHTML = `${genre[i].name}`
        menu.appendChild(menuItem);
    }
    console.log(genre)
}