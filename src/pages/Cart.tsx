import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../context/cartStore";
import { TbPlus, TbMinus } from "react-icons/tb";
import { MdClose } from "react-icons/md";
type Props = {};

const Cart = (props: Props) => {
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalPrice = useCartStore((state) => state.totalPrice);

  useEffect(() => {
    if (cartItems?.length === 0) navigate("/");
  }, [cartItems.length]);

  return (
    <div className="h-screen   w-full px-4 text-gray-800 dark:text-slate-100 z-20">
      <div className="w-full flex flex-col h-full">
        <div className="w-full flex justify-between items-center mb-5">
          <h2 className="w-full text-left font-bold text-xl my-5">Basket</h2>
          <Link to=".." className="text-3xl">
            <MdClose />
          </Link>
        </div>
        <div className="flex flex-col gap-4 overflow-y-scroll h-full ">
          {cartItems?.length > 0 &&
            cartItems.map((item, idx) => (
              <div key={idx} className="border-b border-b-gray-500">
                <div className="relative items-center gap-2 text-base font-[500]">
                  <span className="absolute top-0 left-0">{item.quantity}</span>
                  <div className="flex justify-between pl-5">
                    <Link
                      to="#editProduct"
                      className="break-words
                    hover:no-underline decoration-gray-700 dark:decoration-slate-100 underline underline-offset-2"
                    >
                      {item.title}
                    </Link>
                    {/* item and price */}
                    <span className="whitespace-nowrap font-light">
                      € {item.totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
                {/* extra suplements if there are any ?? */}
                <span className="flex items-center text-xs pl-5 italic font-light">
                  {item.ingridients}
                </span>

                <div className="flex justify-between items-center py-2 pl-5">
                  <button className="text-base underline hover:no-underline">
                    Add note
                  </button>
                  <div className="text-2xl w-20 flex justify-between px-2">
                    <button onClick={() => removeFromCart(item.id)}>
                      <TbMinus />
                    </button>
                    <button onClick={() => addToCart(item)}>
                      <TbPlus />
                    </button>
                  </div>
                </div>

                <div className="text-xs space-y-2">
                  <p className="text-xs tracking-wide bg-green-300/10 rounded-full pl-5 px-4 py-2 mb-4">
                    Note for this product
                  </p>

                  <div>
                    <button className="mb-4 pl-5 text-base underline hover:no-underline">
                      Edit note
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="w-full sticky bottom-0 bg-slate-100 dark:bg-gray-700">
          <div className="flex flex-col space-y-3 pt-4 mb-2">
            <div className="flex flex-row justify-between">
              <span>Subtotal</span>
              <span>€ {totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex flex-row justify-between">
              <span>Delivery cost</span>
              <span>Free</span>
            </div>

            <div className="flex flex-row justify-between font-semibold">
              <span>Total</span>
              <span>€ {totalPrice.toFixed(2)}</span>
            </div>
          </div>
          {cartItems?.length > 0 && location?.pathname !== "/checkout" && (
            <button
              onClick={() => navigate("/checkout")}
              className="bg-orange-600 rounded-full py-2 my-2
      text-xl text-slate-100 font-semibold w-full mb-3
      "
            >
              <p className="flex items-center justify-center space-x-2 text-lg font-bold">
                <span>Checkout</span>
                <span className=" tracking-wide">
                  (€ {totalPrice.toFixed(2)})
                </span>
              </p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
