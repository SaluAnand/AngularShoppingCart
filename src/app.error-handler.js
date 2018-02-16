angular.module('shoppingcart')
.decorator('$exceptionHandler',['$delegate',function($delegate){
    return function(exception,cause){
        console.warn("Custom warning");
        $delegate(exception,cause)
    }
}]);