let maxLimit = prompt("Enter the Limit of the Double Loop:");

for (let i = 0; i <= maxLimit; i++) {
    for (let j = 0; j <= maxLimit; j++) {
        let x = i + j;
        console.log("["+i+"]", "["+j+"]" , "Added value is ", x);
    }
}