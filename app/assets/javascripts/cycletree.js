window.Cycletree = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Cycletree.Categories = new Cycletree.Categories();
    new Cycletree.Router();
    Backbone.history.start({root: 'categories/:id', pushstate: true});
  }
};

