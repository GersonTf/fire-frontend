import { signOut } from "next-auth/react";

export const authenticatedFetch = async (
  url: string,
  options: RequestInit
): Promise<Response> => {
  const response = await fetch(url, options);

  if (response.status === 401) {
    // Perform sign out if 401 is received
    signOut();
  }

  return response;
};
