---
title: SDK Integration
slug: sdk
---

# React Native SDK Integration Guide

This guide provides step-by-step instructions for integrating our SDK into your React Native app.

---

## ⚙️ Prerequisites

- React Native 0.60+
- Node.js >= 14.x
- Android Studio / Xcode (depending on platform)

---

## 📦 Installation

### 1. Install the SDK via npm

```bash
npm install @example/sdk-react-native
```

Or with yarn:

```bash
yarn add @example/sdk-react-native
```

---

## 🔗 Linking (for React Native < 0.60)

If you're using React Native version < 0.60, you need to link manually:

```bash
react-native link @example/sdk-react-native
```

---

## 🛠 Configuration

### iOS

1. Navigate to your `ios` directory and install pods:

```bash
cd ios && pod install && cd ..
```

2. Ensure that your `Info.plist` contains required permissions (if any).

### Android

1. Open `android/app/build.gradle` and ensure min SDK version is set:
```gradle
minSdkVersion = 21
```

2. Add required permissions to `AndroidManifest.xml`, if needed.

---

## 🚀 Usage Example

```js
import ExampleSDK from '@example/sdk-react-native';

const App = () => {
  useEffect(() => {
    ExampleSDK.initialize('YOUR_API_KEY');

    ExampleSDK.getUserProfile()
      .then(profile => console.log('User:', profile))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <View>
      <Text>SDK Integrated!</Text>
    </View>
  );
};

export default App;
```

---

## 🧪 Testing

Use test credentials to verify SDK behavior before going live.

```js
ExampleSDK.initialize('TEST_API_KEY');
```

---

## ❓ Troubleshooting

- Ensure all native modules are linked correctly.
- On iOS, try `pod install` again if modules aren't recognized.
- Check device logs using `npx react-native log-ios` or `log-android`.

---

## 📞 Support

Need help? Contact us: [support@example.com](mailto:support@example.com)
