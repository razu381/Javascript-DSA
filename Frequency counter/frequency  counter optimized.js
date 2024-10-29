//Time complexity O(1)
let arr1 = [1,2,3,2]
let arr2 = [4,4,1]


function checkSimillar(arr1,arr2){
    if(arr1.length != arr2.length){
        return  false
    }
    
    let obj1 ={}
    let obj2 = {}

    for(let val of arr1){
        if(obj1.hasOwnProperty(val)){
            obj1[val] = obj1[val]+1
        }else{
            obj1[val] = 1
        }
    }
    for(let val of arr2){
        if(obj2.hasOwnProperty(val)){
            obj2[val] = obj2[val]+1
        }else{
            obj2[val] = 1
        }
    }

    console.log(obj1)
    console.log(obj2)

    for(let key in obj1){
        if(!obj2.hasOwnProperty(key**2)){
            return false
        }
        if(obj1[key**2] !== obj2[key]){
            return false
        }
    }
    return true
}

console.log(checkSimillar(arr1,arr2))