import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Component.extend({
	tagName: '',
	session: Ember.inject.service('session'),



	actions: {
		propagateSaveAction() {
			let user = this.get('user')
			//user.viewer = true
			this.attrs.triggerSave(user);
		}
	}
});
