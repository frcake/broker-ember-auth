import Ember from 'ember';
import {task} from 'ember-concurrency'

export default Ember.Mixin.create({
  authenticateUser: task(function * () {
    let {identification, password} = this.getProperties('identification', 'password');
    let authenticator;
    try {
      authenticator = yield this.get('session').authenticate('authenticator:devise', identification, password)
    } catch (reason) {
      this.set('errorMessage', reason.error);
    }
    return authenticator;
  }),
});
