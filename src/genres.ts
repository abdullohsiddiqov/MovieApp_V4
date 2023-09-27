import * as d from './DOMelms';

export async function createGenres() {
  const responseGenres = await fetch('http://localhost:4000/api/genres');
  const responseMovies = await fetch('http://localhost:4000/api/movies');
  const movies = await responseMovies.json();
  const genres = await responseGenres.json();

  for (let i = 0; i < genres.length; i++) {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = genres[i].name;
    d.menu_items.append(li);
    li.addEventListener('click', () => {
      li.style.background = 'blue';
      const previously = document.querySelector('.list-group-item.active') as HTMLLIElement;
      if (previously) {
        previously.style.backgroundColor = 'white';
      }
      li.classList.add('active');
      if (previously) {
        previously.classList.remove('active');
      }
      var coun = 0;
      d.tbody.innerHTML = '';
      for (let i = 0; i < movies.length; i++) {
        if (li.textContent === movies[i].genre.name) {
          coun++;

          const tr = document.createElement('tr');
          const tdTitle = document.createElement('td');
          const tdGenre = document.createElement('td');
          const tdStoke = document.createElement('td');
          const tdRate = document.createElement('td');

          tdTitle.textContent = ` ${movies[i].title}`;
          tdGenre.innerText = `${movies[i].genre.name}`;
          tdStoke.textContent = `${movies[i].numberInStock}`;
          tdRate.innerText = `${movies[i].dailyRentalRate}`;
          tr.append(tdTitle, tdGenre, tdStoke, tdRate);

          d.tbody.appendChild(tr);
        }
      }
    });
  }
}
