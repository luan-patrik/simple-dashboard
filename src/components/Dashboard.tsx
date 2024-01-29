import { Box, HStack, Heading, VStack } from "@chakra-ui/react";
import BarCardDashboard from "./BarCardDashboard";
import ComposedCardDashboard from "./ComposedCardDashboard";
import LineCardDashboard from "./LineCardDashboard";

export const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <Box px={10} py={4} flex={1} overflowX={"hidden"} overflowY={"auto"}>
      <Heading as={"h1"} textColor={"foreground"} mb={10}>
        Dashboard
      </Heading>
      <Box display={"flex"} pos={"relative"} flexDir={"column"} gap={10}>
        <HStack flexWrap={{ base: "wrap", lg: "nowrap" }}>
          <BarCardDashboard data={data} />
          <LineCardDashboard data={data} />
        </HStack>
        <VStack>
          <ComposedCardDashboard data={data} />
        </VStack>
      </Box>
    </Box>
  );
};
