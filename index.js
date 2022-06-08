// Code your solution in this file!phase-1-first-class-functions-lab
const returnFirstTwoDrivers = (FirstTwo)=>FirstTwo.slice(0, 2)

const returnLastTwoDrivers = (FirstTwo) => FirstTwo.slice(FirstTwo.length-2)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = (multiplier) => ((fare) => fare * multiplier)

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

let fareTripler = (fare) => createFareMultiplier(3)(fare);


function selectDifferentDrivers(FirstTwo, either){
    if (either === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(FirstTwo)
    }else if (either === returnLastTwoDrivers){
        return returnLastTwoDrivers(FirstTwo)
    }
}