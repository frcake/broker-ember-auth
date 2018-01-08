import DS from 'ember-data';
//import EmberObject from '@ember/object';
// import { validator, buildValidations } from 'ember-cp-validations';

// const Validations = buildValidations({
//   password: [
//     validator('presence', true),
//     validator('length', {
//       min: 4,
//       max: 8
//     }),
//     validator('length', {
//       isWarning: true,
//       min: 6,
//       message: 'Password is weak'
//     })
//   ],
//   email: [
//     validator('presence', true),
//     validator('format', { type: 'email' })
//   ]
// });

export default DS.Model.extend({
	email: DS.attr('string'),
	password: DS.attr('string'),
	passwordConfirmation: DS.attr('string'),
	// viewer: DS.attr('boolean'),
	// admin: DS.attr('boolean'),
	// superAdmin: DS.attr('boolean'),
	lastSignInIp: DS.attr('string'),
	lastSignInAt: DS.attr('date'),
	//userName: DS.attr("string"),

});
