const test = require('node:test');
const assert = require('node:assert');
const mongoose = require('mongoose');
const Inquiry = require('../src/models/Inquiry');
const Production = require('../src/models/Production');
const User = require('../src/models/User');

test('MongoDB Models Schema Verification', async (t) => {
  await t.test('Inquiry model should validate payload correctly', () => {
    const valid = Inquiry.validatePayload({
      name: 'Elena Vance',
      email: 'elena@daydawn.com',
      message: 'Feature film production inquiry for testing.',
    });
    assert.strictEqual(valid.isValid, true);
    assert.strictEqual(valid.errors.length, 0);

    const invalid = Inquiry.validatePayload({
      name: '',
      email: 'not-an-email',
      message: 'short',
    });
    assert.strictEqual(invalid.isValid, false);
    assert.strictEqual(invalid.errors.length, 3);
  });

  await t.test('Production model should be registered in Mongoose', () => {
    assert.strictEqual(typeof Production, 'function');
    assert.strictEqual(Production.modelName, 'Production');
  });

  await t.test('User model should be registered in Mongoose', () => {
    assert.strictEqual(typeof User, 'function');
    assert.strictEqual(User.modelName, 'User');
  });
});
