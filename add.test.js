const {
    calculerAddition,
    appliquerReduction,
} = require('./add');

test('calculerAddition(15, 5) donne 20', () => {
    expect(calculerAddition(15, 5)).toBe(20);
});

test('appliquerReduction(100, 10) donne 90', () => {
    expect(appliquerReduction(100, 10)).toBe(90);
});
