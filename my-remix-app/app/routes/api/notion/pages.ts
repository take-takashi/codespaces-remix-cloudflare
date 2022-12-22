import type { LoaderArgs } from "@remix-run/cloudflare";
import { Client as NotionClient } from "@notionhq/client";

export async function loader({ context }: LoaderArgs) {
  const notion = new NotionClient({
    auth: context.NOTION_API_API_TEST_TOKEN as string,
  });
  const databaseId: string = context.NOTION_API_API_TEST_DB as string;

  const pages: string[] = await getPageIdFromDatabase(notion, databaseId);

  // すべてのページから画像URLを取得し配列に格納する
  let images: string[] = [];
  await Promise.all(
    pages.map(async (page: string) => {
      // 取得した画像URLのリストを配列に格納
      const urls = await getImagesFromPage(notion, page);
      images = images.concat(urls);
    })
  );

  return new Response(JSON.stringify(images), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

/**
 *
 * @param notion NotionClinet
 * @param databaseId データベースのID
 * @returns 指定データベース内のページIDのリスト
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

/**
 *
 * @param notion NotionClient
 * @param pageId ページID
 * @returns 画像URL文字列が格納された配列
 */
async function getImagesFromPage(
  notion: NotionClient,
  pageId: string
): Promise<string[]> {
  // ページIDからブロックリストを取得する
  const blocks = await notion.blocks.children.list({
    block_id: pageId,
  });

  // ブロックリスト内の画像URLをすべて配列に格納
  const urlList: string[] = [];

  await Promise.all(
    blocks.results.map(async (result: any) => {
      // blockオブジェクト内にimageプロパティがあれば画像のURLを取得
      if ("image" in result) {
        const image = result.image.file.url;
        urlList.push(image);
      }
    })
  );

  return urlList;
}
