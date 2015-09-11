
angular
    .module('hire.job')
    .controller('JobController', ['$scope', 'JobService',
        function JobController($scope, JobService){
            $scope.msg = JobService.say('Job Module');
        }
    ]);