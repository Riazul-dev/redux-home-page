import React from "react";
import Logo from "../Logo";
import Container from "../Container";
import Cart from "../Cart";

function Header() {
  return (
    <Container className="flex justify-between items-center px-20">
      <Logo />
      <Cart />
    </Container>
  );
}

export default Header;
