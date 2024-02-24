import { ReactNode } from "react";
import { Header } from "../components/Header";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full justify-center items-center flex-col h-full">
      <Header />
      <div className="sm:w-2/4 w-3/4">{children}</div>
    </div>
  );
};

export { Container };
