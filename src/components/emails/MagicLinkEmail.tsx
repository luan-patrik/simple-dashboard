import { theme } from "@/styles/globals";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import { SendVerificationRequestParams } from "next-auth/providers/index";

interface MagicLinkProps {
  url: SendVerificationRequestParams["url"];
  host: string;
}

export const MagicLinkEmail = ({ url, host }: MagicLinkProps) => {
  return (
    <Html>
      <Head />
      <Preview>Entrar com magic link em {host}.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Entrar</Heading>
          <Link
            href={url}
            target="_blank"
            style={{ ...link, display: "block", marginBottom: 16 }}
          >
            Clique aqui para fazer login com magic link
          </Link>
          <Text style={footer}>Luan Patrik Dev.</Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: theme.colors.background,
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: theme.colors.foreground,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: theme.colors.highlight.secondary,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const footer = {
  color: theme.colors.highlight.primary,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
