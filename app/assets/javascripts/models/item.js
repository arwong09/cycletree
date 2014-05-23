Cycletree.Item = Backbone.Model.extend({
  url: function() {
    return '/categories/' + this.category_id + '/items/' + this.id;
  },
  
  initialize: function(models, options) {
    this.category_id = options.category_id
    this.id = options.id
  }
});