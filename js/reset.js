const reservBtns = document.querySelectorAll('.reserv-btn');
const priceTotalEl = document.querySelector('.price__total');
const popupEl = document.querySelector('.popup');
const popupSeatValueEl = document.querySelector('.popup__seat-value');
const popupSeatPriceEl = document.querySelector('.popup__seat-price');
const sessionSelectSeatEl = document.querySelector('.session__select-seat');

const seats = [];


reservBtns.forEach(reservBtn => {
  if (reservBtn.disabled) {
    const seat = reservBtn.querySelector('.bi-circle-fill');
    seat.classList.add('block')
  }
  reservBtn.addEventListener('click', function () {
    const seat = reservBtn.querySelector('.bi-circle-fill');
    if (seat.classList.contains('reserv')) {
      seat.classList.remove('reserv')
      const indexSeat = seats.indexOf(seat.dataset.seat);
      seats.splice(indexSeat, 1)
    } else {
      seat.classList.add('reserv');
      seats.push(seat.dataset.seat)
    }
    console.log(seats)
    bookSeat();
    if (seats.length > 0) {
      showPrice()
    }
    else {
      priceTotalEl.textContent = '';
    }
  })
})

function bookSeat() {
  sessionSelectSeatEl.innerHTML = '';
  seats.forEach(seat => {
    sessionSelectSeatEl.innerHTML += `<span>${seat[0].toUpperCase() + seat.slice(1)}, </span>`
  })
}

function showPrice() {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  priceTotalEl.textContent = currency.format((seats.length * 15));;
}


const showPopupByTicket = () => {
  const buyTicketEl = document.querySelector('.buy-ticket');


  buyTicketEl.addEventListener('click', function (e) {

    if (seats.length > 0) {
      popupSeatValueEl.textContent = '';
      popupSeatPriceEl.textContent = '';
      console.log('++')
      e.stopPropagation()
      popupEl.classList.add('popup-active');
  
      popupSeatValueEl.value = sessionSelectSeatEl.textContent;
      popupSeatPriceEl.value = priceTotalEl.textContent;
    } else {

      const sessionSelectEl = document.querySelector('.session__select');
      const priceEl = document.querySelector('.price');

      sessionSelectEl.classList.add('no-info');
      priceEl.classList.add('no-info');
      setTimeout(() => {
        sessionSelectEl.classList.remove('no-info');
        priceEl.classList.remove('no-info');
  
      }, 1000);
    }
  })
}

showPopupByTicket();

const closePopup = () => {
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      popupEl.classList.remove('popup-active');
    }
  })

  window.addEventListener('click', function (e) {
    if (e.target.matches('.popup')) {
      popupEl.classList.remove('popup-active');
    }
  })
  document.querySelector('.form__cancel').addEventListener('click', () => popupEl.classList.remove('popup-active'));
}

closePopup()


