"use strict";
//Test data
const trainShedule = [
  { name: "Train-1", arrival: 8, departure: 10 },
  { name: "Train-2", arrival: 9, departure: 11 },
  { name: "Train-3", arrival: 12, departure: 14 },
  { name: "Train-4", arrival: 8, departure: 13 },
  { name: "Train-5", arrival: 5, departure: 6 },
  { name: "Train-6", arrival: 13, departure: 15 },
];

//const trainShedule = [];

//generate random values
/* let counter = 0;
while (counter < 5) {
  let arrival = Math.floor(Math.random() * 24);
  let departure = Math.floor(Math.random() * 24);
  if (departure > arrival) {
    trainShedule.push({
      name: `Train-${counter + 1}`,
      arrival,
      departure,
    });
    counter++;
  }
} */

//sort the trains using arrival time
trainShedule.sort((a, b) => a.arrival - b.arrival);

//get the boundings and initials
let start = trainShedule[0].arrival;
const end = trainShedule.at(-1).departure;
let bays = 0;
let freeBays = 0;

//iterate the shedule using the bounds
for (start; start <= end; start++) {
  trainShedule.forEach((train) => {
    //checking for any departue
    if (train.departure === start) freeBays = freeBays + 1;
    //checking for any arrival
    if (train.arrival === start) {
      freeBays > 0 ? freeBays-- : bays++;
    }
  });
}

console.log(trainShedule);
console.log(`Number of bays needed is ${bays}`);
