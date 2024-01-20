import { ReactNode } from "react";
import Header from "./dashboard/(components)/header";
import Sidebar from "./dashboard/(components)/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div className="w-full flex  min-h-screen">
          <div className='hidden lg:block lg:min-w-[20%]'>
          <Sidebar />
          </div>
          <div className="w-full flex flex-col">
            <Header/>
            <main className="w-full h-full bg-white">{children}</main>
          </div>
        </div>
  );
}
