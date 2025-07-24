---
title: Install SDK
---
# **EzyCreate Mobile SDK Integration Guide**

Welcome to the **Mobile SDK Integration Guide** for the **EzyCreate SaaS Platform**. This SDK enables seamless integration of store creation, product customization, and order processing features into your mobile app.

## **Before You Begin**

To use the SDK, you must:

1. Register on\[ EzyCreate.com ] (https://ezycreate.com)
2. Subscribe to a plan that suits your business needs

## **Step 1: Register & Subscribe**

* Visit[ **EzyCreate.com** ](https://ezycreate.com)
* Create an account and complete registration
* Choose a subscription plan based on your usage

## **Step 2: Access Your Dashboard**

Once subscribed:

* Log in to your **user dashboard**
* Create your first **Store** (each store represents an integration instance)

You will receive:

* **Client ID**
* **Client Secret Key**

These credentials are essential for authenticating SDK requests from your mobile app.

## **Step 3: SDK Authentication**

* All SDK calls require **secure authentication**
* Use the **Client ID** and **Secret Key** to obtain access tokens or establish secure connections
* Store credentials securely within your app

## **What’s Next?**

Once authenticated, the SDK allows you to:

* Connect to your **Store**
* **Fetch products**
* **Create personalized products** using the online designer in a **WebView**
* **Add items to cart**
* **Submit orders** from the app

## **SDK Downloads**

Choose the appropriate SDK for your platform:

* **Android (Java/Kotlin)**: Download Android SDK (.aar)
* **React Native**: npm install ezycreate-react-sdk (coming soon)

Always use the **Client ID** and **Secret Key** from your dashboard to initialize the SDK.

# **EC SDK – Android Integration (Quick Guide)**

## **Prerequisites**

* Android project with compileSdkVersion 34 or higher
* .aar file of EzyCreate SDK (for local testing)
* Access token, client credentials, and user credentials

## **Local Testing Integration (using .aar)**

### **1. Add .aar to Your Project**

Place the .aar file in:

`android/app/libs`

### **2. Configure build.gradle (Module: app)**

`dependencies {`

`implementation fileTree(dir: 'libs', include: ['*.jar', '*.aar'])`

`implementation 'com.squareup.okhttp3:okhttp:4.10.0'`

`implementation 'com.squareup.okhttp3:logging-interceptor:4.10.0'`

`implementation 'com.squareup.retrofit2:retrofit:2.9.0'`

`implementation 'com.squareup.retrofit2:converter-gson:2.9.0'
             }`

### **3. Update AndroidManifest.xml**

Inside the `manifest`tag, add:

`xmlns:tools="http://schemas.android.com/tools"`

Inside the `application` tag, add:

`tools:replace="android:theme"`

### **4. Clean and Rebuild Project**

`cd android && ./gradlew clean`

## **SDK Initialization (Kotlin Example)**

`val sdkConfig = SDKConfig(`

`sdkToken = "YOUR_SDK_TOKEN",`

`grantType = "client_credentials",`

`bundleId = "com.yourproject",`

`clientId = "YOUR_CLIENT_ID",`

`clientSecretKey = "YOUR_CLIENT_SECRET",`

`platform = "android",`

`redirectUrl = "YOUR_REDIRECT_URL",`

`scope = "YOUR_SCOPE",`

`baseUrl = "YOUR_BASE_URL",`

`clientSecret = "YOUR_CLIENT_SECRET",`

`userToken = "YOUR_USER_TOKEN",`

`userId = "YOUR_USER_ID",`

`toastEnabled = true`

`)`

EzycreateSDK.initialize(sdkConfig)

## **Usage Examples**

`val products = EzycreateSDK.getInstance().getProducts()`

`val projects = EzycreateSDK.getInstance().getProjects()`

`val orders = EzycreateSDK.getInstance().getOrders()`

## **Production Integration (Coming Soon via Maven)**

When the SDK is published:

### **Add Maven Repository**

In settings.gradle or project-level build.gradle:

`allprojects {`

`repositories {`

`google()`

`mavenCentral()`

`maven { url 'https://your-maven-url.com/repository' }`

`}`

`}`

### **Add SDK Dependency**

In build.gradle (app level):

`dependencies {`

`implementation 'com.ezycreate:sdk:1.0.0' // Replace with actual version`

`}`

##  **Need Help?**

* View the **Full SDK Documentation** 
* Contact Support: **support@ezycreate.com**
