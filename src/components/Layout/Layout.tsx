import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      <div className="hidden pt-16 min-h-screen sm:flex">
        <Sidebar />
        {children}
      </div>
      <div className="sm:hidden">{children}</div>
    </div>
  );
};

export default Layout;
