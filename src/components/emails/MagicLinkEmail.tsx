import { theme } from "@/styles/globals";
import { Container, Heading, Link } from "@chakra-ui/react";
import {
  Body,
  Heading as EmailHeading,
  Link as EmailLink,
  Head,
  Html,
} from "@react-email/components";
import { SendVerificationRequestParams } from "next-auth/providers/index";

interface MagicLinkProps {
  url: SendVerificationRequestParams["url"];
  host: string;
}

export const MagicLinkEmail = ({ url, host }: MagicLinkProps) => {
  return (
    <Html lang="pt-BR">
      <Head />
      <Body>
        <Container
          maxW={"20rem"}
          bg={theme.colors.background}
          textColor={theme.colors.foreground}
        >
          <Heading textAlign={"center"} as={EmailHeading}>
            Aqui está seu link de acesso de {host}
          </Heading>
          <Link
            textAlign={"center"}
            fontWeight={"700"}
            as={EmailLink}
            href={url}
            target="_blank"
          >
            Clique aqui para acessar o site.
          </Link>
        </Container>
      </Body>
    </Html>
  );
};
