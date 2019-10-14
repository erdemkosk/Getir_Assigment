const validation = require('../api/data/models/validation');

test('Check valid is True', () => {
    expect(new validation("2016-11-11", "2017-1-1", "200", "1000").checkValidation()).toBe(true);
})
test('Check valid is False', () => {
    expect(new validation("", "2017-1-1", "200", "1000").checkValidation()).toBe(false);
})

