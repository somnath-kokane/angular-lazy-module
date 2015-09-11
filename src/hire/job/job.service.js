
angular
    .module('hire.job')
    .factory('JobService', ['$q',
        function JobService($q){
            return {
                say: function(msg){
                    return msg;
                }
            };
        }
    ]);