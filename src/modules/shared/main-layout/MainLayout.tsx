import { ReactNode } from "react";
import { Header } from "./components";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="px-[128px]">
      <Header />
      <div>{children}</div>
    </main>
  );
};
