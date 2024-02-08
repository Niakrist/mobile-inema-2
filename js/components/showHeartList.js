// import { films } from "./api/films.js";

import { saveIndexFilm } from "../state/saveIndexFilm.js";
import { delHeartFilm } from "../state/stateHeart.js";
import { getLocalStorageStateHart } from "./getLocalStorageStateHart.js";

const heartListEl = document.querySelector('.heart-list');
const biBell = document.querySelector('.bi-bell');
const btnHeartQuantityEl = document.querySelector('.btn-heart__quantity');

export const showHeartList = (films) => {
  let stateHeart = [];
  heartListEl.innerHTML = '';
  if (localStorage.getItem('heartFilm')) {
    stateHeart = JSON.parse(localStorage.getItem('heartFilm'));
  }
  if (stateHeart.length > 0) {
    biBell.style.fill = "#ffd645";
    btnHeartQuantityEl.textContent = stateHeart.length;
    films.forEach(film => {
      if (stateHeart.includes(String(film.id))) {
        const heartListHtml = `
          <li class="heart-item" data-id-heart=${film.id}>
            <img class="heart-item__img" src="${film.poster}" alt="${film.title}">
            <a class="heart-item__link" href="/film.html">${film.title}</a>
            <button class="heart-item__del">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-bucket" viewBox="0 0 16 16">
                <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z" />
              </svg>
            </button>
          </li>`
        heartListEl.insertAdjacentHTML('beforeend', heartListHtml);
      }
    })

    const heartItemDel = document.querySelectorAll('.heart-item__del');
    heartItemDel.forEach(btnDel => {
      btnDel.addEventListener('click', function () {
        const filmId = btnDel.closest('.heart-item').dataset.idHeart;
        console.log(filmId)
        delHeartFilm(filmId)
        showHeartList(films)
      })
    })

    const heartItemLinks = document.querySelectorAll('.heart-item__link');
    heartItemLinks.forEach(heartItemLink => {
      heartItemLink.addEventListener('click', function () {
        const filmId = heartItemLink.closest('.heart-item').dataset.idHeart;
        saveIndexFilm(filmId);
      })
    })

  } else {
    biBell.style.fill = "";
    const heartListHtml = `<li class="heart-list__empty">Тут пока пусто :-(</li>`
    heartListEl.insertAdjacentHTML('beforeend', heartListHtml);
    btnHeartQuantityEl.textContent = '';
  }
}