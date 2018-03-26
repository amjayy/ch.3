function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function (){
	return this.rooms - this.booked;
  };
}

var jxnHotel = new Hotel ('Jxn', 40, 25);
var kamdenHotel = new Hotel ('Kamden', 120, 77);

var details1 = jxnHotel.name + 'rooms: ';
	details1 += jxnHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = kamdenHotel.name + 'rooms: ';
	details2 += kamdenHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;