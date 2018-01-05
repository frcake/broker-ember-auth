import Ember from 'ember';
import FormsFormPasswordResetMixin from 'frontend/mixins/forms/form-password-reset';
import { module, test } from 'qunit';

module('Unit | Mixin | forms/form password reset');

// Replace this with your real tests.
test('it works', function(assert) {
  let FormsFormPasswordResetObject = Ember.Object.extend(FormsFormPasswordResetMixin);
  let subject = FormsFormPasswordResetObject.create();
  assert.ok(subject);
});
