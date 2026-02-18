// setTimeout( () =>{
//     console.log('khalid')
// },1000)


// const names = ['khalid' , 'siciid' , 'cumar' ,'yahaya' , 'B3s' , 'Bula'];

// const shortNames = names.filter( (name) =>{
//     return name.length <= 4
// })

// console.log(shortNames)



//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (number1, number2 ,callback) => {
    setTimeout( () =>{
        const sum = number1 + number2
        return callback(sum)
    }, 2000)
}




add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

