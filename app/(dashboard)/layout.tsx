import { ReactNode } from "react";
import Header from "./dashboard/(components)/header";
import Sidebar from "./dashboard/(components)/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div className="w-full flex  min-h-screen bg-slate-600">
            <Sidebar/>
          
          <div className="w-full flex flex-col">
            <Header/>
            <main className="w-full h-full bg-white">{children}</main>
          </div>
        </div>
  );
}
