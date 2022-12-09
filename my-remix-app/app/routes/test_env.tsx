import type { LoaderArgs } from "@remix-run/cloudflare";

/*
export const loader = async ({ context }: LoaderArgs) => {
  return new Response(JSON.stringify({ test: context.TEST_ENV }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
*/

export async function loader({ context }: LoaderArgs) {
  return new Response(
    JSON.stringify({
      message: "hello world",
      testa: context.TEST_ENV,
      envv: context.NOTION_API_API_TEST_TOKEN,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
