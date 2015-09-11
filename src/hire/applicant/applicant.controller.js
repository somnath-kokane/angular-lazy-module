
angular
	.module('hire.applicant')
	.controller('ApplicantController', ['$scope', 'ApplicantService', 
		function ApplicantController($scope, ApplicantService){
			$scope.hello = ApplicantService.say('Applicant Module');
		}
	]);