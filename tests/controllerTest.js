/**
 * Created by ethan on 2014/7/16.
 */

describe("Controller Test", function () {

    var mockScope = {};
    var controller;
    var backend;


    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function($httpBackend) {
        backend = $httpBackend;
        backend.expect("GET", "productData.json").respond(
            [
                { "name": "Apples", "category": "Fruit", "price": 1.20 },
                    { "name": "Bananas", "category": "Fruit", "price": 2.42 },
                    { "name": "Pears", "category": "Fruit", "price": 2.02 }
            ]
        );
    }));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, $http) {
        mockScope = $rootScope.$new();
        controller = $controller("defaultCtrl", {
            $scope: mockScope,
            $http: $http
        });
        backend.flush();
    }));

    it("Creates variable", function () {
        expect(mockScope.counter).toEqual(0);
    });

    it("Increments counter", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });

    it("Make an Ajax request", function() {
        backend.verifyNoOutstandingExpectation();
    });

    it("Processes the data", function() {
        expect(mockScope.products).toBeDefined();
        expect(mockScope.products.length).toEqual(3);
    });

    it("Preserves the data order", function () {
        expect(mockScope.products[0].name).toEqual("Apples");
        expect(mockScope.products[1].name).toEqual("Bananas");
        expect(mockScope.products[2].name).toEqual("Pears");
    });
});