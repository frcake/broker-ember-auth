// Passoword reset implement devise password reset, this Component redirects email confirmation request to
// to correct url in serverside route table , if this not implemented the request is handle by ember not rails
import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	session: Ember.inject.service('session'),
	ajax: Ember.inject.service(),
	actions: {
		persist() {
			let mail = this.get('email');
			let password = this.get('password');
			let password_confirmation = this.get('passwordConfirmation');
			let reset_password_token = this.get('router').currentState.routerJsState.fullQueryParams.reset_password_token;
			return this.get('ajax').request(`/users/password?reset_password_token=${reset_password_token}&email=${mail}&password=${password}&password_confirmation=${password_confirmation}`, {
				method: 'PUT'
			}).then(() => this.get('router').transitionTo('sign-in'));
		}
	}
});