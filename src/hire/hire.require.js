
(function(factory){

    if(typeof module !== "undefined" && 
        typeof exports !== "undefined" && 
        module.exports === exports){
        module.exports = factory(
            require('./applicant/applicant.require'),
            require('./job/job.require'));
    } else {
        define([
            'hire/applicant/applicant.require',
            'hire/job/job.require'
        ], factory);
    }

}.call(this, function(){

    var modules = [].slice.apply(arguments);

    return {
        name: 'hire',
        files: {
            dev: ['hire/hire.config'],
            prod: ['hire/hire.bundle']
        },
        modules: modules,
        states: [
            ['hire', {
                url: '/hire',
                template: '<p>Hire module</p><div ui-view></div>'
            }]
        ]
    };

}));

/*define([
    'hire/applicant/applicant.require',
    'hire/job/job.require'
], function(applicant, job){
    return {
        name: 'hire',
        files: {
            dev: ['hire/hire.config']
        },
        modules: [applicant, job],
        states: [
            ['hire', {
                url: '/hire',
                template: '<p>Hire module</p><div ui-view></div>'
            }]
        ]
    };
});*/