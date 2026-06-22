# Clinic Growth

## プロジェクト概要

整骨院・治療院を経営する個人事業主に対して、
Webサービスと実行支援を通じて、
集客・予約・リピート・経営改善の課題を解決する。

→ 詳細は [docs/project-charter.md](docs/project-charter.md) を参照

---

## 新しい事業の入口：Web集客導線診断

### ビジネスモデル

**Google Maps / Places API を活用した見込み客自動発見 → 無料診断レポート → 無料ヒアリング → 実行支援**

1. **見込み客の発見** - Google Mapsから、Webサイトが弱い整骨院を特定（スコアリング）
2. **簡易診断** - 各院の改善機会を自動レポート化
3. **無料ヒアリング** - 診断レポートから低ハードルで無料相談へ誘導
4. **実行支援** - テンプレ + 伴走で改善を実行
5. **Clinic Growth OS へ** - テンプレ化・自動化を進める

### 詳細ドキュメント

- [docs/lead-generation-strategy.md](docs/lead-generation-strategy.md) - Google Maps API を使った見込み客発見
- [docs/service-concept.md](docs/service-concept.md) - Web集客診断サービスのコンセプト
- [docs/market-research-approach.md](docs/market-research-approach.md) - Google Maps分析 + 院長ヒアリング
- [docs/value-proposition.md](docs/value-proposition.md) - 「機会損失の見える化」という価値
- [docs/service-roadmap.md](docs/service-roadmap.md) - Phase 1 (手動) → Phase 6 (OS化) のロードマップ

---

## 現在のステップ

**Phase 1: 手動でGoogle Mapsから対象院を探す**

構成:
- docs/: 見込み客発見戦略、市場調査アプローチ、課題仮説、サービスコンセプト、ロードマップ
- site/: LP（index.html）、ポスティングチラシ（flyer.html）

手早く試す方法:
1. `site/index.html` をブラウザで開く
2. 無料ヒアリング申し込みを確認
3. `docs/lead-generation-strategy.md` で見込み客スコアリング方法を確認
4. `docs/interview-questions.md` を使って院長ヒアリングを実施

次のアクション:
- Phase 1: ターゲット地域（東京、大阪等）で手動で 100 院以上をスコアリング
- 営業対象メールリストを作成
- 初期営業レスポンス率を測定
- Phase 2（Google Maps API 統合）への投資判断

---

## ドキュメント体系と判断基準

すべてのドキュメント、営業トーク、LP、施策は、以下の憲章に基づいて判断します。

```
docs/project-charter.md ← 最高位の判断基準
    ├─ 何を売るのか？（提供内容の指針）
    ├─ 何を売らないのか？（除外の指針）
    ├─ 成長戦略（各フェーズの役割）
    └─ 判断基準（意思決定の5つの質問）
          ↓
    docs/lead-generation-strategy.md ← Google Maps API での見込み客発見
         ↓
    docs/market-research-approach.md ← Google Maps 分析 + 院長ヒアリング
    docs/interview-questions.md ← 院長ヒアリング質問
    docs/problem-analysis.md ← 仮説整理・共通課題
    docs/service-concept.md ← サービス内容の決定
    docs/value-proposition.md ← 価値提案（機会損失の見える化）
    docs/service-roadmap.md ← Phase 1～6 のロードマップ
          ↓
    site/index.html ← LP・無料ヒアリング募集
    site/flyer.html ← ポスティングチラシ
```

### 判断基準の5つの質問（簡易版）

1. **これは院長の「実務課題」を解決するか？**
2. **院長が「すぐに実行できる」形で提供できるか？**
3. **我々が一緒に実行支援できるか？**
4. **小規模院（スタッフ1～5名）に適用できるか？**
5. **成果が測定可能か？**

→ 全て「YES」なら、その施策は憲章に沿っています。

---

## 次のアクション：無料ヒアリング獲得と事例構築（Phase 0）

### マーケティング資料の完成

- **site/index.html** - LP（信頼感重視、無料ヒアリング前面）
- **site/style.css** - 白と緑を基調とした信頼感あるデザイン
- **site/flyer.html** - A4ポスティングチラシ（ブラウザ表示用）
- **site/flyer.css** - チラシ用スタイル（印刷対応）
- **docs/flyer.md** - チラシ原稿（QRコード＋メール配置欄あり）
- **docs/google-form-questions.md** - Googleフォーム質問項目（初期情報収集）

### 活用方法

1. **LP活用**
   - `site/index.html` をWebに公開
   - QRコード（チラシから）をここへ誘導
   - Googleフォーム連携して問い合わせ回収

2. **チラシ配布**
   - `docs/flyer.md` を元に、印刷会社に入稿
   - QRコードを追加挿入
   - メールアドレス `info@clinic-growth.jp` を配置
   - ポスティングエリア：治療院密集地、新規開業予定地

3. **ヒアリング実行**
   - Googleフォームの回答を集計
   - `docs/interview-questions.md` を元に30分ヒアリング実施
   - 音声記録 + テキスト化で学習データ化

4. **初期事例構築**
   - ヒアリング結果から、有望院を1～2院選定
   - `docs/success-metrics.md` の「6ヶ月KPI」を目標に支援開始
   - 月1回の進捗面談 + 実行サポート
   - 成果が出たら、ケーススタディとして LP に掲載

### スケジュール目安

| 期間 | タスク | 成功基準 |
|------|--------|---------|
| 1～2週 | LP＋チラシ完成・公開 | 申し込み受付開始 |
| 3～4週 | ポスティング 500～1000枚 | メール＋電話問い合わせ 20～30件 |
| 2～4週 | ヒアリング 30回実施 | 有望院を 1～2院特定 |
| 1～6ヶ月 | 初期事例支援（Phase 1） | 新患 30+、リピート 40%、月商 200万円以上 |
| 6ヶ月後 | 事例発表＋テンプレ化 → Phase 2へ | 成功ストーリー発信 |

### 関連ドキュメント

- `docs/project-charter.md` - すべての判断基準
- `docs/service-roadmap.md` - 人力→テンプレ→自動化のロードマップ
- `docs/success-metrics.md` - 各段階の KPI
- `docs/customer-journey.md` - 院長の困り事ステージ別分析
- `docs/value-proposition.md` - サービスの差別化要素
- `docs/market-map.md` - 業界全体の市場構造
- `docs/competitors.md` - 競合・既存サービス分析
