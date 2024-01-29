import { Box, CardProps, forwardRef } from "@chakra-ui/react";

const Card = forwardRef<CardProps, "div">(({ ...props }, ref) => {
  return <Box ref={ref} w={"100%"} {...props} bg={"primary.500"} rounded={6} />;
});

Card.displayName = "Card";

export { Card };
