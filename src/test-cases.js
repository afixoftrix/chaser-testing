const testCases = {
    base: {
        list: [
            { name: "Alpha", ranking: 1 },
            { name: "Bravo", ranking: 2 },
            { name: "Charlie", ranking: 4 },
            { name: "Delta", ranking: 5 }
        ],
        exp: {
            avg: 3,
            sort: [
                { name: "Alpha", ranking: 1 },
                { name: "Bravo", ranking: 2 },
                { name: "Charlie", ranking: 4 },
                { name: "Delta", ranking: 5 }
            ]
        }
    },
    single: {
        list: [{ name: "Brody", ranking: 0 }],
        exp: {
            avg: 0,
            sort: [{ name: "Brody", ranking: 0 }]
        }
    },
    multiple: {
        list: [
            { name: "Jaya", ranking: 7 },
            { name: "Jack", ranking: 1 },
            { name: "Jill", ranking: 3 },
            { name: "Ming", ranking: 0 },
            { name: "Monte", ranking: 12 },
            { name: "Mell", ranking: 10 }
        ],
        exp: {
            avg: 5.5,
            sort: [
                { name: "Ming", ranking: 0 },
                { name: "Jack", ranking: 1 },
                { name: "Jill", ranking: 3 },
                { name: "Jaya", ranking: 7 },
                { name: "Mell", ranking: 10 },
                { name: "Monte", ranking: 12 }
            ]
        }
    },
    theBoys: {
        list: [
            { name: "Electro", ranking: 69 },
            { name: "Green Goblin", ranking: 420 },
            { name: "Vulture", ranking: 0 },
            { name: "Rhino", ranking: 9000 }
        ],
        exp: {
            avg: 2372.25,
            sort: [
                { name: "Vulture", ranking: 0 },
                { name: "Electro", ranking: 69 },
                { name: "Green Goblin", ranking: 420 },
                { name: "Rhino", ranking: 9000 }
            ]
        }
    },
    invalids: {
        list: [
            "hi there",
            { age: 12, hand: 'left'},
            false,
            [1,2,3,4]
        ],
        exp: {
            avg: "invalid input",
            sort: "invalid input"
        }
    }
};
module.exports = testCases;
