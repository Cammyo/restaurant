// P1
class FoodItem {
  constructor(foodInfo){
    this.name = foodInfo.name;
    this.calories = foodInfo.calories;
    this.vegan = foodInfo.vegan;
    this.glutenFree = foodInfo.glutenFree;
    this.citrusFree = foodInfo.citrusFree;
  }
  
  stringify(string) {
    var strVegan;
    var strGluten;
    var strCitrus;
    if(this.vegan === true){
      strVegan = "vegan"
    }else{
      strVegan = "not vegan"
    }
    
    if(this.glutenFree === true){
      strGluten = "gluten"
    }else{
      strGluten = "no gluten"
    }
    
    if(this.citrusFree === true){
      strCitrus = "citrus"
    }else{
      strCitrus = "no citrus"
    }
    
    return this.name + " has " + this.calories + " calories and is " + strVegan + " and has " + strGluten + " and has " + strCitrus;
    
  }
}





var pizza = new FoodItem({
  name : 'Pizza',
  calories : 2000,
  vegan : false,
  glutenFree : false,
  citrusFree : true
});

var hamburger = new FoodItem({
  name : 'Hamburger',
  calories : 800,
  vegan : false,
  glutenFree : false,
  citrusFree : true
});

var salad = new FoodItem({
  name : 'Salad',
  calories : 450,
  vegan : true,
  glutenFree : true,
  citrusFree : false
})

console.log(pizza.stringify(pizza))
console.log(hamburger.stringify(hamburger))
console.log(salad.stringify(salad))

// P2
class DrinkItem {
  constructor(drinkInfo){
    this.name = drinkInfo.name;
    this.desc = drinkInfo.desc;
    this.price = drinkInfo.price;
    this.ingredients = drinkInfo.ingredients;
  }
}

var margarita = new DrinkItem({
  name : 'margarita',
  desc : 'flavorful drink',
  price: 10,
  ingredients: ['lime','sugar','alcohol(a lot)']
});


var veganList = ["sauce","veggies","corn tortilla", "avocada", "tomato","salt","lime","sugar","alcohol(a lot)"]
var glutenList = ["alcohol(a lot)"]
var citrusList = ["lime","sauce"]





class PlateItem {
  constructor(plateInfo){
    this.name = plateInfo.name;
    this.desc = plateInfo.desc;
    this.price = plateInfo.price;
    this.ingredients = plateInfo.ingredients;
  }
  
//   isVegan(){
//     for (var i = 0; i < this.ingredients.length; i++) {
//       for (var j = 0; j < veganList.length; j++) {
//         if (ingredientList[i] === veganList[j]) {
//           return plate + " is vegan"
//         }else{
//           return plate + " is not vegan"
//         }
//       }
//     }
//   }
//   isGlutenFree(){
//     for (var k = 0; k < this.ingredients.length; k++) {
//       for (var l = 0; l < glutenList.length; l++) {
//         if (ingredientList[k] === glutenList[l]) {
//           return plate + " is gluten free"
//         } else {
//           return plate + " is not gluten free"
//         }
//       }
//     }
//   }
//   isCitrusFree(){
//     for (var m = 0; m < this.ingredients.length; m++) {
//       for (var n = 0; n < glutenList.length; n++) {
//         if (ingredientList[m] === glutenList[n]) {
//           return plate + " is citrus free"
//         } else {
//           return plate + " is not citrus free"
//         }
//       }
      
//     }
//   }
}

var enchiladaPlate = new PlateItem({
  name : 'A Whole Lotta Enchilada Plate',
  desc : "Ain't nothin but Nada",
  price: 20,
  ingredients : ['cheese','ground beef','sauce','veggies','corn tortilla']
});

var guacamolePlate = new PlateItem({
  name : 'Holy Moly Guacamole Plate',
  desc : 'Spicy Guac',
  price: 5,
  ingredients : ['avocado','tomato','salt','lime']
})

var ingredientList = (enchiladaPlate.ingredients + guacamolePlate.ingredients + margarita.ingredients).split(",");


class OrderItem {
  constructor(orderInfo){
    this.plate = orderInfo.plate;
  }
}

class MenuItem {
  constructor(menuInfo){
    this.plate = menuInfo.plate;
  }
}

var menu = [enchiladaPlate, guacamolePlate, margarita]


class RestaurantItem {
  constructor(restaurantInfo){
    this.name = restaurantInfo.name;
    this.desc = restaurantInfo.desc;
    this.menu = restaurantInfo.menu;
  }
}

var restaurant = new RestaurantItem({
  name : "3 Margaritas",
  desc : "Fill all of your margarita desires",
  menu : menu
})

class Customer {
  constructor(customerInfo){
    this.diet = customerInfo.diet;
  }
}





