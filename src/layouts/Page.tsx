import { ReactElement } from "react";

const Page = ({ children }: { children: ReactElement[] }) => {
  return <div className="w-full">{children}</div>;
};

export { Page };
