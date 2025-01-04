import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  secret: 'G1rvKU+fXoXc9j8Kwzz1OBNA3j4UwR3a5v4KHlnUMAo=',
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Your username" },
        password: { label: "Password", type: "password", placeholder: "Your password" },
      },
      async authorize(credentials) {
        try {
          // Send API request to fetch user data
          const response = await fetch('http://127.0.0.1:8000/getUser/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          });

          const userArray = await response.json(); // Parse response JSON
          console.log('API Response:', userArray);

          // Validate response and extract user
          if (response.ok && userArray.length > 0) {
            const user = userArray[0]; // Use the first user from the array
            return {
              id: user.id, // Use UID as the user ID
              username: user.Username,
              role: user.Rolee,
            };
          } else {
            console.error('No user found or authentication failed');
            return null;
          }
        } catch (error) {
          console.error('Error during authentication:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login', // Custom sign-in page
  },
  session: {
    jwt: true, // Use JSON Web Tokens for sessions
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Assign UID to the token
        token.username = user.username; // Assign Username to the token
        token.role = user.role; // Assign Rolee to the token
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id, // Include UID in the session
        username: token.username, // Include Username in the session
        role: token.role, // Include Rolee in the session
      };
      return session;
    },
  },
});
