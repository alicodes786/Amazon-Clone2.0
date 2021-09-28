

function getItems(){
  db.collection("items").get().then((querySnapshot) => {
    let items = [];
    querySnapshot.forEach((doc) => {
         items.push({
            id:doc.id,
            image:doc.data().image,
            name: doc.data().name,
            make:doc.data().make,
            rating:doc.data().rating,
            price:doc.data().price
            })
         });
         generateItems(items);
     });
}

function addToCart(item){
  console.log(item);
  let cartItem = db.collection("cart-items").doc(item.id);
          
  cartItem.get()
  .then(function(doc){
      if(doc.exists){
        cartItem.update({
           quantity : doc.data().quantity + 1
        })
      } else{
        cartItem.set({
          image :item.image,
          make:item.make,
          name: item.name,
          rating :item.rating,
          price :item.price,
          quantity: 1,
        })
      }
  })

}



function generateItems(items){
 
  items.forEach((item) => {
    let doc = document.createElement("div");
    doc.classList.add("main-product", "mr-5");
    doc.innerHTML = `
    <div class="product-image w-48 h-52 bg-white rounded-lg ">
    <img class = "w-full h-full object-contain p-4" src="${item.image}" alt="">
   </div>
    <div class="product-name text-gray-700 font-bold mt-2 text-sm">
      ${item.name}
    </div>
    <div class="product-make text-green-700 font-bold">
       ${item.make}
    </div>
     <div class="product-rating text-yellow-300 my-1">
         ⭐⭐⭐⭐ ${item.rating}
     </div>
    <div  class="product-price  text-gray-700 font-bold text-lg">
        £${item.price}
      </div>
    `
    let addtoCartEl = document.createElement("div");
    addtoCartEl.classList.add("h-8", "w-28", "bg-yellow-500", "flex", "items-center", "justify-center", "text-white", "rounded", "text-md", "cursor-pointer", "hover:bg-yellow-600");

    addtoCartEl.innerText = "Add to Cart";
    addtoCartEl.addEventListener("click", function(){
      addToCart(item);
    })
    doc.appendChild(addtoCartEl);
    document.querySelector(".main-section-products").appendChild(doc);
  })
}

getItems();

