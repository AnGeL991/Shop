import { FC, ReactNode } from "react";

interface IContainer {
  children: ReactNode;
  fixed?:boolean;
}

export const Container: FC<IContainer> = ({ children,fixed }) => {
  return <div className={`page ${fixed && "page--fixed"}`}>{children}</div>;
};
