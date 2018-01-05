import Ember from 'ember';
import { task } from 'ember-concurrency'
import formLogin from '../mixins/forms/form-login'

export default Ember.Controller.extend(formLogin,{
  tagName: '',
  session: Ember.inject.service('session'),

  actions: {

    triggerLoginChain() {
      this.get('authenticateUser').perform();
    }
  }
});
