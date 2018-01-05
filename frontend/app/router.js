import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route('index');
	this.route('login', { path: '/' });
	this.route('users/confirmation');
	this.route('users', function() {
		this.route('edit');
		this.route('sign-up');
		this.route('show', { path: ':user_id' })

		this.route('password', function() {
			this.route('edit');
		});
	});
	this.route('profile');
	this.route('recover-password');
});

export default Router;