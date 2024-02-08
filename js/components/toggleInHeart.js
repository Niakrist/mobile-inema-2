import { loadIndexFilm } from "../state/saveIndexFilm.js";
import { addHeartFilm, delHeartFilm } from "../state/stateHeart.js";

export const toggleInHeart = () => {
  const btnHeartEl = document.querySelector('.btn-heart');
  const biHeartEl = document.querySelector('.bi-heart');

  btnHeartEl.addEventListener('click', function () {
    const indexFilm = loadIndexFilm()
    if (biHeartEl.classList.contains('heart')) {
      delHeartFilm(indexFilm);
      biHeartEl.classList.remove('heart');
    } else {
      addHeartFilm(indexFilm);
      biHeartEl.classList.add('heart');
    }
  })
}