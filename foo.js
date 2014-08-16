/**
 * Created by ethan on 2014/7/21.
 */
var foo=1;
function bar() {
    foo=1;
    return foo;
    var foo=11;
    function foo(){}
    var foo=11;

}
alert(foo)
alert(bar());