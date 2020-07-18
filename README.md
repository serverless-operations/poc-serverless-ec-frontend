# poc-serverless-ec-frontend
Nuxt + Apollo + Auth0 + AppSync(OIDC) で構成されるサーバーレスな EC サイトのサンプルです。

## 実行環境
- Node.js v12.13.0 以上
- Yarn 1.22.0 以上

## 依存関係のセットアップ
```
yarn setup
```

## 環境変数の設定
.env ファイルを作成して以下の環境変数をセットします
```
APPSYNC_GRAPHQL_ENDPOINT=
APPSYNC_REGION=
AUTH0_DOMAIN=
AUTH0_CLIENT_ID=
```

## 動作確認
1. `https://localhost:3000/` 「サインイン」ボタンを押す
（Auth0画面遷移 → callback で戻る）
2. `https://localhost:3000/main` 「購入する」ボタンを押す
