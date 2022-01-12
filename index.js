// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// console.log(returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return (fare) => fare * int;
}

const fareDoubler = createFareMultiplier(2);
// same as below:
// createFareMultiplier(2)(10);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectDriversFunction) {
  console.log(arrayOfDrivers, selectDriversFunction);
  return selectDriversFunction(arrayOfDrivers);
}
