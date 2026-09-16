const test = require('node:test');
const assert = require('node:assert');
const app = require('../src/app');

test('Backend Express App Configuration Test', async (t) => {
  await t.test('App should be defined and export an Express instance', () => {
    assert.strictEqual(typeof app, 'function');
    assert.strictEqual(typeof app.use, 'function');
    assert.strictEqual(typeof app.listen, 'function');
  });
});
