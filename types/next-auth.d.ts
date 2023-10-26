import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
      // "roles": [
      //     "USER"
      // ],
      roles: string[];
      access_token: string;
      token_type: string;
      expires_in: number;
    };
  }
}
