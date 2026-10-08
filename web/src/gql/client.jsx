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
    fetch: async (input, init) => {
      const cookieStore = await cookies();
      return fetch(input, {
        ...init,
        cache: "no-store",
        credentials: "include",
        headers: {
          ...init?.headers,
          cookie: cookieStore.toString(),
        },
      });
    },
  });
};

export const { getClient } = registerUrql(makeClient);
