//The issue was forEach loop. return doesn't work for callback function


let arr1 = [1,2,3]
let arr2 = [4,1,9]


if(arr1.length != arr2.length){
    console.log(false)
    return
}else{
    for(let i = 0; i < arr1.length; i++){
        let isSquare = false;

        for(let j = 0; j < arr2.length; j++){
            console.log('['+arr1 + ']' + " " + '[' + arr2 + ']')
            console.log(arr1[i] + " " + arr2[j]) 

            if(arr1[i]*arr1[i] === arr2[j]){
                isSquare = true
                arr2.splice(j,1)
                break
            }
            
            
        }
        if(isSquare === false) {
            console.log("false")
            return;
        }
}   }

console.log(true)