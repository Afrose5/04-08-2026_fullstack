const array=[115,5,40,8,145,197]
let largest = array[0]
array.forEach(element => {
    if(element>largest){
        largest=element
    }
});
console.log("Largest element:", largest);