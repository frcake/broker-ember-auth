import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	session: Ember.inject.service('session'),

	model() {
		let currentUser = this.get('session.data.authenticated');

		return Ember.RSVP.hash({
			user: this.store.createRecord('user'),
			currentUser: this.store.findRecord('user', currentUser.id)
		});
	},

	actions: {
		updateProfile(updateUser) {
			updateUser.save().catch((error) => {
				if (Ember.isEmpty(error.errors)) {
					//skyFlash("User successfully updated", { type: 'success', duration: 4000 });
					this.transitionTo("profile");
				} else {
					error.errors.forEach((error) => {
						//skyFlash(error.detail, { type: 'error', duration: 4000 });
					});
				}
			})
		}
	}
});
