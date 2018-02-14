angular.module('shoppingcart.product')
.controller('AddProductCtrl',['productService',
    function(productService){
        this.newProduct = {};
        this.onFormSubmit = function(e){
            e.preventDefault();
            productService.addProduct(this.newProduct)
            .then(function(){
                alert('added successfully');
            });
        };
    }
])
.component('addProduct',{
    templateUrl : 'src/product/components/add-product/add-product.component.html',
    controller : 'AddProductCtrl'
})