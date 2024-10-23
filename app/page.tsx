"use client"
import { graphQLClient } from "@/clients/api";
import { LoginWithGoogleQuery } from "@/graphql/query/user";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useCallback } from "react";

export default function Home() {
  const handleLoginQithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential

    const { loginWithGoogle } = await graphQLClient.request(LoginWithGoogleQuery, { token: googleToken || "" })

    console.log("you log in", loginWithGoogle);
    
    alert("you log in")
  }, [])

  return (
    <>
      <GoogleLogin onSuccess={handleLoginQithGoogle} /> 
    </>
  );
}
