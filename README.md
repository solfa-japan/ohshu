# OhShu (王・主) 公式紹介ページ (GitHub Pages)

iOSアプリ「OhShu (王・主)」の公式ランディングページ（LP）リポジトリです。  
HTML5 / CSS3 (Vanilla CSS) / JavaScript (Vanilla JS) で構築された完全な静的Webサイトであり、外部ビルドツールなしで **GitHub Pages** ですぐに世界中へ公開できます。

---

## 🌟 サイトの主な特徴
- **和モダン × プレミアム・ロイヤルデザイン**: 聖書と王冠の世界観を表現した、ダークインディゴとゴールドの高級感あるグラスモルフィズムUI。
- **ブラウザで即座に遊べる「Web体験版」**: 実際に4×4や6×6の漢字グリッドが表示され、クリックして遊べるインタラクティブパズルエンジン搭載。
- **Web Audio API による美しい音響効果**: 外部音声ファイル不要で、軽快で心地よい和風チャイム音・タップ音をリアルタイム合成。
- **Canvas パーティクル & スターダスト**: 正解時の星屑花火演出、背景の静かな浮遊パーティクル。
- **50篇の聖書みことばアーカイブ**: リアルタイム検索機能 & 「今日のみことば おみくじ」モーダル。
- **完全レスポンシブ**: スマートフォン、タブレット、PCのすべての画面サイズに最適化。

---

## 🚀 GitHub Pages への公開手順 (数ステップで完了)

### ステップ 1: GitHubで新しいリポジトリを作成
1. ブラウザで [GitHub](https://github.com/new) にアクセスします。
2. リポジトリ名を入力します（例: `ohshu` または `ohshu-web`）。
3. **Public** を選択し、**Create repository** をクリックします。

### ステップ 2: ローカルからプッシュ
ターミナルで本ディレクトリ（`OhShu-Pages`）に移動し、以下のコマンドを実行します：

```bash
cd /Users/eiji/.gemini/antigravity-ide/OhShu-Pages

# gitの初期化
git init
git add .
git commit -m "Initial commit: OhShu official landing page"
git branch -M main

# リモートリポジトリの登録 (YOUR_USER_NAME と REPO_NAME をご自身のリポジトリに変更)
git remote add origin https://github.com/YOUR_USER_NAME/ohshu.git

# プッシュ
git push -u origin main
```

### ステップ 3: GitHub Pages の有効化
1. 作成した GitHub リポジトリのページを開きます。
2. 上部メニューの **Settings** (設定) をクリック。
3. 左サイドバーの **Pages** をクリック。
4. **Build and deployment** の **Source** で `Deploy from a branch` を選択。
5. **Branch** で `main`、フォルダは `/ (root)` を選択し、**Save** をクリック。
6. 約1〜2分後、`https://YOUR_USER_NAME.github.io/ohshu/` で世界中に公開されます！

---

## 📁 ディレクトリ構成
```
OhShu-Pages/
├── index.html          # メインページ (SEO/OGP最適化済み)
├── style.css           # デザインシステム・アニメーション・レスポンシブ
├── app.js              # ゲームエンジン・Web Audio・パーティクル・ギャラリー
├── .nojekyll           # GitHub PagesのJekyll無効化設定
├── README.md           # 本ドキュメント
└── assets/
    ├── icon.png        # アプリアイコン (王冠)
    ├── hero-bg.jpg     # キービジュアル画像
    ├── favicon.svg     # ファビコン (SVG)
    └── questions.json  # 50問のみことば・漢字データ (JSON)
```

---

## 📱 アプリ情報
- **アプリ名**: OhShu (王・主)
- **配信元**: Sound of Love Apps
- **対応OS**: iOS 16.0 以降 (iPhone / iPad)
- **公式サイト**: [Sound of Love](http://sound-of-love.com)
