import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCartStore } from "../context/cartStore";
import CheckoutForm from "../components/Forms/Checkout";
type Props = {};

const CheckOut = (props: Props) => {
  const cartItems = useCartStore((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems?.length === 0) navigate("/");
    // and cartItems.total not equal or less than minimum amount
  }, []);
  return (
    <div className="h-full max-w-2xl lg:max-w-6xl w-full">
      <div className="hidden lg:inline-block m-5">
        <h1 className="text-2xl font-bold tracking-wide">CheckOut</h1>
        <span className="text-sm tracking-widest">Restraunt Name</span>
      </div>
      <CheckoutForm />
    </div>
  );
};

export default CheckOut;
