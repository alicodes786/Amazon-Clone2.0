
function getCartItems(){
  db.collection("cart-items").onSnapshot((snapshot) => {
    let totalCount = 0;
    snapshot.forEach((doc) =>{
       totalCount+=doc.data().quantity;
    })
    setCartCounter(totalCount);
  })
}

function setCartCounter(totalCount){
  //cart-item-number
  document.querySelector(".cart-item-count").innerHTML = totalCount;
}

getCartItems();