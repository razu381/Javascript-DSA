//The issue was forEach loop. return doesn't work for callback function


let arr1 = [1,2,1]
let arr2 = [4,1,9]


if(arr1.length != arr2.length){
    console.log(false)
    return
}else{
    for(let i = 0; i < arr1.length; i++){
        
        let isValid = arr2.indexOf(arr1[i] * arr1[i])  

        if(isValid != -1){
            arr2.splice(isValid,1)
        }else{
            console.log(false)
            return
            
        }
}   }

console.log(true)