import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";

export async function loader() {
  return json({ page: "images" });
}

export default function Images() {
  const data = useLoaderData();

  return <div>{data.page}</div>;
}
