import { Box, Button, FormLabel, Input, VStack } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export const Auth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      await signIn("email", { email, callbackUrl });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack justify={"center"} h={"100svh"}>
      <Box w={"24rem"}>
        <form onSubmit={handleSubmit}>
          <FormLabel>Email</FormLabel>
          <VStack>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              type="email"
              placeholder={"luanpatrik@example.com"}
              required
            />
            <Button
              w={"100%"}
              isLoading={isLoading}
              loadingText="Enviando"
              type="submit"
            >
              Enviar Link
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};
