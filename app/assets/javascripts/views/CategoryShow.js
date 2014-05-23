Cycletree.CategoriesShow = Backbone.View.extend({
  template: JST['categories/show'],
  
  render: function() {
    var renderedContent = this.template({items: this.collection});
    this.$el.html(renderedContent);
    return this;
  },
  
  events: {
    "click #options-new": "filterNew"
  },
  
  filterNew: function() {
    var filteredArr = this.collection.where({condition: "new"});
    var filteredColl = new Cycletree.Items(filteredArr, {});
    var filteredContent = this.template({items: filteredColl});
    this.$el.html(filteredContent);
    return this;
  },
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render)
  }
}); 