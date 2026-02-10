---
title: Mask Image Generation
---
**Photoshopを使用したマスク画像作成ガイドライン**

**はじめに：**

マスク画像は、デザインエディターにおいて非常に重要な要素です。実際の製品上でデザインがどのように見えるかを視覚化する役割を果たします。マスク画像は基本的に透明なPNG画像で、素材の質感、折り目、影、ハイライト、そして製品形状の正確な境界線などの製品詳細を含みます。

本ドキュメントでは、Adobe Photoshop（CCバージョン）を使用してTシャツ製品用のマスク画像を作成する手順を、ステップバイステップで説明します。

**前提条件**

作業を開始する前に、以下をご確認ください：

Adobe Photoshop CC（バージョン24以上を推奨）

高品質なTシャツ製品画像

Tシャツ製品全体の寸法（アートボードサイズ）

印刷／デザイン領域の寸法

**1. マスク画像（または）背景画像の生成**

**ステップ 1**

Tシャツ製品用のマスク画像を作成するには、まずマスク画像のアートボード領域（Tシャツの寸法）を把握する必要があります。



![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_1.png)

**ステップ 2**

PCまたはノートパソコンでAdobe Photoshopを起動します。

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_2.png)


**ステップ 3**

**新しいファイルを作成**

［ファイル］→［新規］をクリックして、マスク画像用の新しいドキュメントを作成します。

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_3.png)




**ステップ 4**

**ドキュメント設定を入力**

以下の値を設定します：

単位：インチ

幅・高さ：Tシャツ製品仕様に準拠

解像度：300 DPI

カラーモード：RGBカラー

［作成］をクリックします。

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_4.png)

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_5.png)


**ステップ 5**

白いアートボードとロックされた背景レイヤーが表示されます。Photoshopの右側に［レイヤー］パネルが表示されていることを確認してください。

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_6.png)




**ステップ 6**

**Tシャツ画像を配置**

Tシャツ製品画像を選択します。

アートボード上に貼り付けます。

アートボードの寸法に合わせてサイズを調整します。

**ヒント：**

Ctrl + T を使用し、サイズ変更中に Alt キーを押したままにすると、すべての方向から比率を保ったまま拡大・縮小できます。

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_7.png)

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_8.png)

**ステップ 7**

**Tシャツレイヤーをラスタライズ**

［レイヤー］パネルで以下を行います：

Tシャツレイヤーを右クリックします。
［レイヤーをラスタライズ］を選択します。



![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_9.png)


**ステップ 8**

**背景を削除**

* マジックワンドツールを選択します。
* 許容値を調整可能な値に設定します（推奨：50）。
* Tシャツの背後にある白い背景をクリックします。
* Deleteキーを押します。


![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_10.png)


**ステップ 9**

**選択範囲をクリーンアップ**

* 背景レイヤーの目のアイコンをクリックして非表示にします。
* Ctrl + D を押して、現在の選択範囲を解除します。



![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_11.png)


**ステップ 10**

**デザイン／印刷エリアの作成**

**印刷エリアを描画**

* ツールバーから長方形ツールを選択します。
* アートボード上を左クリックします。
* 仕様に従って印刷エリアの幅と高さを入力します。
* ［OK］をクリックします。



![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_12.png)

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_13.png)

### 
**ステップ 11**

**Tシャツからデザインエリアを抽出**

* 長方形レイヤーを選択します。
* Ctrlキーを押したまま、長方形のサムネイルをクリックします。
* Tシャツレイヤーを選択します。
* Ctrl + J を押して、選択したエリアを複製します。


**これにより、個別のデザインエリア用レイヤーが作成されます。**

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_14.png)


**ステップ 12**

長方形レイヤーを選択し、Ctrlキーを押したまま長方形のサムネイルをクリックします。

次にTシャツレイヤーを選択し、Ctrl + J を押します。

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_15.png)


**ステップ 13**

上記の手順は、Tシャツからデザインエリア部分を切り出すために行います。

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_16.png)


**ステップ 14**

Tシャツから印刷エリアを削除するには：

* 長方形レイヤーを選択します。
* Ctrlキーを押したまま、長方形のサムネイルをクリックします。
* Tシャツレイヤーを選択し、Deleteキーを押します。
* 目のアイコンを使用して背景レイヤーを非表示にします。


製品画像の準備が完了しました。

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_17.png)

##### 
**ステップ 15**

**エッジをクリーンアップ**

* Select the Magic Wand Tool
* Set Tolerance to 20
* Enable Anti-alias and Contiguous
* Select the T-shirt layer and click on the image

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_18.jpg)

If extra elements (like tags) are selected:

* Use the Quick Selection Tool
* Hold Alt (or Shift –) to subtract unwanted areas

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_19.jpg)

Then:

* Press Shift + Ctrl + I (Invert Selection)
* Press Delete

Repeat the same cleanup process for the design area layer.

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_20.png)

## **Step 16**

Save the Product Mask Image

Go to File → Export → Save for Web (Legacy) and use these settings:

* Format: PNG-24
* Transparency: Enabled
* Matte: None
* Interlaced: Unchecked
* Metadata: None
* Quality: Bicubic Sharper

Click Save and choose the desired folder.

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_21.jpg)

## **Step 17**

Save the product image in the desired folder.

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_22.jpg)

## **Need Help?**

If you're stuck, don’t worry — just email us at [support@ezycreate.com](mailto:support@ezycreate.com)
