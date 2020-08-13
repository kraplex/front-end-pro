const myArray = [3, 4, 5]


//Написать собственную реализацию функции forEach
function infoConsole(item) {
    console.log(`Array's item's value: ${item}`)
}

function infoAlert(item) {
    alert(`Array's item's value: ${item}`)
}

function forEach(ar, callback) {
    for (let index = 0; index < ar.length; index++) {
        const value = ar[index];
        callback(value)      
    }
}
forEach(myArray, infoConsole)
myArray.forEach(infoConsole)


//Написать собственную реализацию функции map
function plusThree(item) {
    return item + 2;
}

function map(array, callback) {
    const arrayAfterCallback = []
    for (index = 0; index < array.length; index++) {
        arrayAfterCallback.push(callback(array[index]))
    }
    return arrayAfterCallback
}
const myArrayAfterMap = map(myArray, plusThree);
console.log(myArrayAfterMap)


//Написать собственную реализацию функции filter
const usersAges = [18, 25, 47, 24, 69]

function usersAgesMore24(item) {
    if (item > 24) {
        return true
    }
}

function filter(array, callback) {
    const filteredArray = []
    for (index = 0; index < array.length; index++) {
        if (callback(array[index])) {
            filteredArray.push(array[index])
        }
    }
    return filteredArray
}
const filteredUsersAges = filter(usersAges, usersAgesMore24)
console.log(filteredUsersAges)


//Написать собственную реализацию функции some и every
function moreThan15(item) {
    return item > 15
}

const everySomeArray = [4, 17, 10]

function some(array, callback) {
    for (index = 0; index < array[index]; index++) {
        if (callback(array[index]) === true) {
            return true
        }
    } return false
}

function every(array, callback) {
    for (index = 0; index < array[index]; index++) {
        if (callback(array[index]) === false) {
            return false
        }
    } return true
}

const isArrayValid = some(everySomeArray, moreThan15)
console.log(isArrayValid)