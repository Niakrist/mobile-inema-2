export const saveIndexFilm = (idFilm) => {
  return localStorage.setItem('idFilm', JSON.stringify(idFilm))
}

export const loadIndexFilm = () => {
  return localStorage.getItem('idFilm') && JSON.parse(localStorage.getItem('idFilm'));
}