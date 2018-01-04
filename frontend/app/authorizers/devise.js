//Authorizers use the session data acquired by the authenticator to construct
// authorization data that can be injected into outgoing network requests
//This auhtorizer is for devise only see docs, http://ember-simple-auth.com/api/classes/DeviseAuthorizer.html
import DeviseAuthorizer from 'ember-simple-auth/authorizers/devise';

export default DeviseAuthorizer.extend();
