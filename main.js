// Question #1

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favoriteFoods(people){
    return Object.values(people)
}

console.log(favoriteFoods(person3))

// Question #2

let new_age = 0;

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () =>{
        return 'The name is ' + this.name + ' and they are ' + this.age;
    }
    this.addAge = () =>{
        return this.age++
    }
}

let greg = new Person('Greg',10)
let joe = new Person('Joe',22)
console.log(greg.printInfo())
console.log(joe.printInfo())
//console.log(greg.addAge())


//Question #3

let word = "Something";

const checkLength = (st) => {
    return new Promise( (resolve,reject) => {
        if(st.length > 10){
            resolve(true)
        } else {
            reject(false) 
        }

    })
}

checkLength(word)

.then( (result) => {
    console.log('Big word')
})

.catch( (error) => {
    console.log('Small number')
})