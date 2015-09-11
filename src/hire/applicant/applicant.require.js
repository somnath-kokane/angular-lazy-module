
define(function(){
	return {
		name: 'hire.applicant',
		files: {
			dev: [
				'hire/applicant/applicant.config',
				'hire/applicant/applicant.controller',
				'hire/applicant/applicant.service'
			],
			prod: ['hire/applicant/applicant.bundle']
		},
		states: [
			['hire.applicant', {
				url: '/applicant',
				template: '<p>{{hello}}</p>',
				controller: 'ApplicantController'
			}]
		]
	};
});
