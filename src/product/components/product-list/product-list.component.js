angular.module('shoppingcart.product')
.controller('ProductListCtrl',[
//.controller('ProdutListCtrl',['productService',
/*function(productService){
    var self = this;
    self.products = [];
    this.$onInit = function(){
        productService.getProducts()
        .then(function(result){
            self.products  = result.data;
        });
    }
}*/
function(){
}])
.component('productList', {
    templateUrl: 'src/product/components/product-list/product-list.component.html',
    bindings: {
        products: '<'
    },
    controller: 'ProductListCtrl'
});