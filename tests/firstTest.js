/**
 * Created by ethan on 2014/7/14.
 */
describe("First Test",function() {
   var counter;

    beforeEach(function() {
       counter = 0;
    });

    it("increments value", function (){
        counter++;
        expect(counter).toEqual(1);
    });

    it("decrements value",function() {
        counter--;
        expect(counter).toEqual(-1);
    });


});