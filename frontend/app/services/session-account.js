//This servrise creates injects  session an creates current_user
import RSVP from 'rsvp';

import Service, {
	inject as service
} from '@ember/service';

import {
	isEmpty
} from '@ember/utils';

import Ember from 'ember';
export default Service.extend({
	session: Ember.inject.service('session'),
	store: service(),

	loadCurrentUser() {
		return new RSVP.Promise((resolve, reject) => {
			const userId = this.get('session.data.authenticated.id');
			if (!isEmpty(userId)) {
				this.get('store').find('user', userId).then((account) => {
					this.set('account', account);
					resolve();
				}, reject);
			} else {
				resolve();
			}
		});
	}
});
