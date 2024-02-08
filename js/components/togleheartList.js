export const togleHeartList = () => {
  const btnHeartEl = document.querySelector('.btn-heart');
  const heartListEl = document.querySelector('.heart-list');

  btnHeartEl.addEventListener('click', function(e) {
    e.stopPropagation();
    heartListEl.classList.remove('heart-list--none');
  })

  window.addEventListener('click', function(e) {
    // e.stopPropagation();
    if (!e.target.closest('.heart-list') && !e.target.closest('.heart-item__del')) {
      heartListEl.classList.add('heart-list--none');
    }
  })
}