//Authenticators implement the concrete steps necessary to authenticate the session.
//Devise authenticator configuration file for ember-devise connection,
// by default is workng with out any import , see info if you need to add some
//http://ember-simple-auth.com/api/classes/DeviseAuthenticator.html

import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({
	identificationAttributeName: 'email',
	// resourceName: 'user',
	// rejectWithResponse: true,
	serverTokenEndpoint: 'http://localhost:3000/users/sign_in'
});