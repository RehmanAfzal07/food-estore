import { useCart } from "react-use-cart";
import { MdOutlineDeleteForever } from 'react-icons/md';


function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className="text-center mt-5">Your cart is empty</h1>;

  return (
  <>
  <div className=".col">
        <div className="">
          <h4 style={{textAlign: "center" , 
          backgroundColor:"skyblue"}}>Cart ({totalUniqueItems}) total Items: ({totalItems})</h4>
          <table className="table table-sm table-light table-hover">

            <th>View</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Variation</th>
            <th>Delete</th>
            {items.map((item, index) => (
              <tr key={index}>
                <td><img src={item.img}  alt="food" style={{ height: '2rem', width:"2rem" }}  />
                </td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  className="btn btn-outline-primary  btn-sm m-1">-</button>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  className="btn btn-outline-success  btn-sm m-1" >+</button>
                <td><button onClick={() => removeItem(item.id)}
                  className="btn  btn-outline-danger  btn-sm">
                 <MdOutlineDeleteForever/>
                </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="col-auto ms-auto">
          <h3 className="text-dark bg-warning "
          style={{textAlign: "center"}}>Total Price: Rs {cartTotal}</h3>
          <div className="col-auto">
            <button className="btn btn-outline-danger" onClick={() => emptyCart()}>Clear Cart</button>
            <button className="btn btn-outline-success ms-1" onClick={() => cartTotal}>Buy Now</button>
          </div>
        </div>
  </>
    
  );
}

export default Cart;


