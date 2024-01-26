import { Flex, Icon, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, LayoutGridIcon } from "lucide-react";
import { useState } from "react";
import { SidebarButton } from "./SidebarButton";

export const Sidebar = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow((show) => !show);
  };

  return (
    <VStack
      as={motion.nav}
      animate={{ width: show ? "14rem" : "4rem" }}
      transition={"linear 50ms"}
      alignItems={"start"}
      minH="100svh"
      bg="primary.500"
      gap={10}
      p={4}
    >
      <Flex
        w={"100%"}
        pos={"relative"}
        justifyContent={"end"}
        right={-8}
        zIndex={10}
      >
        <SidebarButton as="button" onClick={handleToggle} bg={"primary.500"}>
          {show ? (
            <Icon h={"auto"} w={"auto"} as={ChevronLeft} />
          ) : (
            <Icon h={"auto"} w={"auto"} as={ChevronRight} />
          )}
        </SidebarButton>
      </Flex>
      <List w={"100%"}>
        <ListItem>
          <SidebarButton
            href="/dashboard"
            display="inline-flex"
            overflow={"hidden"}
            justifyContent={"start"}
            w={"100%"}
          >
            <Icon h={"auto"} w={"auto"} as={LayoutGridIcon} />
            {show ? <Text>Dashboard</Text> : null}
          </SidebarButton>
        </ListItem>
      </List>
    </VStack>
  );
};
