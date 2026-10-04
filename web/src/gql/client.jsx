import { cookies } from "next/headers";
import { cacheExchange, createClient, fetchExchange } from "urql/core";
import { registerUrql } from "@urql/next/rsc";

const GRAPHQL_ENDPOINT =
  process.env.GRAPHQL_ENDPOINT || "https://clubs.iiit.ac.in/graphql";

const makeClient = () => {
  return createClient({
    url: GRAPHQL_ENDPOINT,
    preferGetMethod: false,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: async () => {
      const cookieStore = await cookies();
      return {
        cache: "no-store",
        credentials: "include",
        headers: {
          cookie: cookieStore.toString(),
        },
      };
    },
  });
};

export const { getClient } = registerUrql(makeClient);
