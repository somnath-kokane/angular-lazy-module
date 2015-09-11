
define([
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
});