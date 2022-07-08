import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://movie-app-taehee.herokuapp.com/"
      : process.env.NODE_ENV === "development"
      ? "http://localhost:4000/"
      : "",
  cache: new InMemoryCache(),
});

export default client;
