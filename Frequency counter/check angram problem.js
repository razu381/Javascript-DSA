
function checkAnagram(str1,str2){
    if(str1.length !== str2.length) return false
    else if(str1 === "" && str2 === "" ) return true
    else{
        let obj1 = {}
        let obj2 = {}

        for(let val of str1){
            if(obj1.hasOwnProperty(val)) obj1[val] += 1
            else obj1[val] = 1
        }
        for(let val of str2){
            if(obj2.hasOwnProperty(val)) obj2[val] += 1
            else obj2[val] = 1
        }

        //loop through object
        for(let key in obj1){
            if(!obj2.hasOwnProperty(key)) return false
            else{
                if(obj1[key] !== obj2[key]) return false
            }
        }

        return true
    }
    


}

console.log(checkAnagram("aaz","zza")) //false
console.log(checkAnagram("anagra","zza")) //false
console.log(checkAnagram("aaz","zza")) //false
console.log(checkAnagram("qwerty","qeywrt")) //true
console.log(checkAnagram("awesome","awesom")) //false