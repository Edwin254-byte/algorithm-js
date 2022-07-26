"use strict";
//Assume the time are in 24hr clock system e.g. 8 -> 08:00hrs
const schedule = [
  { name: "Aero1", arrival: 8, departure: 10 },
  { name: "Aero2", arrival: 9, departure: 11 },
  { name: "Aero3", arrival: 12, departure: 14 },
  { name: "Aero4", arrival: 8, departure: 13 },
  { name: "Aero5", arrival: 5, departure: 6 },
  { name: "Aero6", arrival: 13, departure: 15 },
];
const slots = [{ bay: "#1", occupied: false }];
let slotCounter = 1;

//computing duration property
schedule.forEach((aero) => (aero.duration = aero.departure - aero.arrival));

//pick an aeroplane which arrives 1st and has the shortest duration
function getCurPlane(schedule) {
  let curPlane;
  let startTime = 24;
  let curDuration = schedule[0].duration;
  schedule.forEach((aero) => {
    //getting the earliest flight
    if (aero.arrival <= startTime && aero.duration <= curDuration) {
      startTime = aero.arrival;
      curDuration = aero.duration;
      curPlane = aero;
    }
  });

  return curPlane;
}

//getting planes that arrives during the curPlane duration
function getOverlappingPlanes(curPlane) {
  let planes = [];
  schedule.forEach((aero) => {
    if (
      aero.arrival >= curPlane.arrival &&
      aero.arrival <= curPlane.departure
    ) {
      planes.push(aero);
    }
  });
  return planes;
}

// Assign a free slot to the curPlane
function assignSlot(curPlane) {
  const freeSlot = slots.find((slot) => slot.occupied === false);
  if (freeSlot) {
    freeSlot.plane = curPlane.name;
    freeSlot.occupied = true;
    return;
  }
  slots.push({
    bay: `#${slotCounter + 1}`,
    occupied: true,
    plane: curPlane.name,
  });
  slotCounter++;
}

//unassigning a slot i.e. making it unoccupied
function unassignSlot(curPlane) {
  const occupiedSlot = slots.find((slot) => slot.plane === curPlane.name);
  if (occupiedSlot) {
    occupiedSlot.occupied = false;
    occupiedSlot.plane = "";
    return;
  }
  console.log(`The plane has not been assigned a slot`);
}
//remove the assigned plane from shedule
function unschedulePlane(name) {
  schedule.splice(
    schedule.findIndex((aero) => aero.name === name),
    1
  );
}

/////////////////////////IMPLEMENTATION//////////////////////////////
while (schedule.length > 0) {
  //1. Get current plane
  let curPlane = getCurPlane(schedule);
  //2. Assign free slot to the current plane
  assignSlot(curPlane);
  //3. Unshedule the current plane
  unschedulePlane(curPlane);

  //4.get planes colliding with the current plane
  let overlappingPlanes = getOverlappingPlanes(curPlane);
  //5. Check if there is NO colliding planes
  if (overlappingPlanes.length === 0) {
    //make the slot assigned to current plane free and jump to the next loop
    unassignSlot(curPlane);
    continue;
  }

  //The code below is executed only if there is colliding planes

  //6. Assign free slots to colliding planes if available. If not create a new slot for them
  overlappingPlanes.forEach((plane) => assignSlot(plane));
  //7. Unshedule the colliding planes
  overlappingPlanes.forEach((plane) => unschedulePlane(plane));
  //8. make the slot assigned to current plane free
  unassignSlot(curPlane);
  //9. make the slots assigned to colliding planes free
  overlappingPlanes.forEach((plane) => unassignSlot(plane));
  //10. repeat the loop😁
}

//RESULTS
//console.log(slots);
console.log(`Number of Bays needed is ${slotCounter}`);
