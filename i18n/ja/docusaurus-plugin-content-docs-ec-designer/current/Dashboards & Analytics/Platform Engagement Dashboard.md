---
title: Platform Engagement Dashboard
---


## **EzyCreate ダッシュボード標準操作手順（SOP）**





### **1. 商品注文（Product Orders）**

**説明：**
 日別に出荷された注文数を表示。発送日ごとの注文トラッキングに使用。

**軸：**

* **X軸：** shipped_date（注文の発送日）


* **Y軸：** Orders（出荷された注文数）



**用語集：**

* **Product Blank：** 定義済みの商品リスト


* **shipped_date：** 顧客への発送日


* **Product Orders：** 顧客による正式な購入リクエスト


* **Product Sale：** 販売された商品の数量



**フィルター：**

* Store（例：India Store、SG Store）


* Plan（Pro、Regularなどの顧客セグメント）


* Category（Photobook、Prints などの商品カテゴリ）


* Product Blank（商品名）


* Data Source（ストアのDrupalバックエンドデータベース）



**商品売上計算式：**

* **純売上（Net Sale）** ＝ 商品価格（MRP） × 数量 − 割引額


* **総売上（Gross Sale）** ＝ 商品価格（MRP） × 数量 ＋ 割引額



※金額は**税・送料を除外**。通貨：Rs.（インド・シンガポール）





### **2. デザインパフォーマンス（Design Performance）**

**説明：**
 EzyDesigner 経由で作成・注文された件数を追跡（S2P商品は含まず）

**軸：**

* **X軸：** project_date（デザイン作成日）


* **Y軸：** Orders（注文数）



**フィルター：**

* Store


* Category（Photobook、Printsなど）


* Product Blank


* Template（使用されたテーマ）


* Occasion（誕生日、結婚式、ベビーシャワーなど）



**注意：**
 売上 = MRP × 数量（割引、税、送料を除外）
 通貨：Rs.





### **3. 商品コンバージョン（Product Conversion）**

**説明：**
 EzyDesigner で作成されたプロジェクトのコンバージョン率を表示（EzyDesigner商品のみ）

**軸：**

* **X軸：** project_date


* **Y軸：** Projects（作成されたプロジェクト数）







### **4. 新規顧客売上（New Customer Sales）**

**説明：**
 登録後初めて注文を行った顧客（直近2ヶ月間）を追跡

**軸：**

* **X軸：** registration_date（登録日）


* **Y軸：** 少なくとも1回注文した顧客数



**関連ダッシュボード：**

* Acquisition Rate（獲得率）


* 登録済だが未注文の顧客（Customers Registered but not ordered）







### **5. 初回購入売上（First Purchase Sales）**

**説明：**
 顧客の初回注文による売上（直近2ヶ月間）

**軸：**

* **X軸：** first_order_date


* **Y軸：** 初回注文からの売上







### **6. 平均初回購入金額（Average First Purchase Sale）**

**説明：**
 顧客の初回注文における平均購入額（直近2ヶ月間）

**軸：**

* **X軸：** first_order_date


* **Y軸：** 平均売上（通貨：Rs.）







### **7. リピーター顧客売上（Repeat Customer Sales）**

**説明：**
 2回以上注文をした顧客数とその売上を表示

**軸：**

* **X軸：** shipped_date


* **Y軸：** 注文数



**含まれるデータ：**

* リピーターによる注文数


* リピーターの平均売上







### **8. 顧客離脱率（Customer Churn Rate）**

**説明：**
 過去180日間でストアに訪問していない顧客数を表示

**軸：**

* **X軸：** last_visit_date


* **Y軸：** 非訪問顧客数



**関連指標：**

* Store Churn


* Ordering Customers - Churn Rate







### **9. プラットフォームエンゲージメント（Platform Engagement）**

**説明：**
 EzyDesigner におけるシナリオ完了率（コンバージョン率）を追跡

**軸：**

* **X軸：** event_date


* **Y軸：** コンバージョン率 =（#End Events ÷ #Start Events）× 100



**用語：**

* **AppName：** アプリ名（例：EzyDesigner、EzyAdmin）


* **Module Name：** アプリ内のモジュール名


* **Scenario：** 定義された操作（例：商品作成、カート追加など）


* **Sessions：** 1回のユーザー操作セッション



1つのセッション内で開始・終了イベントが発生した場合、シナリオ完了とみなす
 **最終式：** コンバージョン率 =（完了セッション数 ÷ 総セッション数）× 100





### **10. Ezy CRMキャンペーン（開封・クリック率）**

**URL：** Campaign Dashboard（キャンペーンダッシュボード）

**説明：**
 Eメールキャンペーンの効果測定（開封・バウンス・クリックなど）

**軸：**

* **X軸：** event_date（イベント発生日）


* **Y軸：** メール指標（開封数、バウンス数、クリック数など）
