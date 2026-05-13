//syntex of set 

const fruitSet = new Set();  // now we creted a set 

fruitSet.add("Apple") // Using a add we can add the element in to the set
fruitSet.add("Banana") //{`Apple`, `Banana`}
fruitSet.add("Mongo") //Set(3) { 'Apple', 'Banana', 'Mongo' }
// Using the set we can only add one element at a one time 

//---------------------(has)-----------------------------------------------------------
// has check the element is present in set or not

// fruit.has("Apple") // true
// console.log(fruit.has("Stroberry")) // false
// console.log(fruit.has("Banana"))  // true
// has only return true or false  vlaue

//------------------------(Delete)------------------------------------------------------------

// console.log(fruit) // Set(3) { 'Apple', 'Banana', 'Mongo' }
// fruit.delete("Apple") // delete Apple from set
// console.log(fruit) //Set(2) { 'Banana', 'Mongo' }
// console.log(fruit.size)

//----------------------------(loop for set)---------------------------------------------------------------

// we can all so print the set using loop

// for(const fruit of fruitSet){
    // console.log(fruit)
// } //  we can access the element using loop

// const entries = fruitSet.entries()

// for (const entry of entries) {
//     console.log(entry)
// } // using enries of set

// const keys = fruitSet.keys()
// for (const key of keys) {
//     console.log(key) // using a key
// }

// const values = fruitSet.values()
// for (const value of values) {
//     console.log(value)
// } // using values
//-------------------(clear)----------------------------------------------------------------------

// fruitSet.clear()
// console.log(fruitSet)

//----------------------(Advanse Methods)-----------------------------------------------------------------

// const SetA = new Set(['Apple','Banana','Orange'])
// const SetB = new Set(['Apple','Banana','Cherry'])
// console.log(SetA.symmetricDifference(SetB))
// console.log(SetA.intersection(SetB))
// console.log(SetA.union(SetB))

const SetC = new Set(['Apple','Apple','Banana'])
console.log(SetC)


