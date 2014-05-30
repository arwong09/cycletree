Cycletree.Category = Backbone.Model.extend({
  urlRoot: '/categories',
  items: function() {
    this._items = this._items || new Cycletree.Items([], {category: this});
    return this._items;
  },
  
});