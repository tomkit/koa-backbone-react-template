requirejs.config({
    baseUrl: 'public/js/lib',
    paths: {
        views: '../views',
        collections: '../collections',
        models: '../models',
        _: 'underscore',
        jquery: 'jquery-2.0.3',
        Backbone: 'backbone',
        React: 'react',
        JSXTransformer: 'JSXTransformer',
        jsx: 'jsx'
    },
    shim: {
        Backbone: {
            deps: ['_', 'jquery'],
            exports: 'Backbone'
        },
        shim: {
            JSXTransformer: {
                exports: 'JSXTransformer'
            }
        }
    }
});

requirejs(['../router'], function(Router) {
    new Router();
});

