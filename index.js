// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
  
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(int){
  return function(fare){
    return int * fare;
    
  }
  
}

function fareDoubler(fare){
  const fd = createFareMultiplier();
  
}
  
}

    
