import { loadIndexFilm } from "../state/saveIndexFilm.js";
import { films } from "./../api/films.js";

export const setTitleFilm = () => {
  const idFilm = loadIndexFilm();
  console.log('idFilm:', idFilm)
  const titleFilm =  document.querySelector('.title__film')
  const [currentFilm] = films.filter(film => {
    return film.id == idFilm;
  });
  titleFilm.textContent = currentFilm.title;
}