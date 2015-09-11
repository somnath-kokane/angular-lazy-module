define([
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
});