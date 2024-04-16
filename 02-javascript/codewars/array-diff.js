let a = [1,2,3];
let b = [1,3];

function arrayDiff(a,b){

    let diff = [];

    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
            diff.push(a[i])
        }
    }

    return diff
}