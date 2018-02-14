angular.module('shoppingcart',[
    'ui.router',
    'shoppingcart.product',
    'shoppingcart.cart',
    'shoppingcart.shared'
    
]);

angular.module('shoppingcart')
.config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider){
    $stateProvider.state({
        name: 'home',
        url: '/',
        component: 'productList',
        resolve: {
            products: ['productService', function(productService){
                return productService
                        .getProducts()
                        .then(function(res){
                            return res.data;
                        });
            }]
        }
    });

    $stateProvider.state({
        name : 'addProduct',
        url : '/add-product',
        component : 'addProduct'
    });
    $stateProvider.state({
        name : 'cart',
        url : '/cart',
        component : 'cart'
    });
    $urlRouterProvider.otherwise('/');
}
]);