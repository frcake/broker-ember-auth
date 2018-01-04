import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model(params) {

		return this.store.findRecord('user', params.user_id)
	},

	actions: {
		saveUser(user) {
			user.save().then(() => this.transitionTo('index'))
		},

		willTransition(transition) {
			let model = this.controller.get('model');

			if (model.get('hasDirtyAttributes')) {
				let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

				if (confirmation) {
					model.rollbackAttributes();
				} else {
					transition.abort();
				}
			}
		}
	}
});
