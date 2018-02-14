angular.module('shoppingcart.product')
.service('productService',['$http','AppConstant',
    function($http,AppConstant){
        this.getProducts = function(){
        return $http.get(AppConstant.urls.product);
        };
        this.addProducts = function(){

        };
        this.getProductDetails = function(){

        };
    }]);