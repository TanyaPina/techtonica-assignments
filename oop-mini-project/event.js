class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
      this.addAvailableTickets = function (ticketType, price) {
        this.availableTickets = ticketType,
        this.price = price;
      }
    }
  }

  const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
  );

  const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
  const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

  console.log(eventObj2);
  console.log(eventObj3);

  const eventArray = new Array();

eventArray.push(eventObj1);
console.log(eventArray);
eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray);

document.addEventListener('DOMContentLoaded', () => {
    let html = '';
    eventArray.forEach((item) => {
      html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
  });

class ticketType {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

}
eventObj1.addAvailableTickets("human", 299);
console.log(eventObj1);
eventObj1.addAvailableTickets("vampire", 99);
console.log(eventObj1);
eventObj2.addAvailableTickets("General Admission", 25)
console.log(eventObj2);
eventObj2.addAvailableTickets("Floor Seating", 80)
console.log(eventObj2);
eventObj3.addAvailableTickets("Orchestra", 300)
console.log(eventObj3);
eventObj3.addAvailableTickets("Mezzanine", 200)
console.log(eventObj3);
eventObj3.addAvailableTickets("Balcony", 100)
console.log(eventObj3);
