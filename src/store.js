// src/redux/productSlice.js

import { createSlice, configureStore } from '@reduxjs/toolkit';


//local cart from localstorage
const savedCart = localStorage.getItem("cart");
const localStorageCart = savedCart ? JSON.parse(savedCart) : [];
// Product slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
   Veg: [
  { name: 'Tomatoes', price: 30, image: '/Tomatoes.jpg' },
  { name: 'Carrots', price: 25, image: '/Carrots.jpg' },
  { name: 'Ladyfinger', price: 40, image: '/Ladyfinger.jpg' },
  { name: 'Potatoes', price: 20, image: '/Potatoes.jpg' },
  { name: 'Onions', price: 35, image: '/Onions.jpg' },
  { name: 'Spinach', price: 15, image: '/Spinach.jpg' },
  { name: 'Cucumber', price: 18, image: '/Cucumber.jpg' },
  { name: 'Beetroot', price: 22, image: '/Beetroot.jpg' },
  { name: 'Green Peas', price: 28, image: '/GreenPeas.jpg' },
  { name: 'Capsicum', price: 38, image: '/Capsicum.jpg' },
  { name: 'Cabbage', price: 24, image: '/Cabbage.jpg' },
  { name: 'Cauliflower', price: 30, image: '/Cauliflower.jpg' },
  { name: 'Broccoli', price: 40, image: '/Broccoli.jpg' },
  { name: 'Brinjal', price: 27, image: '/Brinjal.jpg' },
  { name: 'Bitter Gourd', price: 26, image: '/BitterGourd.jpg' },
  { name: 'Bottle Gourd', price: 22, image: '/BottleGourd.jpg' },
  { name: 'Pumpkin', price: 20, image: '/Pumpkin.jpg' },
  { name: 'Radish', price: 19, image: '/Radish.jpg' },
  { name: 'Turnip', price: 21, image: '/Turnip.jpg' },
  { name: 'Drumstick', price: 32, image: '/Drumstick.jpg' },
  { name: 'Coriander Leaves', price: 10, image: '/Coriander.jpg' },
  { name: 'Mint Leaves', price: 10, image: '/Mint.jpg' },
  { name: 'Spring Onion', price: 25, image: '/SpringOnion.jpg' },
  { name: 'Zucchini', price: 45, image: '/Zucchini.jpg' },
  { name: 'Mushroom', price: 60, image: '/Mushroom.jpg' },
  { name: 'Sweet Corn', price: 30, image: '/SweetCorn.jpg' },
  { name: 'Green Beans', price: 34, image: '/GreenBeans.jpg' },
  { name: 'Red Bell Pepper', price: 50, image: '/RedBellPepper.jpg' },
  { name: 'Yellow Bell Pepper', price: 50, image: '/YellowBellPepper.jpg' },
  { name: 'Kale', price: 55, image: '/Kale.jpg' },
  { name: 'Lettuce', price: 40, image: '/Lettuce.jpg' },
  { name: 'Celery', price: 35, image: '/Celery.jpg' },
  { name: 'Garlic', price: 25, image: '/Garlic.jpg' },
  { name: 'Ginger', price: 30, image: '/Ginger.jpg' },
  { name: 'Chili', price: 20, image: '/Chili.jpg' },
  { name: 'Arbi (Taro Root)', price: 35, image: '/Arbi.jpg' },
  { name: 'Yam', price: 38, image: '/Yam.jpg' },
  { name: 'Raw Banana', price: 28, image: '/RawBanana.jpg' },
  { name: 'Snake Gourd', price: 34, image: '/SnakeGourd.jpg' },
  { name: 'Ivy Gourd (Tindora)', price: 29, image: '/IvyGourd.jpg' },
  { name: 'Ridge Gourd', price: 33, image: '/RidgeGourd.jpg' },
  { name: 'Ash Gourd', price: 36, image: '/AshGourd.jpg' },
  { name: 'Raw Mango', price: 45, image: '/RawMango.jpg' },
  { name: 'Curry Leaves', price: 12, image: '/CurryLeaves.jpg' },
  { name: 'Fenugreek Leaves', price: 18, image: '/FenugreekLeaves.jpg' },
  { name: 'Amaranth Leaves', price: 20, image: '/AmaranthLeaves.jpg' },
  { name: 'Sponge Gourd', price: 31, image: '/SpongeGourd.jpg' },
  { name: 'Parsley', price: 25, image: '/Parsley.jpg' },
  { name: 'Leeks', price: 42, image: '/Leeks.jpg' },
  { name: 'Mustard Greens', price: 33, image: '/MustardGreens.jpg' }
],

   nonVeg: [
  { name: 'Chicken Breast', price: 150, image: '/nonVegImages/Chicken Breast.jpg' },
  { name: 'Pork Ribs', price: 200, image: '/nonVegImages/Pork Ribs.jpg' },
  { name: 'Fish Fillets', price: 120, image: '/nonVegImages/Fish Fillets.jpg' },
  { name: 'Mutton Chops', price: 180, image: '/nonVegImages/Mutton Chops.jpg' },
  { name: 'Duck Meat', price: 250, image: '/nonVegImages/Duck Meat.jpg' },
  { name: 'Lamb Shank', price: 220, image: '/nonVegImages/Lamb Shank.jpg' },
  { name: 'Beef Steak', price: 300, image: '/nonVegImages/Beef Steak.jpg' },
  { name: 'Chicken Wings', price: 100, image: '/nonVegImages/Chicken Wings.jpg' },
  { name: 'Salmon Fish', price: 350, image: '/nonVegImages/Salmon Fish.jpg' },
  { name: 'Turkey Meat', price: 270, image: '/nonVegImages/Turkey Meat.jpg' },
  { name: 'Chicken Biriyani', price: 250, image: '/nonVegImages/ChickenBiriyani.jpg' },
  { name: 'Mutton Biriyani', price: 270, image: '/nonVegImages/MuttonBiriyani.jpg' },
  { name: 'Beef Curry', price: 280, image: '/nonVegImages/Beef Curry.jpg' },
  { name: 'Fish Curry', price: 190, image: '/nonVegImages/Fish Curry.jpg' },
  { name: 'Grilled Chicken', price: 240, image: '/nonVegImages/Grilled Chicken.jpg' },
  { name: 'Prawns', price: 300, image: '/nonVegImages/Prawns.jpg' },
  { name: 'Crab Meat', price: 350, image: '/nonVegImages/Crab Meat.jpg' },
  { name: 'Squid Rings', price: 280, image: '/nonVegImages/Squid Rings.jpg' },
  { name: 'Octopus', price: 400, image: '/nonVegImages/Octopus.jpg' },
  { name: 'Quail Meat', price: 220, image: '/nonVegImages/Quail Meat.jpg' },
  { name: 'Rabbit Meat', price: 260, image: '/nonVegImages/Rabbit Meat.jpg' },
  { name: 'Liver Fry', price: 150, image: '/nonVegImages/Liver Fry.jpg' },
  { name: 'Chicken Sausages', price: 120, image: '/nonVegImages/Chicken Sausages.jpg' },
  { name: 'Beef Sausages', price: 140, image: '/nonVegImages/Beef Sausages.jpg' },
  { name: 'Chicken Nuggets', price: 130, image: '/nonVegImages/Chicken Nuggets.jpg' },
  { name: 'Fish Fingers', price: 140, image: '/nonVegImages/Fish Fingers.jpg' },
  { name: 'Ham Slices', price: 160, image: '/nonVegImages/Ham Slices.jpg' },
  { name: 'Chicken Salami', price: 150, image: '/nonVegImages/Chicken Salami.jpg' },
  { name: 'Beef Burger Patty', price: 180, image: '/nonVegImages/Beef Burger Patty.jpg' },
  { name: 'Grilled Salmon', price: 370, image: '/nonVegImages/Grilled Salmon.jpg' },
  { name: 'Chicken Seekh Kebab', price: 220, image: '/nonVegImages/Chicken Seekh Kebab.jpg' },
  { name: 'Mutton Kebab', price: 250, image: '/nonVegImages/Mutton Kebab.jpg' },
  { name: 'Egg Curry', price: 100, image: '/nonVegImages/Egg Curry.jpg' },
  { name: 'Boiled Eggs (Pack of 6)', price: 60, image: '/nonVegImages/Boiled Eggs.jpg' },
  { name: 'Omelette', price: 50, image: '/nonVegImages/Omelette.jpg' },
  { name: 'Egg Fried Rice', price: 140, image: '/nonVegImages/Egg Fried Rice.jpg' },
  { name: 'Chicken Fried Rice', price: 160, image: '/nonVegImages/Chicken Fried Rice.jpg' },
  { name: 'Fish Tikka', price: 210, image: '/nonVegImages/Fish Tikka.jpg' },
  { name: 'Chicken Tikka', price: 200, image: '/nonVegImages/Chicken Tikka.jpg' },
  { name: 'Mutton Tikka', price: 230, image: '/nonVegImages/Mutton Tikka.jpg' },
  { name: 'Beef Mince', price: 190, image: '/nonVegImages/Beef Mince.jpg' },
  { name: 'Chicken Mince', price: 160, image: '/nonVegImages/Chicken Mince.jpg' },
  { name: 'Chicken Drumsticks', price: 140, image: '/nonVegImages/Chicken Drumsticks.jpg' },
  { name: 'Chicken Lollipop', price: 180, image: '/nonVegImages/Chicken Lollipop.jpg' },
  { name: 'Chicken Curry Cut', price: 145, image: '/nonVegImages/Chicken Curry Cut.jpg' },
  { name: 'Boneless Chicken', price: 170, image: '/nonVegImages/Boneless Chicken.jpg' },
  { name: 'Fish Head Curry Cut', price: 130, image: '/nonVegImages/Fish Head Curry Cut.jpg' },
  { name: 'Shellfish Mix', price: 320, image: '/nonVegImages/Shellfish Mix.jpg' },
  { name: 'Anchovies', price: 210, image: '/nonVegImages/Anchovies.jpg' },
  { name: 'Smoked Salmon', price: 400, image: '/nonVegImages/Smoked Salmon.jpg' }
],

   milk: [
  { name: 'Full Cream Milk', price: 50, image: '/MilkImages/Full Cream Milk.jpg' },
  { name: 'Toned Milk', price: 40, image: '/MilkImages/Toned Milk.jpg' },
  { name: 'Skimmed Milk', price: 45, image: '/MilkImages/Skimmed Milk.jpg' },
  { name: 'Organic Milk', price: 80, image: '/MilkImages/Organic Milk.jpg' },
  { name: 'Flavored Milk', price: 60, image: '/MilkImages/Flavored Milk.jpg' },
  { name: 'Buffalo Milk', price: 55, image: '/MilkImages/Buffalo Milk.jpg' },
  { name: 'Low Fat Milk', price: 55, image: '/MilkImages/Low Fat Milk.jpg' },
  { name: 'A2 Milk', price: 70, image: '/MilkImages/A2 Milk.jpg' },
  { name: 'Lactose-Free Milk', price: 90, image: '/MilkImages/Lactose-Free Milk.jpg' },
  { name: 'Coconut Milk', price: 100, image: '/MilkImages/Coconut Milk.jpg' },
  { name: 'Almond Milk', price: 110, image: '/MilkImages/Almond Milk.jpg' },
  { name: 'Soy Milk', price: 95, image: '/MilkImages/Soy Milk.jpg' },
  { name: 'Rice Milk', price: 85, image: '/MilkImages/Rice Milk.jpg' },
  { name: 'Oat Milk', price: 105, image: '/MilkImages/Oat Milk.jpg' },
  { name: 'Cashew Milk', price: 115, image: '/MilkImages/Cashew Milk.jpg' },
  { name: 'Hazelnut Milk', price: 120, image: '/MilkImages/Hazelnut Milk.jpg' },
  { name: 'Goat Milk', price: 90, image: '/MilkImages/Goat Milk.jpg' },
  { name: 'Sheep Milk', price: 100, image: '/MilkImages/Sheep Milk.jpg' },
  { name: 'Camel Milk', price: 130, image: '/MilkImages/Camel Milk.jpg' },
  { name: 'Evaporated Milk', price: 70, image: '/MilkImages/Evaporated Milk.jpg' },
  { name: 'Condensed Milk', price: 80, image: '/MilkImages/Condensed Milk.jpg' },
  { name: 'Powdered Milk', price: 60, image: '/MilkImages/Powdered Milk.jpg' },
  { name: 'UHT Milk', price: 75, image: '/MilkImages/UHT Milk.jpg' },
  { name: 'Raw Milk', price: 50, image: '/MilkImages/Raw Milk.jpg' },
  { name: 'Pasteurized Milk', price: 55, image: '/MilkImages/Pasteurized Milk.jpg' },
  { name: 'Buttermilk', price: 35, image: '/MilkImages/Buttermilk.jpg' },
  { name: 'Kefir Milk', price: 90, image: '/MilkImages/Kefir Milk.jpg' },
  { name: 'Chocolate Milk', price: 65, image: '/MilkImages/Chocolate Milk.jpg' },
  { name: 'Strawberry Milk', price: 70, image: '/MilkImages/Strawberry Milk.jpg' },
  { name: 'Banana Milk', price: 65, image: '/MilkImages/Banana Milk.jpg' },
  { name: 'Peanut Milk', price: 95, image: '/MilkImages/Peanut Milk.jpg' },
  { name: 'Walnut Milk', price: 110, image: '/MilkImages/Walnut Milk.jpg' },
  { name: 'Pistachio Milk', price: 125, image: '/MilkImages/Pistachio Milk.jpg' },
  { name: 'Macadamia Milk', price: 135, image: '/MilkImages/Macadamia Milk.jpg' },
  { name: 'Barista Almond Milk', price: 115, image: '/MilkImages/Barista Almond Milk.jpg' },
  { name: 'Barista Oat Milk', price: 120, image: '/MilkImages/Barista Oat Milk.jpg' },
  { name: 'Vanilla Almond Milk', price: 118, image: '/MilkImages/Vanilla Almond Milk.jpg' },
  { name: 'Sweetened Soy Milk', price: 98, image: '/MilkImages/Sweetened Soy Milk.jpg' },
  { name: 'Unsweetened Coconut Milk', price: 100, image: '/MilkImages/Unsweetened Coconut Milk.jpg' },
  { name: 'Spiced Milk', price: 70, image: '/MilkImages/Spiced Milk.jpg' },
  { name: 'Saffron Milk', price: 140, image: '/MilkImages/Saffron Milk.jpg' },
  { name: 'Rose Milk', price: 75, image: '/MilkImages/Rose Milk.jpg' },
  { name: 'Tulsi Milk', price: 90, image: '/MilkImages/Tulsi Milk.jpg' },
  { name: 'Turmeric Milk', price: 80, image: '/MilkImages/Turmeric Milk.jpg' },
  { name: 'Protein Milk', price: 150, image: '/MilkImages/Protein Milk.jpg' },
  { name: 'Energy Milk', price: 145, image: '/MilkImages/Energy Milk.jpg' },
  { name: 'Fortified Milk', price: 95, image: '/MilkImages/Fortified Milk.jpg' },
  { name: 'Desi Cow Milk', price: 85, image: '/MilkImages/Desi Cow Milk.jpg' },
  { name: 'Jersey Cow Milk', price: 75, image: '/MilkImages/Jersey Cow Milk.jpg' },
  { name: 'Colostrum Milk', price: 160, image: '/MilkImages/Colostrum Milk.jpg' },
  { name: 'Plant-Based Milk Mix', price: 130, image: '/MilkImages/Plant-Based Milk Mix.jpg' },
],

    fruits: [
  { name: 'Apple', price: 50, image: '/fruitsImages/Apple.jpg' },
  { name: 'Banana', price: 20, image: '/fruitsImages/Banana.jpg' },
  { name: 'Grapes', price: 60, image: '/fruitsImages/Grapes.jpg' },
  { name: 'Mango', price: 100, image: '/fruitsImages/Mango.jpg' },
  { name: 'Pineapple', price: 80, image: '/fruitsImages/Pineapple.jpg' },
  { name: 'Strawberry', price: 120, image: '/fruitsImages/Strawberry.jpg' },
  { name: 'Orange', price: 40, image: '/fruitsImages/Orange.jpg' },
  { name: 'Watermelon', price: 35, image: '/fruitsImages/Watermelon.jpg' },
  { name: 'Papaya', price: 45, image: '/fruitsImages/Papaya.jpg' },
  { name: 'Pomegranate', price: 90, image: '/fruitsImages/Pomegranate.jpg' },
  { name: 'Guava', price: 30, image: '/fruitsImages/Guava.jpg' },
  { name: 'Lychee', price: 70, image: '/fruitsImages/Lychee.jpg' },
  { name: 'Kiwi', price: 85, image: '/fruitsImages/Kiwi.jpg' },
  { name: 'Dragon Fruit', price: 150, image: '/fruitsImages/DragonFruit.jpg' },
  { name: 'Chikoo', price: 40, image: '/fruitsImages/Chikoo.jpg' },
  { name: 'Pear', price: 55, image: '/fruitsImages/Pear.jpg' },
  { name: 'Custard Apple', price: 90, image: '/fruitsImages/CustardApple.jpg' },
  { name: 'Blueberry', price: 200, image: '/fruitsImages/Blueberry.jpg' },
  { name: 'Blackberry', price: 180, image: '/fruitsImages/Blackberry.jpg' },
  { name: 'Cranberry', price: 160, image: '/fruitsImages/Cranberry.jpg' },
  { name: 'Raspberry', price: 170, image: '/fruitsImages/Raspberry.jpg' },
  { name: 'Jackfruit', price: 60, image: '/fruitsImages/Jackfruit.jpg' },
  { name: 'Tangerine', price: 45, image: '/fruitsImages/Tangerine.jpg' },
  { name: 'Mulberry', price: 90, image: '/fruitsImages/Mulberry.jpg' },
  { name: 'Apricot', price: 110, image: '/fruitsImages/Apricot.jpg' },
  { name: 'Plum', price: 70, image: '/fruitsImages/Plum.jpg' },
  { name: 'Peach', price: 95, image: '/fruitsImages/Peach.jpg' },
  { name: 'Fig', price: 85, image: '/fruitsImages/Fig.jpg' },
  { name: 'Nectarine', price: 100, image: '/fruitsImages/Nectarine.jpg' },
  { name: 'Gooseberry', price: 30, image: '/fruitsImages/Gooseberry.jpg' },
  { name: 'Passion Fruit', price: 130, image: '/fruitsImages/PassionFruit.jpg' },
  { name: 'Star Fruit', price: 75, image: '/fruitsImages/StarFruit.jpg' },
  { name: 'Longan', price: 90, image: '/fruitsImages/Longan.jpg' },
  { name: 'Rambutan', price: 140, image: '/fruitsImages/Rambutan.jpg' },
  { name: 'Persimmon', price: 105, image: '/fruitsImages/Persimmon.jpg' },
  { name: 'Cantaloupe', price: 65, image: '/fruitsImages/Cantaloupe.jpg' },
  { name: 'Honeydew', price: 70, image: '/fruitsImages/Honeydew.jpg' },
  { name: 'Soursop', price: 160, image: '/fruitsImages/Soursop.jpg' },
  { name: 'Jujube', price: 35, image: '/fruitsImages/Jujube.jpg' },
  { name: 'Dates', price: 90, image: '/fruitsImages/Dates.jpg' },
  { name: 'Currants', price: 150, image: '/fruitsImages/Currants.jpg' },
  { name: 'Breadfruit', price: 100, image: '/fruitsImages/Breadfruit.jpg' },
  { name: 'Bael', price: 50, image: '/fruitsImages/Bael.jpg' },
  { name: 'Ber', price: 25, image: '/fruitsImages/Ber.jpg' },
  { name: 'Jamun', price: 55, image: '/fruitsImages/Jamun.jpg' },
  { name: 'Tamarind', price: 45, image: '/fruitsImages/Tamarind.jpg' },
  { name: 'Avocado', price: 120, image: '/fruitsImages/Avocado.jpg' },
  { name: 'Coconut', price: 30, image: '/fruitsImages/Coconut.jpg' },
  { name: 'Olives', price: 95, image: '/fruitsImages/Olives.jpg' },
  { name: 'Loquat', price: 60, image: '/fruitsImages/Loquat.jpg' },
]

    
  },
  reducers: {},
});

/// Cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: localStorageCart,
  reducers: {
    addToCart: (state, inputItem) => {
      const item = state.find(item => item.name === inputItem.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...inputItem.payload, quantity: 1 });
      }
    },
    incrementCart: (state, inputItem) => {
      const item = state.find(item => item.name === inputItem.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementCart: (state, inputItem) => {
      const itemIndex = state.findIndex(item => item.name === inputItem.payload.name);
      if (itemIndex > -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1);
        }
      }
    },
    removeFromCart: (state, inputItem) => {
      return state.filter(item => item.name !== inputItem.payload.name);
    },
    clearCart:()=>[],
  },
});


// Create order slice
const orderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Configure store
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    orders: orderSlice.reducer,
  },
});

//save cart data to local storage
store.subscribe(()=>{
  const state = store.getState();
  localStorage.setItem("cart",JSON.stringify(state.cart));
});

//login details
  
// store.js

export const saveUser = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const getUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((user) => user.email === email && user.password === password);
};

export const updateUser = (updatedUser) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex((user) => user.email === updatedUser.email);
  if (index !== -1) {
    users[index] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));
  }
};

export const getUserByEmail = (email) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((user) => user.email === email);
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const clearCurrentUser = () => {
  localStorage.removeItem("currentUser");
};



// Export cart actions and store
export const { addToCart, incrementCart, decrementCart, removeFromCart, clearCart } = cartSlice.actions;
export const { addOrder } = orderSlice.actions;
export default store;

 