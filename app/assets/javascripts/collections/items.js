Cycletree.Items = Backbone.Collection.extend({
  url: function() {
    return '/categories/' + this.category_id;
  },
  
  model: Cycletree.Item,
  
  initialize: function(models, options) {
    this.category_id = options.category_id
  },
});