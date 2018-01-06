import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Mixin.create({
 tagName: '',
	session: Ember.inject.service('session'),
	ajax: Ember.inject.service(),

 recoverPassword: task(function *  () {
   let mail = this.get('email');
   let recoverPasswordResponse;
   try {
    recoverPasswordResponse = yield this.get('ajax').request(`/users/password?email=${mail}`, {
 				method: 'POST',
 			});
   } catch (error) {
    let errorText = yield this.get('stripString').perform(error.payload.errors.toSource().toString())
    this.set('errorMessage', errorText)
   }
 }),

  stripString: task(function*(str) {
    let strippedStr = str.replace(/[.*+?^${}()|[\]\\"]/g, '').replace(/[:_]/g," ").replace(/,/gi,"\n");
    return strippedStr
  }),
});
