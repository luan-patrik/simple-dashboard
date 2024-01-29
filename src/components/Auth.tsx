import { Button, Input } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export const Auth = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    signIn("email", { email, callbackUrl });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="email"
        name="email"
        autoComplete="email"
        type="email"
        required
      />
      <Button type="submit">Enviar</Button>
    </form>
  );
};

Auth.auth = false;
