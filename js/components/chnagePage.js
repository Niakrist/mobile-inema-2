import { saveIndexFilm } from "../state/saveIndexFilm.js";


export const changePage = () => {
  const filmsLink = document.querySelectorAll('.film__link');
  filmsLink.forEach(filmLink => {
    filmLink.addEventListener('click', function(e) {
      saveIndexFilm(e.target.dataset.idFilm);
    });
  });
  
}

