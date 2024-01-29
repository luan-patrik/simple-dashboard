import { Link, LinkProps, forwardRef } from "@chakra-ui/react";
import NextLink from "next/link";

const SidebarButton = forwardRef<LinkProps, "a">(({ ...props }, ref) => {
  return (
    <Link
      as={NextLink}
      ref={ref}
      {...props}
      display={"inline-flex"}
      variant="ghost"
      gap={6}
      size="xs"
      color={"#ffffff"}
      padding={1}
      h="auto"
      rounded={6}
      _hover={{
        bg: "primary.400",
      }}
    />
  );
});

SidebarButton.displayName = "SidebarButton";

export { SidebarButton };
