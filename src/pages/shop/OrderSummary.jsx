import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { getBaseUrl } from "../../utils/baseURL";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const products = useSelector((store) => store.cart.products);

  const { selectedItems, totalPrice, tax, taxRate, grandTotal } = useSelector(
    (store) => store.cart
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  //payment integration
  const makePayment = async (e) => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PK)
    console.log(stripe)
    const body = {
      products: products,
      userId: user?._id
    }

    const headers = {
      "Content-Type": "application/json"
    }
    const response = await fetch(`${getBaseUrl()}/api/orders/create-checkout-session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })
   
    const session = await response.json()
    console.log("session: ", session)

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    })
    console.log("Result:",  result)
    if(result.error){
      console.error("Error:", result.error.message)
    }
  };


  return (
    <div className="bg-primary-light mt-5 rounded tex-base">
      <div className="px-6 py-4 space-y-5">
        <h2 className="text-xl  text-dark">Order Summary</h2>
        <p className="text-dark mt-2">Selected Items: {selectedItems}</p>
        <p>TotalPrice: ₹{totalPrice.toFixed(2)}</p>
        <p>
          Tax ({taxRate * 100}%): ₹{tax.toFixed(2)}
        </p>
        <h3 className="font-bold">Total: ₹{grandTotal.toFixed(2)}</h3>

        <div className="px-4 mb-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClearCart();
            }}
            className="bg-red-500 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4"
          >
            Clear cart
          </button>
          <button
          onClick={(e) => {
            e.stopPropagation();
            makePayment();
        }}
           className="bg-green-600 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center">
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
