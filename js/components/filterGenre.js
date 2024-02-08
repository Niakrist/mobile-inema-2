import { createFilmsList } from "./createFilmsList.js";
// import { films } from "./../api/films.js";

export const filterGenre = (films) => {
  const genreList =  document.querySelectorAll('.nav-genre__link');
  const filmsEl = document.querySelector('.films'); 
  genreList.forEach(genreItem => {
    genreItem.addEventListener('click', function(e) {
      e.preventDefault();
      const filmsGenreList = films.filter(film => {
        return film.genre.includes(genreItem.title);
      })
      return filmsGenreList;
    })
  })
}