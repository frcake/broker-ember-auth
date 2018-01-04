import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { pluralize } from 'ember-inflector';
const {
	String: {
		underscore
	}
} = Ember;
export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
	namespace: 'api/v1',
	authorizer: 'authorizer:devise',
	pathForType(type) {
		return pluralize(underscore(type));
	}
});
