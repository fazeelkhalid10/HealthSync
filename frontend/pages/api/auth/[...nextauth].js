import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Your username" },
        password: { label: "Password", type: "password", placeholder: "Your password" },
      },
      async authorize(credentials) {
        console.log('Username:', credentials.username);
        console.log('Password:', credentials.password);
      
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
      
        // Log the status and response for debugging
        console.log('Response Status:', response.status);
        const userArray = await response.json(); // Store the response as userArray
        console.log('API Response:', userArray);
      
        // Check if the response is OK
        if (!response.ok) {
            console.error('Error during authentication:', response.statusText);
            return null; // Return null on error
        }
        
        // Check if a user was returned and get the first user from the array
        if (userArray && userArray.length > 0) {
            const user = userArray[0]; // Get the first user object from the array
            return {
              id: user.UserID,
              username: user.Username,
              email: user.Email,
              isActive: user.IsActive,
              role: user.Rolee,
            };
        }

        // If no valid user is found or password doesn't match
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login', // Custom sign-in page
  },
  session: {
    jwt: true, // Store session as JWT
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
  },
});
