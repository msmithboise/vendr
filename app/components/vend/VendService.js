import VendingMachine from "../../models/VendingMachine.js";

//Private Parts


const vm = new VendingMachine()



//public to controller
class VendService {
  constructor() {

  }
  getItems() {
    return vm.getItems()
  }
  addMoney(type) {
   
    //confirm currency is acceptable
    return vm.addMoney(type)
  }
  vend(foodId){
    let obj = vm.vend(foodId)
    return obj
  }

  giveChange(){
    vm.giveChange()
  }

}




export default VendService