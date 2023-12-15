// app/api/auth/[...nextauth]/authOptions.ts
//import type { Adapter } from "next-auth/adapters";
//import { DynamoDBAdapter } from "@auth/dynamodb-adapter";
//import {NextAuthOptions} from "next-auth"

export const adapter: Adapter = DynamoDBAdapter(client);

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    EmailProvider({ // not this
      from: process.env.EMAIL_FROM as string,
      sendVerificationRequest,
    }),
    GoogleProvider({ // not this
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({ // this!
      id: "googleonetap", // We will use this id later to specify for what Provider we want to trigger the signIn method
      name: "google-one-tap",

      // This means that the authentication will be done through a single credential called 'credential'
      credentials: {
        credential: { type: "text" },
      },
      // This function will be called upon signIn
      authorize,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token }) {
      ...
    },
    async jwt({ token, user, account, profile }) {
      ...
    },
  },
  adapter,
};