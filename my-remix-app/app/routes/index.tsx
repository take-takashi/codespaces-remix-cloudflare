import ImageList from "~/components/ImageList";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json({ name: "hello" });
}

export default function Index() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <h2>Hello</h2>
      {<ImageList />}
    </div>
  );
}
