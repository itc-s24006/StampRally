# 2025 ガイカレまつり スタンプラリー形式のクイズアプリ

## 概要

本リポジトリは、**2025 ガイカレまつり**の企画として開発したスタンプラリー形式のアプリケーションです。  
  
参加者はスマートフォンからウェブサイトにアクセスし、会場の各階に設置されたパスワードを入力し  
クイズに答えることで、イベントを楽しむことができます。  
  
**アプリケーションURL:**  
※ supabaseの無料枠を利用しているため、現在は動作しない可能性があります。  
[https://stamp-rally-nu.vercel.app/](https://stamp-rally-nu.vercel.app/)

---

## 使用技術

| カテゴリ    | 技術                      |
|:--------|:------------------------|
| フレームワーク | Next.js (App Router)    |
| 言語      | TypeScript , JavaScript |
| スタイリング  | CSS , Bootstrap         |
| データベース  | Supabase(postgreSQL)    |
| ORM     | Prisma                  |
| パッケージ管理 | pnpm                    |
| デプロイ    | Vercel                  |

---

## 主なディレクトリ構成

| ディレクトリ/ファイル             | 説明                                              |
|:------------------------|:------------------------------------------------|
| `app/`                  | ルーティングの根幹                                       |
| `_components/`          | 共通UI部品                                          |
| `api/auth/`             | 認証（ログイン、セッション管理）                                |
| `api/questionRegistry/` | 問題登録                                            |
| `api/questions/`        | 問題取得・パスワードチェック                                  |
| `api/record/`           | スタンプ登録                                          |
| `api/user/`             | ユーザー情報登録                                        |
| `questions/[id]/`       | 個別のクイズページ・パスワード要求ページ                            |
| `questions/correct/`    | 正解ページ                                           |
| `questions/incorrect/`  | 不正解ページ                                          |
| `lib/`                  | 認証やデータベース関連のユーティリティ                             |
| `prisma/`               | Prismaスキーマファイル (`schema.prisma`)およびマイグレーションファイル |
| `types/next-auth.d.ts`  | NextAuth.jsの型定義拡張                               |


---

## 開発環境のセットアップ

ローカル環境で開発を開始するための手順です。(自動生成されたREADMEの内容をそのまま記載しています。)

## Getting Started

First, run the development server:

```bash
git clone [https://github.com/itc-s24006/StampRally.git](https://github.com/itc-s24006/StampRally.git)
cd StampRally

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically
optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for
more details.
