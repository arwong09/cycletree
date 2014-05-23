Cycletree.Items = Backbone.Collection.extend({
  url: function() {
    return '/categories/' + this.category_id;
  },
  
  model: Cycletree.Item,
  
  initialize: function(models, options) {
    this.category_id = options.category_id
  },
  
  getOrFetch: function(id) {
    var items = this;
    var model;
    
    if(model = this.get(id)) {
      model.fetch();
    } else {
      model = new Cycletree.Item({id: id});
      model.fetch({
        success: function() { items.add(model); }
      })
    };
    
    return model;
  }
});