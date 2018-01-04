import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	session: Ember.inject.service('session'),

	actions: {
		submit() {
			let user = this.get('user')
			user.viewer = true
			this.attrs.triggerSave(user);
		}
	}
});
