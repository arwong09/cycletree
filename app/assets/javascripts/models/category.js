Cycletree.Category = Backbone.Model.extend({
  items: function() {
    this._items = this._items || new Cycletree.Items([], {category: this});
    return this._items;
  },
  
  // parse: function(resp) {
 //    if (resp.items) {
 //      this.items().set(resp.items, { parse: true });
 //      delete resp.items;
 //    }
 //    
 //    return resp;
 //  }
});