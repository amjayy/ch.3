var hotel = {
  name: 'JXN',
  rooms: 40,
  booked: 25,
  checkAvailability: function() {
	return this.rooms - this.booked;
  }
};
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elName.textContent = hotel.checkAvailability();
