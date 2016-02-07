# ldi.js
light Dependency Injector for JS

simple example:

```javascript
var z = 5;
var dependencies = {
    b: z,
    a: function(){}
};

var Foo = function(){
    return{
        bar: function (a,b){
            console.log(a,b);
        }
    }
};

var foo = Foo();
foo.bar.run(foo , dependencies);
//like foo.apply(foo,dependencies) but the function parameters are dynamically placed
```


