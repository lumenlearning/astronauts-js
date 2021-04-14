const { sampleAstronauts, sampleShips } = require('./astronautsData.js');

function lookupSpaceship(shs, sn) {
    return shs.find((spaceship) => spaceship.name === sn);
}

function assignToSpaceships(astronauts, spaceships) {
    const notYetAssigned = [];
    const sortedAstronauts = astronauts.sort((a1, a2) =>
        a1.applicationReceived < a2.applicationReceived);

    sortedAstronauts.forEach((index, a) => {
        const firstChoiceShip = lookupSpaceship(spaceships, a.preferredShip[0]);
        if (firstChoiceShip.capacity <= firstChoiceShip.assignedAstronauts.length) {
            notYetAssigned.push(a);
        } else {
            firstChoiceShip.assignedAstronauts.push(a);
        }
    });

    notYetAssigned.forEach((index, a1) => {
        const secondChoiceShip = lookupSpaceship(spaceships, a.preferredShip[1]);
        if (secondChoiceShip.capacity === secondChoiceShip.assignedAstronauts.length) {
            const thirdChoiceShip = lookupSpaceship(spaceships, a.preferredShip[2]);
            thirdChoiceShip.assignedAstronauts.push(a);
        } else {
            secondChoiceShip.assignedAstronauts.push(a);
        }
    });
}

function formatNotification(astronaut, spaceship) {
    return `Congratulations ${astronaut}. You have been assigned to ` +
    `journey into the heart of the universe on the Spaceship ${spaceship.name}. ` +
    `Please be prepared to start your journey on ${spaceship.expeditionDate.getMonth() + 1}/` +
    `${spaceship.expeditionDate.getDate()}/${spaceship.expeditionDate.getFullYear()}.`;
}

function notifySpaceshipAssignments(spaceships, astronauts) {
    assignToSpaceships(astronauts, spaceships);
    spaceships.forEach((spaceship) => {
        spaceship.assignedAstronauts.forEach((astronaut) => {
            console.log(formatNotification(astronaut, spaceship));
        });
    });
}

/* Calling the main function */
notifySpaceshipAssignments(sampleAstronauts, sampleShips);

/* exports */
module.exports = {
    assignToSpaceships,
    formatNotification
};
