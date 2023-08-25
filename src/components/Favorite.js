import { useCart } from "react-use-cart";
import * as React from 'react';




function Cart() {
  
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    // updateItemQuantity,
    // removeItem,
    // cartTotal,
    // emptyCart,
  } = useCart();
   
  if (isEmpty) return <h1 className="text-center">No,Favorite Food yet. </h1>; 
  return (
    <>
     
     <h3  className="text-center ">Favorite:({totalUniqueItems})  All times Favorite:({totalItems})</h3>
             <div className="position-relative">
      <div className='card p-0  h-60 shadow  d-flex flex-row flex-wrap '>
            {items.map((item, index) => (
                      <div className='mt-3 col-6 col-md-6 col-lg-3 mx-0 mb-4'>
                      <div className='card p-0  h-60 shadow'>
                           <div className='card-body' >
                           <img  src={item.img} alt='card-img' className='card-img-top img-fluid' />
                                <h5 className='card-title'>{item.title}</h5>
                                <p className='card-text' style={{fontSize:"10px"}}>{item.desc}</p>
                                <p className='card-text'>Rs./ <b>{item.price}</b></p>
                           </div>
                      </div>  
                  </div>
            ))}
            </div>
      </div>
 
    </>
  );
}

export default Cart;


