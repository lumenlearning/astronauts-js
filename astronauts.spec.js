const { test, expect } = require("@jest/globals");
const { assignToSpaceships, formatNotification } = require("./main.js");

const expeditionDate = new Date(2022, 0, 1);

test("assignToSpaceships should add astronauts to their first choices", function() {
    const spaceships = [
        { name: "Space A", capacity: 1, assignedAstronauts: [], expeditionDate },
        { name: "Space B", capacity: 1, assignedAstronauts: [], expeditionDate }
    ];
    const astronauts = [
        {
            name: "Astro 1",
            applicationReceived: new Date(2020, 0, 2),
            preferredShip: ["Space A", "Space B"]
        },
        {
            name: "Astro 2",
            applicationReceived: new Date(2020, 0, 1),
            preferredShip: ["Space B", "Space A"]
        }
    ];

    assignToSpaceships(astronauts, spaceships);
    expect(spaceships[0].assignedAstronauts.length).toEqual(1);
    expect(spaceships[0].assignedAstronauts[0].name).toEqual("Astro 1");
    expect(spaceships[1].assignedAstronauts.length).toEqual(1);
    expect(spaceships[1].assignedAstronauts[0].name).toEqual("Astro 2");
});

test("assignToSpaceships should add astronauts to their second choice only if the first is at capacity", function() {
    const spaceships = [
        { name: "Space A", capacity: 1, assignedAstronauts: [], expeditionDate },
        { name: "Space B", capacity: 2, assignedAstronauts: [], expeditionDate }
    ];
    const astronauts = [
        {
            name: "Astro 1",
            applicationReceived: new Date(2020, 0, 2),
            preferredShip: ["Space A", "Space B"]
        },
        {
            name: "Astro 2",
            applicationReceived: new Date(2020, 0, 1),
            preferredShip: ["Space B", "Space A"]
        },
        {
            name: "Astro 3",
            applicationReceived: new Date(2020, 0, 3),
            preferredShip: ["Space A", "Space B"]
        }
    ];

    assignToSpaceships(astronauts, spaceships);
    expect(spaceships[0].assignedAstronauts.length).toEqual(1);
    expect(spaceships[0].assignedAstronauts[0].name).toEqual("Astro 1");
    expect(spaceships[1].assignedAstronauts.length).toEqual(2);
    expect(spaceships[1].assignedAstronauts[0].name).toEqual("Astro 2");
    expect(spaceships[1].assignedAstronauts[1].name).toEqual("Astro 3");
});

test("assignToSpaceships should assign an astronaut whose first choice spaceship is full but applied first " +
    "to their next capacity spaceship before any other spaceship", function() {

    const spaceships = [
        { name: "Space A", capacity: 1, expeditionDate, assignedAstronauts: [] },
        { name: "Space B", capacity: 1, expeditionDate, assignedAstronauts: [] },
        { name: "Space C", capacity: 1, expeditionDate, assignedAstronauts: [] }
    ];
    const astronauts = [
        {
            name: "Astro 1",
            applicationReceived: new Date(2021, 0, 1),
            preferredShip: ["Space A", "Space B", "Space C"]
        },
        {
            name: "Astro 2",
            applicationReceived: new Date(2021, 0, 2),
            preferredShip: ["Space A", "Space B", "Space C"]
        },
        {
            name: "Astro 3",
            applicationReceived: new Date(2021, 0, 3),
            preferredShip: ["Space B", "Space A", "Space C"]
        }
    ];

    assignToSpaceships(astronauts, spaceships);
    expect(spaceships[0].assignedAstronauts.length).toEqual(1);
    expect(spaceships[0].assignedAstronauts[0].name).toEqual("Astro 1");
    expect(spaceships[1].assignedAstronauts.length).toEqual(1);
    expect(spaceships[1].assignedAstronauts[0].name).toEqual("Astro 3");
    expect(spaceships[2].assignedAstronauts.length).toEqual(1);
    expect(spaceships[2].assignedAstronauts[0].name).toEqual("Astro 2");

});

test("formatNotificationshould format a message to the astronaut", function() {
    const astronaut = { name: "Astro 1" };
    const spaceship = { name: "Space A", expeditionDate: new Date(2025, 5, 14) };

    const message = formatNotification(astronaut, spaceship);

    expect(message).toEqual("Congratulations Astro 1. " +
        "You have been assigned to journey into the heart of the universe on " +
        "the Spaceship Space A. Please be prepared to start your journey on " +
        "6/14/2025.");
});
