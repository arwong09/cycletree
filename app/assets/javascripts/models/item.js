Cycletree.Item = Backbone.Model.extend({
  url: '/categories/' + this.category_id,
  
  initialize: function(models, options) {
    this.category_id = options.category_id
  }
});