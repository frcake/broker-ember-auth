import Ember from 'ember';
import {task} from 'ember-concurrency';

export default Ember.Mixin.create({
  ajax: Ember.inject.service(),
  resetPassword: task(function * () {
    let mail = this.get('email')
    let password = this.get('password')
    let passwordConfirmation = this.get('passwordConfirmation')
    let reset_password_token = this.get('router').currentState.routerJsState.fullQueryParams.reset_password_token;

    let passwordReset;
    try {
      passwordReset = yield this.get('ajax').request(`/users/password?reset_password_token=${reset_password_token}&email=${mail}&password=${password}&password_confirmation=${passwordConfirmation}`, {method: 'PUT'})
      this.transitionToRoute('login');
    } catch (error) {
      this.set('errorMessage',error.payload.errors.password_confirmation[0]);
    }
  })
});
