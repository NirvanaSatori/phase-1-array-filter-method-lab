// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(array, driver){
    return array.filter(function (name){
      return (name.toUpperCase() === driver.toUpperCase())
    })
}


function fuzzyMatch(array, driver) {
    return array.filter (name => name.slice(0,2) ===driver)
}

function matchName(array, driver){
    return array.filter(structure =>structure.name ===driver
    )
}