import { Outlet } from "react-router-dom";
import Header from "./Header";
import type { ReactNode } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-6xl flex flex-col gap-y-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
