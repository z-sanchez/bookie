import { ReactNode } from "react";

const Page = ({ children }: { children: ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export { Page };
