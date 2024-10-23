import { graphql } from "@/gql";

export const LoginWithGoogleQuery = graphql(`#graphql
    query Query($token: String!) {
      loginWithGoogle(token: $token)
    }
`) 