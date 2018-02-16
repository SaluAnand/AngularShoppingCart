angular.module('shoppingcart.shared')
    .directive('prodTitle', ['$q','productService',
    function($q,productService){
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, el, attrs, ngModelCtrl){
                console.log(ngModelCtrl);
                ngModelCtrl.$validators.prodTitle = function(val){ 
                    if(!val){
                        return true;    
                    }
                    if(val.startsWith('a') || 
                    val.startsWith('b') || 
                    val.startsWith('c')
                    
                ){
                        return false;
                    }
                    return true;
                };

                ngModelCtrl.$asyncValidators.prodAvailability = function(val){
                    var defer = $q.defer();
                    productService.searchProduct(val)
                    .then(function(res){
                       // console.log(res.data);
                        if(res.length > 0)
                        {
                            defer.reject();
                        }
                        defer.resolve();
                    });
                    return defer.promise;
                };
            }
        }
    }]);