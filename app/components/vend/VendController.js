import VendService from "./VendService.js";

//PRIVATE PARTS

//variables outside of the exported class are not accessible
const vendService = new VendService()

function drawTotal(total) {
  document.getElementById('total').innerText = total
}

function drawItems() {
  let items = vendService.getItems()
  //draw the items to the page
  let template = ''
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    template += `
            <div class="food-item" onclick="app.controllers.vendController.vend('${item.id}')">
              <img src="${item.img}" alt = "">
              <h3> ${item.price}</h3> 
            </div>
            `
  }
  document.getElementById('food').innerHTML = template
}

function drawVend() {

}

//PUBLIC PARTS
//Controllers are used for getting user input
//Updating Screen
//Sending and reciving data from Service
class VendController {
  constructor() {

  }


  vend(foodId){
    let obj = vendService.vend(foodId)
    if(obj.img){
      document.getElementById("vended").setAttribute('src', obj.img)
      drawTotal(obj.total)
    }
  }


  //used to send money to service
  addMoney(cur) {
    console.log('controller: ', cur)
    let total = vendService.addMoney(cur)
    console.log('returned to controller: ', total)
    drawTotal(total)
  }


}

drawItems()

export default VendController