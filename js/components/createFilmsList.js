const filmsEL = document.querySelector('.films');

export const createFilmsList = (films) => {
  filmsEL.innerHTML = "";
  films.forEach((film) => {
    const filmHTML = `
    <div class="film">
      <div class="film__img">
        <img src="${film.poster}" alt="${film.title}">
      </div>
      <span class="film__rating">IMDM ${film.imdb}</span>
      <h2 class="film__title"><a href="/film.html" class="film__link" data-id-film=${film.id}>${film.title}</a></h2>
      <span class="film__genre">${film.genre[0]}</span>
    </div>`
  filmsEL.insertAdjacentHTML('beforeend', filmHTML)
  })
}

