# FinancialInc1.0
npm install @mui/material @emotion/react @emotion/styled recharts

npm install react-router-dom

npm install @mui/icons-material

npm install react-youtube



1. Build your React App

s
npm run build
This creates a /build folder with your compiled static site.

2. Install Capacitor
From your React project root:


npm install --save @capacitor/core @capacitor/cli
npx cap init


3. Add Android Platform

npx cap add android
This generates an android/ folder with a native Android project.

4. Copy your build into the native container

npx cap copy
You should run this every time you rebuild the React app.

5. Open in Android Studio

npx cap open android
From Android Studio:

Select an emulator or connected device.

Click "Run".