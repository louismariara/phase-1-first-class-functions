function receivesAFunction(callback){
    console.log (callback());
}
function returnsANamedFunction(){
    return function fn () {

    }
}
function returnsAnAnonymousFunction(){
    return function (){

    }
}