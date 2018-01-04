// this mixin is called for permission check in route.js files. Is checking the current role of current user, by injecting the session
import Ember from 'ember';

export default Ember.Mixin.create({
	session: Ember.inject.service('session'),

	isViewer() {
		var viewer = this.get('session.data.authenticated.viewer');

		if (viewer) {
			return true;
		} else {
			return false;
		}
	},

	isSuperAdmin() {
		var super_admin = this.get('session.data.authenticated.super_admin');
		if (super_admin) {
			return true;
		} else {
			return false;
		}
	},

	isAdmin() {
		var admin = this.get('session.data.authenticated.admin');
		if (admin) {
			return true;
		} else {
			return false;
		}
	}
});
