import { films } from "./api/films.js";
import { createFilmsList } from "./components/createFilmsList.js";
import { searchFilm } from "./components/searchFilm.js";
import { togleHeartList } from "./components/togleheartList.js";
import { filterGenre } from "./components/filterGenre.js";
import { changePage } from "./components/chnagePage.js";
import { createCartFilm } from "./components/createCartFilm.js";
import { showHeartList } from "./components/showHeartList.js";
const genreList =  document.querySelectorAll('.nav-genre__link');
 
const filmsEL = document.querySelector('.films');
const playerWrapper = document.querySelector('.player-wrapper');
const heartListEl = document.querySelector('.heart-list');

// Поиск

heartListEl && togleHeartList();
searchFilm(films);


filmsEL && createFilmsList(films);

// Что-то не работает
filterGenre(films);

const navGenreLinksEl = document.querySelectorAll('.nav-genre__link');
const navGenreEl = document.querySelector('.nav-genre');
navGenreLinksEl.forEach(navGenreLinksEl => {
  navGenreEl.style.marginLeft = '';
  navGenreLinksEl.addEventListener('click', function () {
    document.querySelector('.active') && document.querySelector('.active').classList.remove('active');
    navGenreEl.style.marginLeft = navGenreLinksEl.dataset.toDisplace;
    navGenreLinksEl.classList.add('active');
  })
})


heartListEl && showHeartList(films)

playerWrapper && createCartFilm(films)

changePage()