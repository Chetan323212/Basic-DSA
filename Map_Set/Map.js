const fruitInventory = new Map();  //Map()

fruitInventory.set("apple, {price: 0.3, quantity: 50}")
fruitInventory.set("banana, {price: 0.5, quantity: 100}")

fruitInventory.get("apple")
fruitInventory.get("banana")

fruitInventory.has("apple")
fruitInventory.has("orange")
fruitInventory.has("banana")

fruitInventory.size 

for (const fruit of fruitInventory) {
    console.log(fruit)
}