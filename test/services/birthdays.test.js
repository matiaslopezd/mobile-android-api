const assert = require('assert');
const app = require('../../src/app');

describe('\'birthdays\' service', () => {
  it('registered the service', () => {
    const service = app.service('birthdays');

    assert.ok(service, 'Registered the service');
  });
});
