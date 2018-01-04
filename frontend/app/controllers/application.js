import Ember from 'ember';

export default Ember.Controller.extend({
  vessels: Ember.computed('', function() {

    return this.get('store').findAll('vessel');
  }),
  actions: {
    transitionTo() {
      this.transitionToRoute('login');
    }
  }
});
