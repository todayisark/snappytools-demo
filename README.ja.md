🌐 [English](README.md)

# フロントエンド作品集：割り勘計算機 & LED テキストスクロール

このプロジェクトは、React + TypeScript + Vite + MUI を使用して構築されたシンプルなフロントエンドアプリケーションです。2 つの主な機能を備えています。

## Demo

[SnappyKit Demo](https://todayisark.github.io/snappykit-demo/)

## 🚀 主な機能

### 1. 割り勘計算機

- 複数人での割り勘計算を簡単に行えるツール。
- 参加者、支払い金額、為替レートを選択可能。
- 割り勘結果をリアルタイムで表示。

### 2. LED テキストスクロール（ランニングテキスト）

- スマートフォン向けの LED スタイルのスクロールテキスト機能。
- テキスト、フォント、色、スクロール速度などをカスタマイズ可能。
- 横画面・縦画面の両方に対応。

## 🛠 技術スタック

- **フレームワーク**: [React](https://reactjs.org/)
- **言語**: TypeScript
- **ビルドツール**: [Vite](https://vitejs.dev/)
- **UI ライブラリ**: [Material UI (MUI)](https://mui.com/)

## 📦 インストールと実行方法

```
git clone https://github.com/todayisark/snappykit-demo.git
npm install
npm run dev
```

## 📁 プロジェクト構成（概要）

```
snappykit-frontend/
├── public/            # 静的ファイル（favicon など）
├── src/               # アプリのソースコード
│   ├── components/    # 共通コンポーネント（ヘッダー、フッターなど）
│   ├── pages/         # 各ツールの画面
│   │   ├── LEDBoard/      # LEDスクロール機能
│   │   └── SplitBill/     # 章の分割・費用計算ツール
│   ├── routes.tsx     # ルーティング設定
│   └── theme.ts       # MUI テーマ設定
├── package.json       # 依存関係とスクリプト
└── vite.config.ts     # Vite 設定ファイル
```

## 🧩 今後の予定

- LED テキストのフォント追加
- 割り勘結果のエクスポート機能（CSV / 画像）
- LED 設定と割り勘結果を保存する機能
  - 現在はローカルストレージに対応
  - 今後はバックエンドと連携した保存・読み込みを実装予定
- ユーザー登録・ログイン機能の追加

## 📄 ライセンス

MIT ライセンスのもとで公開されています。
