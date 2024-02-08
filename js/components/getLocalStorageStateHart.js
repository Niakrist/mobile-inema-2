export const getLocalStorageStateHart = () => {
  let stateHeart = []
  if (localStorage.getItem('heartFilm')) {
    stateHeart = JSON.parse(localStorage.getItem('heartFilm'));
  }
  return stateHeart;
}
