console.log('start test');

function testInputType(input){
    try {
        a.run(null,input);
    }catch (e){
        if(e == 'error in params type') return;
    }
    throw 'dependencies should be only object {}';
}

function a(b,c){
    if(b !== 1 || c !== 2){
        throw 'dependencies are not injected correctly';
    }
}

testInputType(1);
testInputType("e");
testInputType([]);
testInputType(function(){});
testInputType(null);
testInputType(undefined);

a.run(null , {b: 1 , c: 2});

console.log('test end 0 error');
