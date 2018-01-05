import Ember from 'ember';

export default Ember.Controller.extend({
 
  actions: {
    transitionTo() {
      this.transitionToRoute('login');
    }
  }
});
