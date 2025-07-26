import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

function ColorModeSwitch() {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root onChange={toggleColorMode}>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
}

export default ColorModeSwitch;
