Cycletree.Router = Backbone.Router.extend({
  routes: {
    'categories/:id': 'categoriesShow'
  },
  
  categoriesShow: function (id) {
    var theseItems = new Cycletree.Items([], {category_id: id});
    var showView = new Cycletree.CategoriesShow({collection: theseItems});
    
    theseItems.fetch({
      success: function() {
        this._swapView(showView)
      }.bind(this)
    })
  },
  
  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    
    $('body').html(newView.render().$el);
    this.currentView = newView;
  }
});