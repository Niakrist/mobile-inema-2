const filmTabsEl = document.querySelectorAll('.film-tab');
const filmTabItemsEl = document.querySelectorAll('.film-tab__item');

export const changeTabs = () => {
  filmTabsEl.forEach((filmTab, index) => {
    filmTab.addEventListener('click', function (e) {
      document.querySelector('.film-tab.active') && document.querySelector('.film-tab.active').classList.remove('active');
      filmTabItemsEl.forEach(filmTabItem => {
        filmTabItem.classList.add('hidden');
        if (index === Number(filmTabItem.dataset.tab)) filmTabItem.classList.remove('hidden')
      })
    })
  })
}
