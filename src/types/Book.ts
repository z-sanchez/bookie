import { Genre } from "./Genre";

export type BookResponse = {
  id: string;
  author: string;
  title: string;
  description: string;
  price: number;
  quantityAvailable: number;
  imageURL: string;
  getGenres: Genre[];
};

export type Book = {
  id: string;
  author: string;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  quantity: number;
  getGenres: Genre[];
};
