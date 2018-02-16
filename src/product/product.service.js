angular.module('shoppingcart.product')
.service('productService',['$http','AppConstant',
    function($http,AppConstant){
        this.getProducts = function(){
        return $http.get(AppConstant.urls.product);
        };
        this.addProduct = function(productDetails){
            return $http.post(AppConstant.urls.product,productDetails);
        };
        this.searchProduct = function (title){
            return $http.get(AppConstant.urls.product + '?title=' + title)
            .then(function(res){
                return res.data
            });
        };
        this.getProductDetails = function(productId){
            return $http.get(AppConstant.urls.product+'/'+productId)
            .then(function(res){
                return res.data;
            },function(){
                alert('some error happened')
            });
        };
    }]);