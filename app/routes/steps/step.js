import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('step', params.step_id);
  }
});
