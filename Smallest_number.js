const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let smallest = array[0];
array.forEach(element => {
    if (element < smallest) {   
        smallest = element;
    }
});
console.log("Smallest element:", smallest);