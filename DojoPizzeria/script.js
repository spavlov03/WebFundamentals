var pizza = {
    crustType: ["Thin", "Deep Dish", "Hand Tossed", "Brookly Style"], 
    sauceType: ["Traditional", "Marinara", "Alfredo", "Olive Oil"],
    cheeses: ["Mozzarella", "Feta", "Gouda"],
    toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions", "ham", "pineapple", "Arugula", "Proscuitto"]
}

function pizzaOven(crustType,sauceType,cheeses,toppings) {
    var pizza = {}; 
    pizza.Crust = crustType; 
    pizza.Sauce = sauceType, 
    pizza.Cheese = cheeses;
    pizza.Toppings = toppings;
    return pizza; 
}

var p1 = pizzaOven(pizza.crustType[1],pizza.sauceType[0],pizza.cheeses[0],(pizza.toppings[0] + " " + pizza.toppings[1])); 
console.log("Your Pizza Has : "); 
console.log(p1); 
var p2 = pizzaOven(pizza.crustType[2],pizza.sauceType[1],(pizza.cheeses[0] + " " + pizza.cheeses[1]),(pizza.toppings[2] + " " + pizza.toppings[3] + " " + pizza.toppings[4])); 
console.log("Your Pizza Has : "); 
console.log(p2);
var p3 = pizzaOven(pizza.crustType[3], pizza.sauceType[2], pizza.cheeses[2], (pizza.toppings[4] + " " + pizza.toppings[5] + " " + pizza.toppings[6])); 
console.log("Your Pizza Has : "); 
console.log(p3);
var p4 = pizzaOven(pizza.crustType[0], pizza.sauceType[3], pizza.cheeses[0], (pizza.toppings[7] + " " + pizza.toppings[8]));
console.log("Your Pizza Has : "); 
console.log(p4);

var x = pizza.crustType[Math.floor((pizza.crustType).length * Math.random())];
var y = pizza.sauceType[Math.floor((pizza.sauceType).length * Math.random())];
var z = pizza.cheeses[Math.floor((pizza.cheeses).length * Math.random())];
var w = pizza.toppings[Math.floor((pizza.toppings).length * Math.random())];

function randomPizza(crust,sauce,cheese,topping) {
    var pizza = {}; 
    pizza.Crust = crust; 
    pizza.Sauce = sauce, 
    pizza.Cheese = cheese;
    pizza.Topping = topping;
    return pizza; 
} 
console.log(randomPizza(x,y,z,w)); 

