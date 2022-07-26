"use strict";
//All activities schedule
//the time is in 24hr clock system so 8 means 08:00hrs

const activitiesShedule = [
  { name: "Event1", startTime: 8, endTime: 16 },
  { name: "Event2", startTime: 9, endTime: 12 },
  { name: "Event3", startTime: 15, endTime: 16 },
  { name: "Event4", startTime: 17, endTime: 22 },
];
//const activitiesShedule = [];
const acceptedEvents = [];
const deniedEvents = [];

/* //generate random values
let counter = 0;
while (counter < 5) {
  let startTime = Math.floor(Math.random() * 24);
  let endTime = Math.floor(Math.random() * 24);
  if (endTime > startTime) {
    activitiesShedule.push({
      name: `Activity${counter + 1}`,
      startTime,
      endTime,
    });
    counter++;
  }
} */
//sort the shedules according to arrival time
activitiesShedule.sort((a, b) => a.startTime - b.startTime);

//calculate duration
activitiesShedule.forEach(
  (event) => (event.duration = event.endTime - event.startTime)
);

const durations = [];
activitiesShedule.forEach((element) => {
  durations.push(element.duration);
});
const avgDuration = (Math.max(...durations) + Math.min(...durations)) / 2;

//get the start(first shedule startTime) and end (last shedule endTime)
let start = activitiesShedule[0].startTime;
const end = activitiesShedule.at(-1).endTime;
let isRoomVacant = true;
let activities = 0;
//loop the shedule using the start and end variables
for (start; start <= end; start++) {
  activitiesShedule.forEach((event) => {
    if (event.endTime === start && event.sheduled) {
      isRoomVacant = true;
    }
    if (event.startTime === start) {
      if (isRoomVacant) {
        activities = activities + 1;
        isRoomVacant = false;
        event.sheduled = true;
        //add the event as accepted
        acceptedEvents.push(event);
      } else {
        //add the event as denied
        deniedEvents.push(event);
        event.sheduled = false;
      }
    }
  });
}

console.log(activities);
console.log(activitiesShedule);
console.log(acceptedEvents);
console.log(deniedEvents);
