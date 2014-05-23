Cycletree.CategoriesShow = Backbone.View.extend({
  template: JST['categories/show'],
  render: function() {
    var renderedContent = this.template({items: this.collection});
    this.$el.html(renderedContent);
    return this;
  },
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render)
  }
}); 