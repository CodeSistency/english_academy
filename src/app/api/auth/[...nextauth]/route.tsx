
import NextAuth, { DefaultSession, NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { jwtDecode } from 'jwt-decode'; // Use named import

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      token: string;
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    email: string;
    token: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch('https://english-academy-backend.onrender.com/user/login', {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        });

        const data = await res.json();

        if (res.ok && data.token) {
          const decodedToken = jwtDecode<{ id: string; email: string }>(data.token);
          console.log(decodedToken);

          const user = {
            id: decodedToken.id, // Adjust according to your token payload
            email: decodedToken.email, // Adjust according to your token payload
            token: data.token,
          };

          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60, // 1 hour
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
          token: user.token,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as {
          id: string;
          email: string;
          token: string;
        } & DefaultSession['user'];
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };