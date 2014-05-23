Cycletree.CategoriesShow = Backbone.View.extend({
  template: JST['categories/show'],
  
  render: function() {
    var renderedContent = this.template({items: this.collection});
    this.$el.html(renderedContent);
    return this;
  },
  
  events: {
    "click #options-new": "filterNew",
    "click #options-all": "render",
    "click #options-used": "filterUsed"
  },
  
  filterNew: function() {
    var filteredArr = this.collection.where({condition: "New"});
    var filteredColl = new Cycletree.Items(filteredArr, {});
    var filteredContent = this.template({items: filteredColl});
    this.$el.html(filteredContent);
    this.$('label#options-all').removeClass('active');
    this.$('label#options-used').removeClass('active');
    this.$('label#options-new').addClass('active');
    return this;
  },
  
  filterUsed: function() {
    var filteredArr = this.collection.where({condition: "Used"});
    var filteredColl = new Cycletree.Items(filteredArr, {});
    var filteredContent = this.template({items: filteredColl});
    this.$el.html(filteredContent);
    this.$('label#options-all').removeClass('active');
    this.$('label#options-used').addClass('active');
    this.$('label#options-new').removeClass('active');
    return this;
  },
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render)
  }
}); 