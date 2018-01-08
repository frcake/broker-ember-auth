// This route redirects the request from email confirmation to rails routes ,
//if this route file not implemented the request handled by ember
import Ember from 'ember'

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	beforeModel: function(transition) {
		return this.get('ajax').request(`/users/confirmation?confirmation_token=${ transition.queryParams.confirmation_token }`, {
			method: 'GET',
		}).then(() => this.transitionTo('login'));
	}
});
