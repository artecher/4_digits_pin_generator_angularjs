/**
 * Created by ethan on 2014/8/14.
 */

angular.module('exampleApp',[])
.controller('defaultCtrl', function ($scope) {
        $scope.displayMode = 'list';
        $scope.currentProduct=null;

        $scope.listProduct = function() {
            $scope.products = [
                {
                    id:1,name:'Dummy1',category:'Test',price:1.25
                },
                {
                    id:2,name:'Dummy2',category:'Test',price:2.45
                },
                {
                    id:3,name:'Dummy3',category:'Test',price:4.25
                }
            ];
        };

        $scope.deleteProduct = function(product) {
            $scope.products.splice($scope.products.indexOf(product),1);
        };

        $scope.createProduct = function(product) {
            $scope.products.push(product);
            $scope.displayMode = 'list';
        };

        $scope.updateProduct = function(product) {
            for(var idx in $scope.products) {
                if($scope.products[idx].id === product.id) {
                    $scope.products[idx] = product;
                    break;
                }
            }
            $scope.displayMode = 'list';
        };

        $scope.editOrCreateProduct = function(product) {
            $scope.currentProduct = product ?
        };


    });