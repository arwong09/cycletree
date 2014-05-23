Cycletree.CategoriesShow = Backbone.View.extend({
  template: JST['categories/show'],
  
  render: function() {
    var columns = this.collection.parseColumns(4);
    var items1 = columns[0];
    var items2 = columns[1];
    var items3 = columns[2];
    var items4 = columns[3];
    
    var renderedContent = this.template({items1: items1, items2: items2, items3: items3, items4 : items4});
    this.$el.html(renderedContent);
    return this;
  },
  
  filteredRender: function(filteredCollection) {
    var columns = filteredCollection.parseColumns(4);
    var items1 = columns[0];
    var items2 = columns[1];
    var items3 = columns[2];
    var items4 = columns[3];
    
    var renderedContent = this.template({items1: items1, items2: items2, items3: items3, items4 : items4});
    this.$el.html(renderedContent);
    return this;
  },
  
  events: {
    "click button#options-new": "filter",
    "click #options-all": "render",
    "click #options-used": "filter"
  },
  
  filter: function(event) {
    var condition = $(event.target).data('condition');
    var filteredArr = this.collection.where({condition: condition});
    var filteredCollection = new Cycletree.Items(filteredArr, {});
    this.filteredRender(filteredCollection);
    
    this.$('.btn-options').removeClass('active');
    // this.$('button#options-new').addClass('active');
    var id = $(event.target).attr('id')
    this.$('#' + id).addClass('active');
  
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