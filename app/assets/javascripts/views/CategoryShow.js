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
    this.$("#search-filter").val("hello");
    return this;
  },
  
  searchRender: function(filteredCollection, prevQuery) {
    var columns = filteredCollection.parseColumns(4);
    var items1 = columns[0];
    var items2 = columns[1];
    var items3 = columns[2];
    var items4 = columns[3];
    
    var renderedContent = this.template({items1: items1, items2: items2, items3: items3, items4 : items4});
    this.$el.html(renderedContent);
    this.$("#search-filter").focus().val(prevQuery);
    return this;
  },
  
  events: {
    "click #options-new": "filter",
    "click #options-all": "render",
    "click #options-used": "filter",
    "click .options-price": "priceFilter",
    "click #options-price-any": "render",
    "keyup #search-filter": "searchFilter"
  },
  
  filter: function(event) {
    var condition = $(event.target).data('condition');
    var filteredArr = this.collection.where({condition: condition});
    var filteredCollection = new Cycletree.Items(filteredArr, {category_id: this.collection.category_id});
    this.filteredRender(filteredCollection);
    
    this.$('.btn-options').removeClass('active');
    var id = $(event.target).attr('id')
    this.$('#' + id).addClass('active');
  
    return this;
  },
    
  priceFilter: function(event) {
    var priceLookup = $(event.target).data('price');
    var minPrice = { 'price-b': 0, 'price-c': 500, 'price-d': 1000, 'price-e': 2500 }
    var maxPrice = { 'price-b': 500, 'price-c': 1000, 'price-d': 2500, 'price-e': 1000000 }

    var filteredArr = this.collection.filter(function(item) {
      return item.get('price') > minPrice[priceLookup] && item.get('price') < maxPrice[priceLookup];
    })
    
    var filteredCollection = new Cycletree.Items(filteredArr, {category_id: this.collection.category_id});
    this.filteredRender(filteredCollection);
  },
  
  searchFilter: function(event) {    
    var searchString = $(event.target).val();

    var filteredArr = this.collection.filter(function(item) {
      return item.get('title').toLowerCase().indexOf(searchString) != -1;
    })
    
    var filteredCollection = new Cycletree.Items(filteredArr, {category_id: this.collection.category_id});
    this.searchRender(filteredCollection, searchString);
  },
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render)
  }
}); 