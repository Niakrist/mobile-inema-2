import { changeTabs } from "./components/changeTabs.js";
import { toggleInHeart } from "./components/toggleInHeart.js";
import { loadIndexFilm } from "./state/saveIndexFilm.js";

const filmTabsEl = document.querySelectorAll('.film-tab');

filmTabsEl && changeTabs();
toggleInHeart();


const statusHeart = () => {
  const playerEl = document.querySelector('.player');
  const curentIndexFilm = playerEl.dataset.idFilm;
  let stateHeart = [];
  if (localStorage.getItem('heartFilm')) {
    stateHeart = JSON.parse(localStorage.getItem('heartFilm'));
  }

  stateHeart.forEach(heartId => {
    if (Number(heartId) === Number(curentIndexFilm)) {
      const biHeartEl = document.querySelector('.bi-heart');
      biHeartEl.classList.add('heart');
    }
  })

}
statusHeart()

const tooglePlayVideo = () => {
  const btnPlaeEl = document.querySelector('.play');
  const playerPrevEl = document.querySelector('.player__prev');
  const videoTrailer = document.querySelector('.player__trailer');

  btnPlaeEl.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    btnPlaeEl.style.display = 'none';
    playerPrevEl.style.display = 'none';
  })

  window.addEventListener('click', function(e) {
    if (e.target.closest('.player')) {
      btnPlaeEl.style.display = '';
      playerPrevEl.style.display = '';
    }
  })
}

tooglePlayVideo()