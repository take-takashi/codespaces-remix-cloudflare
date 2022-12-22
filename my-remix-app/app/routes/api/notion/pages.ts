import type { LoaderArgs } from "@remix-run/cloudflare";
import { Client as NotionClient } from "@notionhq/client";

export async function loader({ context }: LoaderArgs) {
  const notion = new NotionClient({
    auth: context.NOTION_API_API_TEST_TOKEN as string,
  });
  const databaseId: string = context.NOTION_API_API_TEST_DB as string;

  console.log("param1", databaseId);

  const pages: string[] = await getPageIdFromDatabase(notion, databaseId);

  return new Response(JSON.stringify(pages), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

/**
 * データベースIDからDB内のページIDリストを返す。
 *
 * @param databaseId
 * @returns ページのIDリスト
 */
async function getPageIdFromDatabase(
  notion: NotionClient,
  databaseId: string
): Promise<string[]> {
  const res = await notion.databases.query({
    database_id: databaseId,
  });

  const pages: string[] = [];

  res.results.forEach((result) => {
    pages.push(result.id);
  });

  return pages;
}
