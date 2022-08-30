function sum (a,b){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve( a + b);
        }, 500);
    });
}

const a = sum(2,2).then((result) => {
    console.log(result);
    // return result;
});
console.log(a)
// .then((result2)=>{
//     console.log(result2);
// });