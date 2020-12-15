const assert = require('assert');
const app = require('../../src/app');

describe('\'gifts\' service', () => {
  it('registered the service', () => {
    const service = app.service('gifts');

    assert.ok(service, 'Registered the service');
  });
});
