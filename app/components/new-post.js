import Ember from 'ember';

export default Ember.Component.extend({
  isFormShowing: false,
  actions: {
    showForm() {
      this.set('isFormShowing', true);
    },
    savePost() {
      var params = {
        name: this.get('name'),
        title: this.get('title'),
        topic: this.get('topic'),
        desc: this.get('desc')
      };
      this.set('isFormShowing', false);
      this.set('name', '');
      this.set('title', '');
      this.set('topic', '');
      this.set('desc', '');
      this.sendAction('savePost', params);
    }
  }
});
