// Code your solution in this file!
let returnFirstTwoDrivers = (FirstTwo) => FirstTwo.slice(0, 2)

let returnLastTwoDrivers = (FirstTwo) => FirstTwo.slice(FirstTwo.length-2)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = (mult) => ((fare) => fare * mult)

let fareDoubler = (fare) => createFareMultiplier(2)(fare);

let fareTripler = (fare) => createFareMultiplier(3)(fare);


function selectDifferentDrivers(FirstTwo, func){
    if (func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(FirstTwo)
    }else if(func === returnLastTwoDrivers){
        return returnLastTwoDrivers(FirstTwo)
    }
}