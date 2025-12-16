const calculerAddition = require('./add');

test('calculerAddition(15, 5) donne 20', () => {
    expect(calculerAddition(15, 5)).toBe(20);
});
