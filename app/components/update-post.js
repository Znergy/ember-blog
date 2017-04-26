import Ember from 'ember';

export default Ember.Component.extend({
  isShowingForm: false,
  actions: {
    updatePost() {
      var params = {
        name: this.get('name'),
        title: this.get('title'),
        topic: this.get('topic'),
        desc: this.get('desc')
      };
      this.set('isShowingForm', false);
      this.sendAction('updatePost', post, params);
    },
    showForm() {
      this.set('isShowingForm', true);
    }
  }
});
