import React from "react";
import Logo from "../Logo";
import Container from "../Container";
import Cart from "../Cart";

function Header() {
  return (
    <Container className="flex justify-between items-center px-4 md:px-10 lg:px-20 text-white py-4 bg-white/10 shadow-lg shadow-black/10 sticky top-0">
      <Logo />
      <Cart />
    </Container>
  );
}

export default Header;
