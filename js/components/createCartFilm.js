import { loadIndexFilm } from "../state/saveIndexFilm.js"

const idFilm = loadIndexFilm();

export const createCartFilm = (films) => {
  const playerWrapper = document.querySelector('.player-wrapper');

  const currentFilm = films.find(film => {
    return film.id === Number(idFilm);
  })

  const cartFilmHTML = `
      <div class="player" data-id-film="${currentFilm.id}">
          <div class="player__prev" >
          <img class="player__img" src="${currentFilm.poster}" alt="${currentFilm.title}">
          <div class="player-gradinet"></div>
          <div class="play">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" class="bi bi-play-fill"
              viewBox="0 0 16 16">
              <path
                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
          </div>
          <div class="player__genre">
            <img src="./img/film.svg" alt="">
            <span>${currentFilm.genre[0]}<span>
          </div>
          <h2 class="player__title">
          ${currentFilm.title}
          </h2>
          </div>

          <iframe class="player__trailer" width="560" height="315"
          src="${currentFilm.trailer}">
        </iframe>
        <div class="player__info">
        <div class="player__info-imdb">IMDB ${currentFilm.imdb}</div>
        <div class="player__info-time">${currentFilm.time}</div>
        <div class="player__info-date">${currentFilm.date}</div>
      </div>
        </div>

        <div class="film-tabs">
          <button class="film-tab active">О фильме</button>
          <button class="film-tab">Актеры</button>
          <button class="film-tab">Фотографии</button>
        </div>
        <div class="film-tab__wrapper">
          <div class="film-tab__about film-tab__item" data-tab="0">
          ${currentFilm.description}
          </div>
          <div class="film-tab__cast film-tab__item hidden" data-tab="1">
            <div class="cast">
            ${currentFilm.cast.map(cast => `<div class="cast__title">${cast}</div>`).join('')}
            </div>
          </div>
          <div class="film-tab__photo film-tab__item hidden" data-tab="2">

            <div class="photo">
            ${currentFilm.gallery.map(photos => {
    return `<img src="${photos}">`;
  })}
            </div>
          </div>
         </div>`;

  playerWrapper.insertAdjacentHTML('beforeend', cartFilmHTML);


} 