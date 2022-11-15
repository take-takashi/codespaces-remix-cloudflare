export async function loader() {
  return new Response(JSON.stringify({ name: "Jane Doe" }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
