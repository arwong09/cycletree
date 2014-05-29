Cycletree.CategoriesShow = Backbone.View.extend({
  template: JST['categories/show'],
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    // this.filteredCollection = this.collection;
    this.priceFiltered = this.collection;
    this.searchFiltered = this.collection;
    this.condFiltered = this.collection;
    this.query = "";
    this.activeID = "options-all";
  },
  
  events: {
    "click #options-new": "condFilter",
    "click #options-all": "condFilter",
    "click #options-used": "condFilter",
    "click .options-price": "priceFilter",
    "click #options-price-any": "priceFilter",
    "keyup #search-filter": "searchFilter"
  },
  
  render: function() {
    var columns = this.collection.parseColumns(4);
    var items1 = columns[0];
    var items2 = columns[1];
    var items3 = columns[2];
    var items4 = columns[3];
    
    var renderedContent = this.template({items1: items1, items2: items2, items3: items3, items4 : items4});
    this.$el.html(renderedContent);
    var query = window.location.search.substring(1);
    var keyword = query.split('=')[1];
    if (keyword) {
      keyword = keyword.replace(/\+/g, " ");
      $('#search-filter').val(keyword);
      this.searchFilter(null, keyword);
    }
    if (this.collection) {
      if (this.collection.category_id === 0) {
        $('#nav-title').html('<h1>Shop All Bikes</h1>');
      } else {
        $('#nav-title').html('<h1>Shop ' + this.collection.first().get('category') + 's</h1>');
      }
    }
    return this;
  },
  
  filteredRender: function() {
    var filteredArr = this.condFiltered.filter(function(item){
      return this.priceFiltered.indexOf(item) != -1 && this.searchFiltered.indexOf(item) != -1;
    }.bind(this))
    var filteredCollection = new Cycletree.Items(filteredArr, {category_id: this.collection.category_id});
      var columns = filteredCollection.parseColumns(4);
      var items1 = columns[0];
      var items2 = columns[1];
      var items3 = columns[2];
      var items4 = columns[3];
    
      var renderedContent = this.template({items1: items1, items2: items2, items3: items3, items4 : items4});
      this.$el.html(renderedContent);
      this.$("#search-filter").focus().val(this.query);
      this.$('.btn-options').removeClass('active');
     
      $('#' + this.activeID).addClass('active');
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
  
  condFilter: function(event) {
    var condition = $(event.target).data('condition');
    if (condition) {
      var filteredArr = this.collection.where({condition: condition});
      var filteredCollection = new Cycletree.Items(filteredArr, {category_id: this.collection.category_id});
      this.condFiltered = filteredCollection;
    } else {
      this.condFiltered = this.collection;
    }

    this.activeID = $(event.target).attr('id');
    this.filteredRender();
  },
    
  priceFilter: function(event) {
    event.preventDefault();
    var priceLookup = $(event.target).data('price');
    
    if (priceLookup) {
      var minPrice = { 'price-b': 0, 'price-c': 500, 'price-d': 1000, 'price-e': 2500 }
      var maxPrice = { 'price-b': 500, 'price-c': 1000, 'price-d': 2500, 'price-e': 1000000 }

      var filteredArr = this.collection.filter(function(item) {
        return item.get('price') > minPrice[priceLookup] && item.get('price') < maxPrice[priceLookup];
      })
      
      var filteredCollection = new Cycletree.Items(filteredArr, {category_id: this.collection.category_id});
      this.priceFiltered = filteredCollection;
    } else {
      this.priceFiltered = this.collection;
    }

    this.filteredRender();
  },
  
  searchFilter: function(event, keyword) {
    if (keyword) {
      var inputString = keyword;
    } else { var inputString = $(event.target).val(); }
    
    this.query = inputString;
    
    searchString = inputString.replace(/bikes/g, "").replace(/bike/g, "").replace(/bicycle/g, "").replace(/bicycles/g, "");

    var filteredArr = this.collection.filter(function(item) {
      return item.get('title').toLowerCase().indexOf(searchString) != -1 || item.get('owner').toLowerCase().indexOf(searchString) != -1 || item.get('category').toLowerCase().indexOf(searchString) != -1;
    })
    
    var filteredCollection = new Cycletree.Items(filteredArr, {category_id: this.collection.category_id});
    this.searchFiltered = filteredCollection;
    this.filteredRender();
  },
}); 