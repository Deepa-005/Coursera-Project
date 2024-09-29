const seats = document.querySelectorAll('.seat');
const bookBtn = document.getElementById('bookBtn');
const selectedSeatsDisplay = document.getElementById('selectedSeats');
let selectedSeats = [];

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('booked')) {
            seat.classList.toggle('selected');
            updateSelectedSeats();
        }
    });
});

bookBtn.addEventListener('click', () => {
    selectedSeats.forEach(seat => {
        const seatDiv = document.querySelector(`.seat[data-seat="${seat}"]`);
        if (seatDiv) {
            seatDiv.classList.remove('selected');
            seatDiv.classList.add('booked');
        }
    });
    selectedSeats = [];
    updateSelectedSeats();
    alert('Seats booked successfully!');
    
});

function updateSelectedSeats() {
    selectedSeats = Array.from(seats)
        .filter(seat => seat.classList.contains('selected'))
        .map(seat => seat.getAttribute('data-seat'));
    
    selectedSeatsDisplay.textContent = selectedSeats.length > 0 ? 
        `Selected Seats: ${selectedSeats.join(', ')}` : 'No seats selected';
}
