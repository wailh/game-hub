import React from "react";
import logo from "../assets/logo-search.webp";
import { HStack, Image, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
}

export default Navbar;
