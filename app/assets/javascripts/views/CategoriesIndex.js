Cycletree.CategoriesIndex = Backbone.View.extend({
  template: JST['categories/index'],
  render: function() {
    var renderedContent = this.template({});
    this.$el.html(renderedContent);
    return this;
  },
});