import Ember from 'ember';
import FormsFormResetPasswordMixin from 'frontend/mixins/forms/form-reset-password';
import { module, test } from 'qunit';

module('Unit | Mixin | forms/form reset password');

// Replace this with your real tests.
test('it works', function(assert) {
  let FormsFormResetPasswordObject = Ember.Object.extend(FormsFormResetPasswordMixin);
  let subject = FormsFormResetPasswordObject.create();
  assert.ok(subject);
});
