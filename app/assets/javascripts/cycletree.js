window.Cycletree = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Cycletree.Categories = new Cycletree.Categories();
    Cycletree.Router = new Cycletree.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Cycletree.initialize();
});
