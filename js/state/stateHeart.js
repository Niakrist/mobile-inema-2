import { loadIndexFilm } from "./saveIndexFilm.js";

let stateHeart = []

export const addHeartFilm = (indexFilm) => {
  if (localStorage.getItem('heartFilm')) {
    stateHeart = JSON.parse(localStorage.getItem('heartFilm'));
  }
  if (!stateHeart.includes(indexFilm)) {
    stateHeart.push(indexFilm);
  }
  localStorage.setItem('heartFilm', JSON.stringify(stateHeart));
}

export const delHeartFilm = (indexFilm) => {
  if (localStorage.getItem('heartFilm')) {
    stateHeart = JSON.parse(localStorage.getItem('heartFilm'));
    const stateHeartDel = stateHeart.filter(item => item !== indexFilm)
    localStorage.setItem('heartFilm', JSON.stringify(stateHeartDel))
  }
}