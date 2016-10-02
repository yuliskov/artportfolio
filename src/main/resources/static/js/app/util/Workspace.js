define(['backbone', 'app/App'], function(Backbone, app) {
    return Backbone.Router.extend({
        initialize: function() {
            console.log('route init');
        },
        routes: {
            "": "showHome",
            "show/item:id": "showItem"
        },
        showHome: function() {
            app = require('app/App');
            var model = app.rootMenu.items[1].model;
            this.showItem(model.get('id'));
        },
        showItem: function(id) {
            $('#' + id).trigger('click');
            console.log('route:show', id);
        },
    });
});
