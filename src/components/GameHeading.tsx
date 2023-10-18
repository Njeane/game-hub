import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";

interface Propos {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Propos) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
