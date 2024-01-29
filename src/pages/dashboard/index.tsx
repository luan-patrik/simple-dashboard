import { Dashboard } from "@/components/Dashboard";
import { Sidebar } from "@/components/Header/Sidebar";
import { Flex } from "@chakra-ui/react";

export default function Page() {
  return (
    <main>
      <Flex position={"relative"} h={"100svh"} overflow={"hidden"}>
        <Sidebar />
        <Dashboard />
      </Flex>
    </main>
  );
}
