import Ember from 'ember';
import FormsFormSignupMixinMixin from 'frontend/mixins/forms/form-signup-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | forms/form signup mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let FormsFormSignupMixinObject = Ember.Object.extend(FormsFormSignupMixinMixin);
  let subject = FormsFormSignupMixinObject.create();
  assert.ok(subject);
});
