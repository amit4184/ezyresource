---
title: Platform Engagement Dashboard
---
### **Product Orders Dashboard**

This dashboard gives the number of orders shipped on a particular day. It displays shipped orders date-wise, so the user can view the number of orders with their respective shipped dates.

**X-Axis**:
 shipped_date – Date when the order is shipped

**Y-Axis**:
 Orders – Number of orders shipped

**Glossary**:

* **Product Blank**: Refers to the list of products defined.
* **shipped_date**: The date when an order is shipped to the end customer.
* **Product Orders**: A formal request from a customer to purchase specific products or services.
* **Product Sale**: Refers to the number of products sold.

**Filters**:

* **Store**: The store from which the dashboard data is integrated (e.g., India Store, SG Store).
* **Plan**: Refers to customer segments (e.g., Pro, Regular).
* **Category**: The product category used to organize products (e.g., Photobook, Prints).
* **Product Blank**: Name of the defined product to be selected.
* **Data Source**: The Drupal backend database for the respective store.

### **Platform Engagement Dashboard**

**Name**: Platform Engagement
 **Description**: This dashboard gives the % of conversion in EzyDesigner.

#### **X-Axis:**

* event_date: Date when EzyDesigner project (design is created)

#### **Y-Axis:**

* Conversion % = (#End Event / #Start Event) * 100

#### **Filters / Fields:**

* **App Name**: Name of the application (e.g., EzyDesigner, EzyAdmin)
* **Module Name**: Name of the module in the application
* **Scenario**: Defined scenario (e.g., Create a product, Create and add to cart)

#### **Definitions:**

* **Sessions**: Period when a user is signed in or interacts with the website or app.
* A scenario is considered completed when both start and end events occur in the same session.
* A scenario is not completed if the end event doesn't occur in the same session.
