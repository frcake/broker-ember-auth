import Ember from 'ember';
import FormsFormLoginMixin from 'frontend/mixins/forms/form-login';
import { module, test } from 'qunit';

module('Unit | Mixin | forms/form login');

// Replace this with your real tests.
test('it works', function(assert) {
  let FormsFormLoginObject = Ember.Object.extend(FormsFormLoginMixin);
  let subject = FormsFormLoginObject.create();
  assert.ok(subject);
});
