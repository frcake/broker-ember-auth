import Ember from 'ember';
import formRecoverPassword from '../mixins/forms/form-reset-password'

export default Ember.Controller.extend(formRecoverPassword,{

 actions: {
  triggerRecoverPassword(){
   this.get('recoverPassword').perform();
  }
 }
});
