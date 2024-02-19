
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex items-center m-5   ">

      <div className="flex rounded-md justify-around text-white w-[800px] bg-gray-900 p-4  ">

        <div className="bg-white  w-5/12">
          <img src={item.image} className="w-[200px] h-[200px] bg-white mx-auto " />
        </div>
        <div className="flex flex-col gap-3  w-6/12">
          <h1 className=" p-2">{item.title}</h1>
          <h1 className=" p-2" >{item.description}</h1>
          <div className="bg-white flex text-3xl gap-5 text-black rounded-md p-2">
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
