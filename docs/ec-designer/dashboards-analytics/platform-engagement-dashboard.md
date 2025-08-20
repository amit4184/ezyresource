---
title: Platform Engagement Dashboard
---
### **Product Orders Dashboard**




#### **Name: Product Orders**

**Description**: This dashboard gives the number of orders shipped on a day. It will display shipped orders date-wise, so the user can view the number of orders with their shipped dates.

* **X - Axis**: shipped_date – Date when the order is shipped

* **Y - Axis**: Orders – Number of orders shipped







### **Glossary**

* **Product Blank**: Refers to the list of products defined.


* **shipped_date**: Refers to the date when an order is shipped to the end customer.


* **Product Orders**: Refers to a formal request from a customer to purchase specific products or services.


* **Product Sale**: Refers to the number of products sold.







### **Filters:**

* **Store**: The store from which the dashboard data is integrated (e.g., India Store, SG Store).


* **Plan**: Customer segments (e.g., Pro, Regular, etc.).


* **Category**: Organizes products under specific sections (e.g., Photobook, Prints).


* **Product Blank**: The product name defined to be selected.


* **Data Source**: The Drupal backend database for the respective store.







* **Product Orders & Sales**
* **Product Sale (Net Sale)**:
   Net Sale = product_sale (mrp) * quantity - discount
   Sale values are exclusive of tax and shipping (Currency in “Rs.” for India, Singapore).


* **Product Sale (Gross Sale)**:
   Gross Sale = product_sale (mrp) * quantity + discount
   Sale values are exclusive of tax and shipping (Currency in “Rs.” for India, Singapore).







#### **Name: Design Performance**

**Orders Trend by Design**
 **Description**: This dashboard gives the number of orders placed in EzyDesigner.
 *Note: Only products/templates from EzyDesigner are considered, not S2P.*

* **X - Axis**: project_date – Date when EzyDesigner project (design) is created


* **Y - Axis**: Orders – Number of orders







### **Filters:**

* **Store**: The store from which the dashboard data is integrated.


* **Category**: Product category (e.g., Photobook, Prints).


* **Product Blank**: Product name.


* **Template (Theme)**: The template used in the designer.


* **Occasion**: The occasion that is tagged for the template (e.g., Birthday, Wedding, Baby Shower).







**Sales Trend by Design**





#### **Name: Product Conversion**

**Description**: This dashboard gives the percentage of project conversion in EzyDesigner.
 *Note: This dashboard contains only EzyDesigner products, not S2P.*

* **X - Axis**: project_date – Date when EzyDesigner project (design) is created


* **Y - Axis**: Projects – Number of projects created



**Metrics**:

* **Product Conversion**


* **Product Conversion %**







#### **Name: New Customer Sales**

**Customers Who Registered**
 **Customers Who Placed First Order**

**Description**: This dashboard gives the number of customers who placed first orders within the last 2 months.

* **X - Axis**: registration_date – Date when the customer is registered on the selected store


* **Y - Axis**: Number of customers who placed at least one order



**Metrics**:

* **Acquisition Rate**


* **Customer Registered but Not Placed the Order**







### **First Purchase Sales**

**Description**: This dashboard gives the sales from customers who placed their first orders in the last 2 months.

* **X - Axis**: first_order_date – Date when the customer placed their first order


* **Y - Axis**: Sale from customers who placed their first order







### **Average First Purchase Sale**

**Description**: This dashboard gives the average sale of the customers who placed their first order in the last 2 months.

* **X - Axis**: first_order_date – Date when the customer placed their first order


* **Y - Axis**: Sale from customers who placed their first order (Currency in “Rs.” for India, Singapore)







#### **Name: Repeat Customer Sales**

**Description**: This dashboard gives the number of customers who placed more than 1 order.

* **X - Axis**: shipped_date – Date when the order was shipped


* **Y - Axis**: Number of orders



**Metrics**:

* **Repeat Customers Orders**


* **Repeat Customer Sales (Avg Sales)**







#### **Name: Customer Churn Rate**

**Store Churn**

**Ordering Customers - Churn Rate**

**Description**: This dashboard gives the number of customers who did not visit the store in the last 180 days.

* **X - Axis**: last_visit_date – Date when the customer accessed the store


* **Y - Axis**: Number of churned customers







#### **Name: Platform Engagement**

**Description**: This dashboard gives the percentage of conversion in EzyDesigner.

* **X - Axis**: event_date – Date when the EzyDesigner project (design) is created


* **Y - Axis**: Conversion % = (#End Event / #Start Events) * 100



**Definitions**:

* **AppName**: Refers to the name of the application (e.g., EzyDesigner, EzyAdmin).


* **Module Name**: The module name in the application.


* **Scenario**: Scenario defined in the application (e.g., Create a product, Add to cart).


* **Sessions**: Period when a user is signed into their Google account or interacts with a website or app.



**Conversion % Formula**:
 Conversion % = (Sessions with scenario completed / Total Sessions) * 100





#### **Ezy CRM Campaign (Open/Click Rate)**

[View Campaign Dashboard](https://dashboards.ezycreate.com/superset/dashboard/8/?native_filters_key=qFhb1IMdC4X8Fl-bYGipcRL8RhkqoyOu_E_zb87OE4objz5l7vknWSNuh8AxRTNZ)

**Description**: This dashboard provides the results of email campaigns.

* **X - Axis**: event_date – Date when the event was executed



**Y - Axis**: Campaign Metrics (e.g., Email opened, Email bounced, Email clicked)











## **Need Help?**

If you're stuck, don’t worry — just email us at [support@ezycreate.com](mailto:support@ezycreate.com)
