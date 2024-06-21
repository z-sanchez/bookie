import { useCartStoreSelectors } from "../state/cart-store";
import { BookResponse } from "../types/Book";
import { Basket } from "@phosphor-icons/react";

const BookItem = ({ bookData }: { bookData: BookResponse }) => {
  const addBookToCart = useCartStoreSelectors.use.addBookToCart();

  return (
    <div className="w-full mb-2 mt-4 py-5 px-3 flex flex-col sm:flex-row items-center sm:outline outline-1 rounded-md outline-slate-200 sm:hover:shadow-xl sm:hover:shadow-shadow ease-in-out transition-all cursor-pointer">
      <img
        src={bookData.imageURL}
        className="rounded-md sm:max-w-36 max-w-64 hover:shadow-2xl hover:shadow-shadow sm:hover:shadow-none  ease-in-out transition-all"
      />
      <div className="mx-4 my-3 sm:flex sm:text-left w-full flex-col text-center">
        <p className="text-xl">{bookData.title}</p>
        <div className="flex justify-center md:mb-4 sm:self-start">
          {bookData.getGenres.map((genre) => (
            <p className="mr-2 text-primary text-sm" key={genre.genreName}>
              {genre.genreName}
            </p>
          ))}
        </div>
        <span className="hidden sm:block">
          <p>{bookData.description}</p>
          <div className="flex justify-between md:flex-row md:items-end sm:flex-col sm:items-start items-end mt-auto">
            <div className="md:mt-12 md:mb-0 md:flex-col md:items-start sm:flex sm:w-full sm:justify-between sm:items-center sm:my-4">
              <p className="font-bold text-xl">${bookData.price} USD</p>
              <p className="text-xs">Author: {bookData.author}</p>
            </div>
            <button
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { quantityAvailable, ...data } = bookData;

                addBookToCart({ ...data, quantity: 1 });
              }}
              className="flex items-center justify-center text-primary bg-primary md:w-5/12 sm:w-full w-3/12 py-2 text-center rounded-md text-white hover:bg-white hover:outline-primary hover:outline-1 hover:outline hover:text-primary transition-all ease-in-out"
            >
              <Basket size={20} className="mr-2" />
              <span>Add To Cart</span>
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export { BookItem };
