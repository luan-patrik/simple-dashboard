import prisma from "@/lib/db";
import { sendVerificationRequest } from "@/utils/send-verification-request";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import EmailProvider from "next-auth/providers/email";

export const config = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: `Luan Patrik <${process.env.EMAIL_FROM}>`,
      secret: process.env.EMAIL_SECRET,
      sendVerificationRequest,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.email = token.email;
      return session;
    },
  },

  pages: {
    signIn: "/",
    error: "/",
    signOut: "/",
    verifyRequest: "/",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_SECRET,
} satisfies NextAuthOptions;
