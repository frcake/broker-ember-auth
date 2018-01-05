import Ember from 'ember';
import {task} from 'ember-concurrency';

export default Ember.Mixin.create({
 
  saveNewUser: task(function * (newUser) {
    //yield the promise response or catch any errors
    try {
      yield newUser.save();
    } catch (error) {
      this.set('errorMessage', error)
    }
    //everything's fine so trigger the next action and await it
    yield this.get('authenticateNewUser').perform(newUser);
  }),

  authenticateNewUser: task(function * (newUser) {
    try {
      yield this.get('session').authenticate('authenticator:devise', newUser.get('email'), newUser.get('password'))
    } catch (reason) {
      this.set('errorMessage', reason.error || reason);
    }
  })
});
