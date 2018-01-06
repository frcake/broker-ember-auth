import Ember from 'ember';
import {task} from 'ember-concurrency'
import formPasswordReset from '../../../mixins/forms/form-password-reset'

export default Ember.Controller.extend(formPasswordReset,{
 tagName: '',
	session: Ember.inject.service('session'),

	actions: {
		triggerPasswordResetChain() {
			this.get('resetPassword').perform();
		}
	}
});
