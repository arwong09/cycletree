Cycletree.Router = Backbone.Router.extend({
  routes: {
    'categories/:id': 'categoriesShow'
  },
  
  categoriesShow: function (id) {
    alert('hey');
    var showView = new Cycletree.CategoriesShow({
      model: Cycletree.Categories.findWhere({id: id})
    });
    
    Cycletree.Categories.fetch({
      success: this._swapView(showView)
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