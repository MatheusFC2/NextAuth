import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "NextAuthCredentials",
      credentials: {},
      async authorize(credentials) {
        console.log(credentials);
        return {
          name: "Matheus Freitas ",
          email: "matheusfcampos1605@gmail.com",
          image: "https://github.com/MatheusFC2.png"
        }
      },
    }),
  ],
  secret: process.env.SECRET 
})