import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

const NavItem = ({
  width,
  NavIcon,
  link,
  titulo,
}: {
  width: string;
  NavIcon: IconType;
  link: string;
  titulo: string;
}) => {
  return (
    <Link
      href={link}
      className="flex w-full justify-center items-center gap-3 py-5 h-4 bg-blue-500 hover:bg-blue-600 duration-200"
    >
      <NavIcon />
      <p className={`${width === "w-16" ? "hidden" : ""}`}>{titulo}</p>
    </Link>
  );
};

export default NavItem;
