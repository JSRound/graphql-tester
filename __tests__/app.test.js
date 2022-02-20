const app = require('../index.js');

describe('testing the app', () => {
  test('is a express app', async function () {
    expect(typeof app).toBe('object');
  });
});
