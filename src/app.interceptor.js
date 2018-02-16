angular.module('shoppingcart')
.factory('ErrorInterceptor',['$q',
    function($q){
    return {
        responseError: function(err){
            console.log('in Error');
                return $q.reject(err);
        }
    };
}])
.config(['$httpProvider',function($httpProvider){
    $httpProvider.interceptors.push('ErrorInterceptor')
}]);