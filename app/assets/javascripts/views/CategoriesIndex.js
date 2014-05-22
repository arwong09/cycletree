Cycletree.CategoriesIndex = Backbone.View.extend({
  template: JST['categories/index'],
  render: function() {
    var renderedContent = this.template({categories: this.collection});
    this.$el.html(renderedContent);
    return this;
  },
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render)
  }
}); 