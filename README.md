# React Native Project

This repository contains a React Native project. Follow the instructions below to set up and run the project.

## 📌 Prerequisites

Ensure you have the following installed:

- Node.js (LTS version) → [Download here](https://nodejs.org/)
- Yarn → [Installation guide](https://yarnpkg.com/getting-started/install)
- React Native CLI → `npm install -g react-native-cli`
- Android Studio (for Android development) → [Download here](https://developer.android.com/studio)
- Xcode (for iOS development, macOS only) → [Download here](https://developer.apple.com/xcode/)

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
https://github.com/mightyFZeus/shippex
cd shippex
```

### 2️⃣ Install Dependencies
```sh
yarn install
```
### 2️⃣ Install cocoapods(ios)
```sh
yarn pod
```


### 3️⃣ Start Metro Bundler
```sh
yarn dev
```

### 4️⃣ Run the App

#### ✅ For Android
```sh
npx react-native run-android
```

#### ✅ For iOS (Mac Only)
```sh
npx react-native run-ios
```

### 5️⃣ Troubleshooting

- **Metro bundler stuck?** Try clearing the cache:
  ```sh
  yarn dev --reset-cache
  ```
- **Android build issues?** Ensure you have an emulator running or a physical device connected.
- **iOS build fails?** Run:
  ```sh
  cd ios && pod install && cd ..
  ```


  

## 📄 License
This project is licensed under the MIT License.

