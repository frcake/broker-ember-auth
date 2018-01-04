import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	session: Ember.inject.service('session'),

	actions: {
		authenticate: function() {
			let {
				identification,
				password
			} = this.getProperties('identification', 'password');
			return this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
				this.set('errorMessage', reason.error);
			});
		}

	}
});
