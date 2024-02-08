import { createFilmsList } from "./createFilmsList.js";
import { films } from "./../api/films.js";
import { showEmpteListFilms } from "./showEmpteListFilms.js";

export const searchFilm = (filmsSearch) => {
  const searchButtonEl = document.querySelector('.btn-search');
  const searchEl = document.querySelector('.search');
  const searchInputEl = document.querySelector('.search__input');
  const btnSearchSvg = document.querySelector('.btn-search__svg');

  searchButtonEl && searchButtonEl.addEventListener('click', function () {
    createFilmsList(films)
    searchInputEl.style.width = '200px';
    searchEl.style.outline = '1px solid #ffd645';
    searchEl.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    btnSearchSvg.style.fill = '#ffd645';
    searchInputEl.value = '';
    searchInputEl.focus();

    searchInputEl.addEventListener('input', function () {
      const filmsSearchFilter = filmsSearch.filter(filmSearch => {
        return (filmSearch.title).toLowerCase().includes((searchInputEl.value).toLowerCase());
      })
      if (filmsSearchFilter.length) {
        createFilmsList(filmsSearchFilter);
      } else {
        createFilmsList(filmsSearchFilter);
        showEmpteListFilms();
      }
        
      // return filmsSearchFilter;
    })
  })
  // return filmsSearch;

  searchInputEl && searchInputEl.addEventListener('blur', function () {
    searchInputEl.style.width = '';
    searchEl.style.outline = '';
    searchEl.style.backgroundColor = '';
    btnSearchSvg.style.fill = '';
  })
}