import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import CheckAdminMixin from '../mixins/check-admin';

export default Ember.Route.extend(ApplicationRouteMixin, CheckAdminMixin, {
	session: Ember.inject.service('session'),
	sessionAccount: Ember.inject.service('session-account'),

	beforeModel() {
		//return this._loadCurrentUser();
	},

	sessionAuthenticated() {
		this._super(...arguments);
		this._loadCurrentUser();
	},

	_loadCurrentUser() {
		return this.get('sessionAccount').loadCurrentUser().catch(() => this.get('session').invalidate().then(() => this.transitionTo('login')));
	},
});
