# codespaces-remix-cloudflare

Cloudflare pages に Remix をデプロイしてみる

## setup remix

```
npx create-remix@latest
? Where would you like to create your app? ./my-remix-app
? What type of app do you want to create? Just the basics
? Where do you want to deploy? Choose Remix App Server if you're unsure; it's easy to change deployment targets. Cloudflare Pages
? TypeScript or JavaScript? TypeScript
? Do you want me to run `npm install`? Yes
```

## setup remix npm

```
cd my-remix-app/
npm i @notionhq/client
```

# secret(.env)

- NOTION_API_API_TEST_AUTH
- NOTION_API_API_TEST_DB

# TODO

- NOTION_API_API_TEST_AUTH -> NOTION_API_API_TEST_TOKEN
- codespaces 作成時に.env を自動生成したい(命名更新したい)
