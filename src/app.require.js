
(function(factory){

    if(typeof module !== "undefined" && 
        typeof exports !== "undefined" && 
        module.exports === exports){
        module.exports = factory(require('./hire/hire.require'));
    } else {
        define([
            'hire/hire.require',
            'app.config'
        ], factory);
    }

}.call(this, function(hire){

    return {
        name: 'app',
        modules: [hire],
        states: [
            ['home', {
                url: '/',
                template: '<p>Home</p>'
            }]
        ]
    }

}));

/*define([
    'hire/hire.require',
    'app.config'
], function(hire){
    return {
        name: 'app',
        modules: [hire],
        states: [
            ['home', {
                url: '/',
                template: '<p>Home</p>'
            }]
        ]
    }
});*/