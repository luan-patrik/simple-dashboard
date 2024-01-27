import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import BarCardDashboard from "./BarCardDashboard";
import LineCardDashboard from "./LineCardDashboard";

export const Dashboard = () => {
  return (
    <Box px={10} py={4} flex={1} overflowX={"hidden"} overflowY={"auto"}>
      <Heading as={"h1"} textColor={"foreground"} mb={10}>
        Dashboard
      </Heading>
      <Box display={"flex"} pos={"relative"} flexDir={"column"} gap={10}>
        <HStack>
          <BarCardDashboard />
        </HStack>
        <VStack>
          <LineCardDashboard />
        </VStack>
      </Box>
    </Box>
  );
};
