export const showEmpteListFilms = () => {
  const filmsEl = document.querySelector('.films');
  const div = document.createElement('div');
  div.textContent = 'По заданному вопросу фильмы не найдены';
  div.classList.add('film__empte');
  filmsEl.append(div);
  return filmsEl;
}


