window.Cycletree = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Cycletree.Categories = new Cycletree.Categories();
    
    Cycletree.Categories.fetch({
      success: function() {
        new Cycletree.Router();
        Backbone.history.start();
      },
      error: function() {
        console.log('Failed to fetch.');
      }
    });  
  }
};

$(document).ready(function(){
  // Cycletree.initialize();
});
