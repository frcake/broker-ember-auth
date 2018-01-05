import Ember from 'ember';
import { task } from 'ember-concurrency';
import formSignup from '../../mixins/forms/form-signup'

export default Ember.Controller.extend(formSignup,{
	session: Ember.inject.service('session'),

	actions: {
		triggerSaveChain(user) {
   this.get('saveNewUser').perform(user)
		}
	}
});
