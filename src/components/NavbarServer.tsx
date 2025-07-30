import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
  const user = await currentUser();

  return <NavbarClient user={user} />;
};

export default Navbar;
