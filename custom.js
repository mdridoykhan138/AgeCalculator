// Main javaScript area here 
// let userInput = document.getElementById("date");
// userInput.max = new Date().toISOString().split("T")[0];
// let result = document.getElementById("result");

// function calculateAge(){
//     let birthDate = new Date(userInput.value);

//     let d1 = birthDate.getDate();
//     let m1 = birthDate.getMonth() + 1;
//     let y1 = birthDate.getFullYear();

//     let today = new Date();

//     let d2 = today.getDate();
//     let m2 = today.getMonth() + 1;
//     let y2 = today.getFullYear();

//     let d3, m3, y3;

//     y3 = y2 - y1;

//     if(m2 >= m1){
//         m3 = m2 - m1;
//     }else{
//         y3--;
//         m3 = 12 + m2 - m1;
//     }

//     if(d2 >= d1){
//         d3 = d2 - d1;
//     }else{
//         m3--;
//         d3 = getDaysInMonth(y1, m1) + d2 -d1;
//     }
//     if(m3 < 0){
//         m3 = 11;
//         y3--;
//     }
//     result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
// }
// function getDaysInMonth(year, month){
//     return new Date(year, month, 0).getDate();
// }

function calculateAndDisplayAge() {
    // Get the date input element and the result display element
    let userInput = document.getElementById("date");
    let result = document.getElementById("result");
    
    // Set the maximum allowable date to today's date
    userInput.max = new Date().toISOString().split("T")[0];

    // Check if the user has provided a valid date
    if (!userInput.value) {
        result.innerHTML = "Please select your birth date."; // Display error if no date is selected
        return;
    }

    // Convert the user-provided date into a Date object
    let birthDate = new Date(userInput.value);
    let today = new Date(); // Get today's date

    // Extract day, month, and year from the birth date
    let d1 = birthDate.getDate(),
        m1 = birthDate.getMonth() + 1, // Months are 0-based, so add 1
        y1 = birthDate.getFullYear();

    // Extract day, month, and year from today's date
    let d2 = today.getDate(),
        m2 = today.getMonth() + 1, // Months are 0-based, so add 1
        y2 = today.getFullYear();

    // Variables to store the calculated age
    let y3 = y2 - y1; // Calculate year difference
    let m3 = m2 >= m1 ? m2 - m1 : (y3--, 12 + m2 - m1); // Adjust for months
    let d3 = d2 >= d1 ? d2 - d1 : (--m3, getDaysInMonth(y1, m1) + d2 - d1); // Adjust for days

    // If months go negative after adjustment, fix it
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Display the calculated age in the result element
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;

    // Helper function to calculate the number of days in a specific month of a given year
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate(); // Use a Date object to find days in the month
    }
};

// Main javaScript area ends here 