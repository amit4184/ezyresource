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

## **Step 7**

Rasterize the T-shirt Layer

In the Layers panel:

* Right-click on the T-shirt layer
* Select Rasterize Layer

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_9.png)

## **Step 8**

Remove the Background

* Select the Magic Wand Tool
* Set Tolerance to an adjustable value (Recommended: 50)
* Click on the white background behind the T-shirt
* Press Delete

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_10.png)

## **Step 9**

Clean Up the Selection

* Turn off the background layer by clicking the eye icon
* Press Ctrl + D to deselect the active selection

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_11.png)

## **Step 10**

## **Creating the Design / Print Area**

Draw the Print Area

* Select the Rectangle Tool from the toolbar
* Left-click on the artboard
* Enter the print area width and height as per specifications
* Click OK

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_12.png)

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_13.png)

## **Step 11**

### **Extract the Design Area from the T-shirt**

* **Select the Rectangle layer**
* **Hold Ctrl and click on the rectangle thumbnail**
* **Select the T-shirt layer**
* **Press Ctrl + J to duplicate the selected area**

**This creates a separate design-area layer.**

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_14.png)

## **Step 12**

Select the Rectangle layer, hold Ctrl, click on the rectangle thumbnail, then select the T-shirt layer and press Ctrl + J.

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_15.png)

## **Step 13**

The above step is done to Cut the Design area part from the T-Shirt 

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_16.png)

## **Step 14**

To remove the print area from the T-shirt:

* Select the Rectangle layer
* Hold Ctrl and click the rectangle thumbnail
* Select the T-shirt layer and press Delete
* Turn off the background layer using the eye icon

The product image is now ready.

![](https://ezy-resources.s3.ap-south-1.amazonaws.com/en/HTGMSKSOP_17.png)

## **Step 15**

##### **Clean the Edges:**

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
