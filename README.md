# PT-Finder

This project uses Firebase database and Firebase authentication. It requires a firebase.config.js file creating within the src folder with the relevant information provided by Firestore added to the following:

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
