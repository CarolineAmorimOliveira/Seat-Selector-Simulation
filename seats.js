let availableSeats = ["1A", "2B", "3C", "4D", "5E", "6F", "7G", "8H", "9I", "10J"];

function seatSelector(choice) {
  console.log("Welcome to the seat selection for your next game!");

  if (choice === "random") {
    let randomIndex = Math.floor(Math.random() * availableSeats.length);
    let seat = availableSeats[randomIndex];
    console.log("Your seat is " + seat + ". Enjoy the game!");
    availableSeats.splice(randomIndex, 1);
  }

  else if (choice === "pick") {
    // Display all available seats manually
    console.log("Available seats:");
    for (let i = 0; i < availableSeats.length; i++) {
      console.log(availableSeats[i]);
    }

    let seat = prompt("Which seat would you like?").toUpperCase();

    while (true) {
      let found = false;

      for (let i = 0; i < availableSeats.length; i++) {
        if (seat === availableSeats[i]) {
          found = true;
          break;
        }
      }

      if (found) {
        console.log("Your seat is " + seat + ". Enjoy the game!");
        for (let i = 0; i < availableSeats.length; i++) {
          if (availableSeats[i] === seat) {
            availableSeats.splice(i, 1);
            break;
          }
        }
        break;
      } else {
        console.log("Seat " + seat + " is not available. Please try again.");
        console.log("Available seats:");
        for (let i = 0; i < availableSeats.length; i++) {
          console.log(availableSeats[i]);
        }
        seat = prompt("Which seat would you like?").toUpperCase();
      }
    }
  }

  else {
    console.log("Invalid choice. Please enter 'random' or 'pick'.");
  }
}

// Call 1: User picks a seat
seatSelector("pick");

// Call 2: Random seat
seatSelector("random");
