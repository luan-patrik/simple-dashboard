import { Flex, Icon, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { motion, useCycle } from "framer-motion";
import { ChevronLeft, ChevronRight, LayoutGridIcon } from "lucide-react";
import { SidebarButton } from "./SidebarButton";

export const Sidebar = () => {
  const [open, cycleOpen] = useCycle<boolean>(false, true);

  const handleToggle = () => {
    cycleOpen();
  };

  return (
    <VStack
      as={motion.aside}
      initial={{ width: "4rem" }}
      animate={{
        width: open ? "14rem" : "4rem",
        transition: { ease: "backInOut", duration: 0.3 },
      }}
      exit={{ width: "4rem" }}
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
        <SidebarButton
          display={"inline-flex"}
          as="button"
          onClick={handleToggle}
          bg={"primary.500"}
        >
          {open ? (
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
            {open ? <Text>Dashboard</Text> : null}
          </SidebarButton>
        </ListItem>
      </List>
    </VStack>
  );
};
