import { Book } from "@phosphor-icons/react";
import { Cart } from "./Cart";

const Header = () => {
  return (
    <div className="flex w-10/12 sm:w-4/5 max-w-screen-lg my-8 items-center justify-between">
      <button className="flex px-4 rounded-md transition-all fill-logo-on-hover">
        <Book size={32} className="transition-all" />
        <h1 className="font-display text-2xl font-bold transition-all">
          Bookie
        </h1>
      </button>
      <Cart />
    </div>
  );
};

export { Header };
