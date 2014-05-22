window.Cycletree = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Cycletree.Categories = new Cycletree.Categories();
    new Cycletree.Router();
    Backbone.history.start();
    console.log("backbone is running!");
  }
};

$(document).ready(function(){
  Cycletree.initialize();
});
