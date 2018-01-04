import Ember from 'ember';
import CheckAdminMixin from 'frontend/mixins/check-admin';
import { module, test } from 'qunit';

module('Unit | Mixin | check admin');

// Replace this with your real tests.
test('it works', function(assert) {
  let CheckAdminObject = Ember.Object.extend(CheckAdminMixin);
  let subject = CheckAdminObject.create();
  assert.ok(subject);
});
