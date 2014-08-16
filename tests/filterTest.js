/**
 * Created by ethan on 2014/7/17.
 */
describe("Fitler Tests",function() {
   var filterInstance;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function($filter) {
        filterInstance = $filter("labelCase");
    }));

    it("Change case",function() {
       var result = filterInstance("test phrase");
        expect(result).toEqual("Test phrase");
    });

    it("Reverse case",function() {
        var result = filterInstance("Change case",true);
        expect(result).toEqual("cHANGE CASE");
    })
});