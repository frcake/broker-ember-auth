// app/initializers/component-router-injector.js
export function initialize(application) {
  // Injects all Ember components with a router object:
  application.inject('controller', 'router', 'router:main');
}

export default {
  name: 'controller-router-injector',
  initialize: initialize
};
