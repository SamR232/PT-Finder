# PT-Finder

This app was created to connect Personal trainers with fitness enthusiats, through an easy to use mobile platform. It was built using React-Native and Expo.


# Installing and running this project

This project uses Firebase database and Firebase authentication.

# Creating a Firebase project
In order to run this app, you will need to create a Firebase project and a Cloud Firestore database to go along with it. Follow the instructions in the following documentation to get started: https://firebase.google.com/docs/firestore/quickstart


# Create a firebase.config.js

```
const firebaseConfig = {
apiKey: "",
authDomain: "",
projectId: "",
storageBucket: "",
messagingSenderId: "",
appId: "",
};


// Initialize Firebase
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);

export { firebaseConfig };
```

# To run this project:

```
cd react-native-app
npm install
npm install react-native
npm start (expo start)
```

# Troubleshooting:

```
node -v (needs to be version 16)
nvm (check if installed)
nvm use node 16 (if doesn't work : nvm install 16)
nvm use node 16
```
