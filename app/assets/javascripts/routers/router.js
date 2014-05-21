Cycletree.Router = Backbone.Router.extend({
  routes: {
    '': 'categoriesIndex'
  },
  
  categoriesIndex: function () {
    var indexView = new Cycletree.CategoriesIndex({
      collection: Cycletree.Categories
    });
    this._swapView(indexView);
  },
  
  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    $('body').html(newView.render().$el);
    this.currentView = newView;
  }
});