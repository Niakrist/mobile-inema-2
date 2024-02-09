const reservBtns = document.querySelectorAll('.reserv-btn');



reservBtns.forEach(reservBtn=> {

  if (reservBtn.disabled) {
    const seat = reservBtn.querySelector('.bi-circle-fill');
    seat.classList.add('block')
  }

  reservBtn.addEventListener('click', function() {
    const seat = reservBtn.querySelector('.bi-circle-fill');
    seat.classList.add('reserv');
  })
})