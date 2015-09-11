
angular
	.module('hire.applicant')
	.factory('ApplicantService', ['$q', 
		function ApplicantService($q){
			return {
				say: function(msg){
					return msg || 'Hi';
				}
			};
		}
	]);