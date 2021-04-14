const sampleAstronauts = [
    {
        name: "Michelle Diaz",
        applicationReceived: new Date(2025, 2, 22),
        preferredShip: ["Nammu", "Abzu", "Ki"]
    },
    {
        name: "Alexis Ha",
        applicationReceived: new Date(2025, 2, 30),
        preferredShip: ["Abzu", "Ki", "Nammu"]
    },
    {
        name: "Judson Colomb",
        applicationReceived: new Date(2025, 4, 2),
        preferredShip: ["Ki", "Abzu", "Nammu"]

    },
    {
        name: "Evia Rosalez",
        applicationReceived: new Date(2025, 2, 22),
        preferredShip: ["Ki", "Abzu", "Nammu"]
    },
    {
        name: "Danille Bedrosian",
        applicationReceived: new Date(2025, 3, 18),
        preferredShip: ["Abzu", "Nammu", "Ki"]
    },
    {
        name: "Verlene Brozena",
        applicationReceived: new Date(2025, 2, 6),
        preferredShip: ["Nammu", "Abzu", "Ki"]
    },
    {
        name: "Taylor Kilfoyle",
        applicationReceived: new Date(2025, 0, 10),
        preferredShip: ["Nammu", "Abzu", "Ki"]

    },
    {
        name: "Jonas Violett",
        applicationReceived: new Date(2025, 2, 9),
        preferredShip: ["Abzu", "Ki", "Nammu"]
    }
];

const sampleShips = [
    { name: "Nammu", capacity: 5, expeditionDate: new Date(2025, 5, 1), assignedAstronauts: [] },
    { name: "Ki", capacity: 2, expeditionDate: new Date(2025, 8, 15), assignedAstronauts: [] },
    { name: "Abzu", capacity: 2, expeditionDate: new Date(2025, 5, 12), assignedAstronauts: [] }
];

module.exports = {
    sampleAstronauts,
    sampleShips
};


