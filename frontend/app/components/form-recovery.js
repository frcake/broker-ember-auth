import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	session: Ember.inject.service('session'),
	ajax: Ember.inject.service(),
	actions: {
		submit() {
			let mail = this.get('email');
			return this.get('ajax').request(`/users/password?email=${mail}`, {
				method: 'POST',
			});
		}
	}
});
