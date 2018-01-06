import Ember from 'ember'
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin,{
	ajax: Ember.inject.service(),
	beforeModel: function(transition) {
		return this.get('ajax').request(`/users/password/edit?reset_password_token=${ transition.queryParams.password_token }`, {
			method: 'GET',
		});//.then(() => this.transitionTo('index'));
	}
});
