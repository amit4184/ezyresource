---
title: Product Orders Dashboard
---
### **Product Orders Dashboard**

**Name**: Product Orders
 **Description**: Displays the number of shipped orders per day.

#### **X-Axis:**

* shipped_date: Date when order was shipped

#### **Y-Axis:**

* Orders: Number of orders shipped

#### **Filters:**

* **Store**: Store source (e.g., India Store, SG Store)
* **Plan**: Customer segment (e.g., Pro, Regular)
* **Category**: Product category (e.g., Photobook, Prints)
* **Product Blank**: Product name defined
* **Data Source**: Drupal backend database for the store

#### **Additional Metrics:**

* **Product Sale (Net Sale)**:
   Net Sale = product_sale (MRP)  *quantity - discount*
   (Exclusive of tax & shipping. Currency: Rs.)*
* **Product Sale (Gross Sale)**:
   Gross Sale = product_sale (MRP)  *quantity + discount*
   (Exclusive of tax & shipping. Currency: Rs.)*
