import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-full pt-16 min-h-screen">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
