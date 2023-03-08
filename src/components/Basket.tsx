import { useNavigate, useLocation, Link } from "react-router-dom";
import { useCart } from "../context/cartStore";
import { TbPlus, TbMinus, TbPaperBag } from "react-icons/tb";

type Props = {};

// there needs to be a fixed minimum delivery amount to disable/enable checkout button
// if minimum amount isnt reached, then show an simple information message.

const Basket = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useCart((state) => state.items);
  return (
    <div
      className="w-[22rem] px-2 bg-slate-100 dark:bg-gray-700 basket dark:border-l dark:border-l-slate-200/20 border-l-gray-500/20 border-l
     "
    >
      <div
        className="h-screen w-full text-gray-800 dark:text-slate-100 space-y-3 flex flex-col 
      px-2
      "
      >
        <h2 className="text-center font-bold text-2xl my-5">Basket</h2>
        <div className="h-screen overflow-y-scroll no-scrollbar">
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <div key={idx} className="border-b space-y-4">
                <div className="relative items-center gap-2 text-base font-[500]">
                  <span className="absolute top-0 left-0">2</span>
                  <div className="flex justify-between w-full pl-5">
                    <Link
                      to="#editProduct"
                      className={`break-words
                    hover:no-underline decoration-gray-700 dark:decoration-slate-100 underline underline-offset-2 ${
                      location.pathname === "/checkout"
                        ? "no-underline pointer-events-none"
                        : ""
                    }`}
                    >
                      {idx ? idx : ""} Pizza la margherita (medium)
                    </Link>
                    {/* item and price */}
                    <span className="whitespace-nowrap font-light">€ 8,00</span>
                  </div>
                </div>
                {/* extra suplements if there are any ?? */}
                <span className="flex items-center text-xs pl-5 italic font-light">
                  Parmesan, Sans Suplement, Oeufs
                </span>
                {location?.pathname !== "/checkout" && (
                  <div className="w-full flex justify-between items-center py-2 pl-5">
                    <button className="text-base underline hover:no-underline">
                      Add note
                    </button>
                    <div className="text-2xl w-20 flex justify-between px-2">
                      <button>
                        <TbMinus />
                      </button>
                      <button>
                        <TbPlus />
                      </button>
                    </div>
                  </div>
                )}

                <div className="text-xs space-y-2">
                  <p className="text-xs tracking-wide bg-green-300/10 rounded-full pl-5 px-4 py-2 mb-4">
                    Note for this product
                  </p>
                  {location?.pathname !== "/checkout" && (
                    <div>
                      <button className="mb-4 pl-5 text-base underline hover:no-underline">
                        Edit note
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="pt-28 flex flex-col justify-center items-center text-4xl w-full px-4">
              <TbPaperBag />
              <p className="text-2xl font-bold mt-5 mb-2">Fill your Bag</p>
              <span className="text-base">Your bag is Empty</span>
            </div>
          )}
        </div>
        <div className="sticky bottom-0 pb-4 bg-slate-100 dark:bg-gray-700">
          <div className="flex flex-col space-y-3 pt-4 mb-2">
            <div className="flex flex-row justify-between">
              <span>Subtotal</span>
              <span>€ 16,00</span>
            </div>

            <div className="flex flex-row justify-between">
              <span>Delivery cost</span>
              <span>Free</span>
            </div>

            <div className="flex flex-row justify-between font-semibold">
              <span>Total</span>
              <span>€ 16,00</span>
            </div>
          </div>
          {cartItems?.length > 0 && location?.pathname !== "/checkout" && (
            <button
              onClick={() => navigate("/checkout")}
              className="bg-orange-600 rounded-full py-2
      text-xl text-slate-100 font-semibold w-full
      "
            >
              <p className="flex items-center justify-center space-x-2 text-lg font-bold">
                <span>Checkout</span>
                <span className=" tracking-wide">($ 60,00)</span>
              </p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
