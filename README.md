# Prisma / GraphQL

## Setup

依存関係のインストール後、

```
npm run codegen
```

を実行して/src/types/generated/graphql.ts を生成する。
git で管理してもいいけど、個人的には肥大化しそうだしそれぞれの環境で生成するでもいいかなとか思ってるけどどうなんだろ

## Introduction

/prisma schema.prisma DB のモデル定義
/src/resolvers/scalar スカラー型の定義

## TODO

https://github.com/google/google-api-javascript-client
で OAuth2 を使う
って思ったけど ↓ のほうが良さそう
https://github.com/googleapis/google-auth-library-nodejs

https://cloud.google.com/nodejs/docs/reference/google-auth-library/latest

### Note

https://studio.apollographql.com/sandbox/explorer

/prisma/schema.prisma で Table 定義などをする

/src/resolvers リゾルバ定義

/src/types/index.ts ルートリゾルバの定義

/schema.graphql で GraphQL Schema を定義する

DB が prisma, App が graphql
