import { useFetcher } from "@remix-run/react";
import type { LoaderFunction, LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";

export async function loader(args: LoaderArgs) {
  console.log("come on");
  return json({ test: "aaaaa" });
}

export default function ImageList() {
  const data = useFetcher<typeof loader>();

  return (
    <div>
      <ul>
        <li>hello</li>
      </ul>
    </div>
  );
}
