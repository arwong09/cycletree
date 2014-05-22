Cycletree.CategoriesShow = Backbone.View.extend({
  template: JST['categories/show'],
  render: function() {
    var renderedContent = this.template({});
    this.$el.html(renderedContent);
    return this;
  },
}); 