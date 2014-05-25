Cycletree.Items = Backbone.Collection.extend({
  url: function() {
    return '/categories/' + this.category_id;
  },
  
  model: Cycletree.Item,
  
  initialize: function(models, options) {
    this.category_id = options.category_id
  },
  
  getOrFetch: function(id, category_id) {
    var items = this;
    var model;
    
    if(model = this.get(id)) {
      model.fetch();
    } else {

      model = new Cycletree.Item([], {id: id, category_id: category_id});
      model.fetch({
        success: function() { items.add(model); }
      })
    };
    
    return model;
  },
  
  parseColumns: function(n) {
    var colSize = Math.round(this.length / n);
    var prevColEnd = 0;
    var columns = [];
    if (colSize < 1) {
      colSize = 1;
    }
    
    _(n).times(function() {
      
      columns.push(
        new Cycletree.Items(this.slice(prevColEnd, prevColEnd + colSize), 
        {category_id: this.category_id})
      );
      
      prevColEnd += colSize;
    }.bind(this));
    
    return columns;
  }
});