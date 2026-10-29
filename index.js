function makeReservation(){
    console.log("Welcome to B-Dishes Restaurant, We serve the Best Dishes");

    const customerData = {};

    customerData.firstName = prompt("What is your first Name?");
    customerData.secondName = prompt("What is your last Name?");
    customerData.date = prompt("the date of resevration");
    customerData.time = prompt("the time of reservation");
    customerData.partySize = prompt("wat is the partySize");


    // the innerfunction
    function displayReservationDetails(){
        console.log(`${customerData.firstName} ${customerData.secondName} has made a reservation on the ${customerData.date} at ${customerData.time} .Number of guest attending will be: ${customerData.partySize}`);
    }

    displayReservationDetails();
}
makeReservation();