import React from "react";
import logo from "../assets/logo-search.webp";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
  return (
    <HStack justify="space-between" padding="10px">
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>NavBar</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
