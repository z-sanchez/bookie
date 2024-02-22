import { ReactNode } from "react";
import { Header } from "../components/Header";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full justify-center items-center flex-col h-full">
      <Header />
      <div className="w-1/4">
        <p>Top</p>
        {children}
        <p>Bottom</p>
      </div>
    </div>
  );
};

export { Container };
