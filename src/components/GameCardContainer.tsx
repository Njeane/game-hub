import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Propos {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Propos) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
