import { AiOutlineClose } from "react-icons/ai";
import { BsBag, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface Props {}

const Account = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div className="dark:text-slate-200 text-gray-700 px-4 space-y-6 overflow-y-hidden">
      <div className="flex flex-row justify-between mt-4 items-center ">
        <h1 className="font-bold  text-xl">My account</h1>
        <AiOutlineClose
          onClick={() => navigate("/")}
          className="text-2xl cursor-pointer"
        />
      </div>
      <div className="flex flex-row gap-4 justify-evenly items-center w-full text-lg font-semibold">
        <button
          onClick={() => navigate("/account/auth")}
          className="dark:bg-slate-500 bg-slate-100 auth--button hover:opacity-90"
        >
          Sign in
        </button>
        <button
          onClick={() => navigate("/account/auth?register=true")}
          className="bg-orange-500 auth--button text-slate-100"
        >
          Create Account
        </button>
      </div>
      <div className="px-2 flex flex-col gap-5">
        <div className="cursor-pointer flex justify-start items-center gap-6">
          <BsBag className="text-2xl inline" />
          <span className="dark:text-slate-200 text-gray-500">Orders</span>
        </div>
        <div className="cursor-pointer flex justify-start items-center gap-6">
          <BsHeart className="text-2xl inline" />
          <span className="dark:text-slate-200 text-gray-500">Favorites</span>
        </div>
      </div>
    </div>
  );
};

export default Account;