import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | subscribe', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:subscribe');
    assert.ok(route);
  });
});
