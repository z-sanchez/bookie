import { ReactNode } from "react";
import { Header } from "../components/Header";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full justify-center items-center flex-col h-full">
      <Header />
      <div className="w-10/12 sm:w-4/5 max-w-screen-lg">{children}</div>
    </div>
  );
};

export { Container };
