import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWhishList =[] 

console.log("Welcome to the your Shopee Cart!")

//Criando 2 itens
const item1 = await createItem("hotweels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)

//Adiocionei 2 itens no carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart)
//Deletei 2 itens do carrinho
// await cartService.deleteItem(myCart, item2.name)
// await cartService.deleteItem(myCart, item1.name)

await cartService.calculateTotal(myCart)



// console.log(item2.subtotal())