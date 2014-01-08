define(['_', 'Backbone', 'views/startview'], function(_, Backbone, StartView) {
    var Router = Backbone.Router.extend({
        routes : {
            '/' : 'loadView'
        },
        initialize : function() {
            console.log('router');
//            _.bindAll(this, 'loadView');
        },
        loadView : function() {
            var startView = new StartView();
        }
    });
    
    return Router;
});