import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state.cart);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
   
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className=" flex mt-8  ">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-center items-center m-auto bg-yellow-500 p-8 gap-4">

        <div className="flex flex-col gap-4">
          <div className="text-3xl">Your Cart</div>
          <div className="text-2xl">Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p>Total Amount: ${totalAmount}</p>
          <button className="bg-white rounded-lg p-4  hover:bg-sky-200 hover:scale-x-[150px]">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
