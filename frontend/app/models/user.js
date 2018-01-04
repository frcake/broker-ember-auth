import DS from 'ember-data';

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
