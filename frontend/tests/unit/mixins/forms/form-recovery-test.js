import Ember from 'ember';
import FormsFormRecoveryMixin from 'frontend/mixins/forms/form-recovery';
import { module, test } from 'qunit';

module('Unit | Mixin | forms/form recovery');

// Replace this with your real tests.
test('it works', function(assert) {
  let FormsFormRecoveryObject = Ember.Object.extend(FormsFormRecoveryMixin);
  let subject = FormsFormRecoveryObject.create();
  assert.ok(subject);
});
