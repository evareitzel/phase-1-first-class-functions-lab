// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
    return array.slice(0, 2);
};

const returnLastTwoDrivers = function(array){
        return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier(num){
//     return function fareMultiplier(fare){
//         num * fare;
//     };
// }

function createFareMultiplier(num) {
    const fareMultiplier = fare => num * fare;
    return fareMultiplier;
}

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare * 3;
}

function selectDifferentDrivers(drivers, fu){
    return fu(drivers);
}