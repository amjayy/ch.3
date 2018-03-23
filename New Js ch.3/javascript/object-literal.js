var hotel = {
  name: 'Quay',
  rooms: 40,
  booked = 25,
  checkAvailability: function() {
	return this.rooms - this.booked;
  }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elName = document.getElementById('rooms');
elName.textContent = hotel.checkAvailability();
