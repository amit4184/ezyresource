---
title: "API Integration "
slug: APi
---

# API Integration Guide

Welcome to the API Integration Guide. This document provides instructions for authenticating and interacting with our RESTful API.

---

## 🔐 Authentication

All requests must include a valid API key.

**Header:**
```
Authorization: Bearer YOUR_API_KEY
```

---

## 📦 Endpoints

### 1. Get Product by ID

**Endpoint:**
```
GET /api/products/{product_id}
```

**Parameters:**

| Name         | Type   | Description             |
|--------------|--------|-------------------------|
| `product_id` | string | Unique ID of the product |

**Example Request:**
```bash
curl -X GET "https://api.example.com/api/products/12345" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Success Response:**
```json
{
  "id": "12345",
  "name": "Canvas Print",
  "description": "High-quality canvas with custom design",
  "price": 29.99
}
```

---

### 2. Create Order

**Endpoint:**
```
POST /api/orders
```

**Request Body:**
```json
{
  "user_id": "abc123",
  "items": [
    {
      "product_id": "12345",
      "quantity": 2
    }
  ],
  "shipping_address": {
    "name": "John Doe",
    "address": "123 Main St",
    "city": "New York",
    "zip": "10001",
    "country": "USA"
  }
}
```

**Success Response:**
```json
{
  "order_id": "ORD98765",
  "status": "processing",
  "estimated_delivery": "2025-06-22"
}
```

---

## 🚫 Error Handling

| Code | Message            | Description                     |
|------|--------------------|---------------------------------|
| 401  | Unauthorized       | Missing or invalid API key      |
| 404  | Not Found          | The resource does not exist     |
| 500  | Internal Server Error | Something went wrong on our end |

---

## 🧪 Testing & Sandbox

Use the following base URL for testing:
```
https://sandbox.api.example.com/
```

---

## 📞 Support

For help, contact: [devsupport@example.com](mailto:devsupport@example.com)
