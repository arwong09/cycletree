Cycletree.Router = Backbone.Router.extend({
  routes: {
    // '': 'categoriesIndex',
    'categories/:id/items/:id': 'cartModal',
    'categories/:id': 'categoriesShow'

    // 'categories/:category_id/items/:id' : 'itemsShow'
  },
  
  categoriesIndex: function() {
    // var indexView = new Cycletree.CategoriesIndex({collection: Cycletree.Categories})
    // Cycletree.Categories.fetch({
    //   success: function() {
    //     this._swapView(indexView)
    //   }.bind(this)
    // })
  },
  
  cartModal: function() {
    console.log('test');
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
    
    $('#below-nav').html(newView.render().$el);
    this.currentView = newView;
  }
});