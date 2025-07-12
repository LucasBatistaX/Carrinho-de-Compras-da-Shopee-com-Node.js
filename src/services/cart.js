//Quais ações meu carrinho pode fazer?

//CASOS DE USO.

// -> ✅ adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}
// -> ✅ calcular o total do carrinho.
async function calculateTotal(userCart) {
console.log("\n Shopee Cart total is: ")

    const result = userCart.reduce((total, item) =>total + item.subtotal(), 0)
    console.log(`🛒 Total ${result}`)
}

// -> ✅ deletar item do carrinho

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== -1){
        userCart.splice(index, 1)
    }
}


// -> ✅ remover um item - diminui um item.
async function removeItem(userCart, item){
  //1. encontrar o index do item
  const indexFound = userCart.findIndex((p) => p.name === item.name)
  
  //2. caso não encontre o item
  if(indexFound == -1){
    console.log("item não encontrado")
    return;
  }

  //3. item maior que 1 subtrair item.
  if(userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1
    return
  }

  //4. caso item = 1 deletar o item.
  if(userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1)
    return
  }
}



//Mostra todos os items do carrinho.
async function displayCart(userCart) {
    console.log("\n Shopee cart list: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`)
    });
}
export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,displayCart
}
















// -> remover um item - diminui um item.
// async function removeItem(userCart, index){
//     //tranforma o indice visual do usuario, para o indice do backend
//     const deleteIndex = index - 1;

//     if(index >= 0 && index < userCart.length){
//         userCart.splice (deleteIndex, 1)
//     }