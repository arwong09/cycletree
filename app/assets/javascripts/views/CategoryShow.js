Cycletree.CategoriesShow = Backbone.View.extend({
  template: JST['categories/show'],
  
  render: function() {
    var colSize = Math.floor(this.collection.length / 4);
    var items1 = new Cycletree.Items(this.collection.slice(0, colSize), {category_id: this.collection.category_id});
    var items2 = new Cycletree.Items(this.collection.slice(colSize, colSize * 2), {category_id: this.collection.category_id});
    var items3 = new Cycletree.Items(this.collection.slice(colSize * 2, colSize * 3), {category_id: this.collection.category_id});
    var items4 = new Cycletree.Items(this.collection.slice(colSize * 3), {category_id: this.collection.category_id});

    var renderedContent = this.template({items1: items1, items2: items2, items3: items3, items4 : items4});
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