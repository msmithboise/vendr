class VendingMachine {
  constructor() {
    this.transactionTotal = 0
    this.acceptableCurrency = {
      quarter: .25,
      dime: .1,
      nickel: .05
    }
    this.foodItems = [{
      id: 'a1',
      img: 'https://target.scene7.com/is/image/Target/51591776?wid=400&hei=400&fmt=pjpeg',
      price: 1.25,
      quantity: 10
    }, {
      id: 'a2',
      img: 'https://pbs.twimg.com/profile_images/824647153721106432/gwLIQxqy_400x400.jpg',
      price: 2.00,
      quantity: 1
    }, {
      id: 'a3',
      img: 'http://www.mountaindew.com/assets/content/38195/20881/21892-grew-dew-product.png',
      price: .75,
      quantity: 15
    }]
    this.machineTotal = 10
  }

  addMoney(coin) {
    //validate coin
    //  increase total 
    //return total
  if (this.acceptableCurrency[coin]){
    this.transactionTotal += this.acceptableCurrency[coin]
  }
return 'invalid coin'

  }
  //   //find item
  //   //if transactionTotal >= item.price && item.quantity > 0
  //   //  item.quantity --
  //   //  transactionTotal -= item.price
  //   //  machineTotal += item.price
  //   //return item.img
  
//   vend(foodIndex){ // food id
//     let item = this.foodItems[foodIndex]
//     if (this.transactionTotal >= item.price && item.quantity > 0){
//       item.quantity--
//       this.transactionTotal -= item.price
//       this.machineTotal += item.price
//       return{ img: img,
// Total: this.transactionTotal
//     }
//   }
  
  
  
  vend(foodId) {
    let item = this.foodItems.find(currentItem => currentItem.id == foodId)
    if(item.quantity && this.transactionTotal >= item.price){
      item.quantity--
      this.transactionTotal -= item.price
      this.machineTotal += item.price
      return { 
        img: item.img, 
        total: this.transactionTotal }
    }
    

    // for (let i = 0; i < this.foodItems.length; i++) { // iterate through array of items
    //   let currentItem = this.foodItems[i]; // declaring a variable that holds info for all items
    //    if (currentItem.id == foodId){ // now what do we do with new variable?  conditional, if id of any of the items = foodId
    //      if (currentItem.quantity > 0) // and the quanity is over 0, so that the item is available
    //      if (this.transactionTotal -= currentItem.price) // transactionTotal is the amount of money user puts in machine
    //      if (this.machineTotal += currentItem.price) // machineTotal is how much money is already in the machine

    //      return currentItem.img
    //    }  else
    //    return "Out of order!"

      
    






  }
  giveChange() {
    //transactionTotal = 0
    this.transactionTotal = 0


  }

  getItems() {
    return this.foodItems
  }
}


export default VendingMachine