# PT-Finder

This was completed as my final group project with Northcoders. 
The apps USP is to connect fitness enthusiasts with Personal Trainers. 
Once signed up, you can then locate personal trainers by city, which will list each PT's specific training and speciality. 
You can also log fitness goals on your own personal profile page, checking these off once completed. Lastly, there is a log your weight feature, which keeps a record of this and the date it was logged on. Please feel free to clone this repo and give it a try using the setup instructions below!

# Developer Info

This project uses a Firebase Firestore database and Firebase authentication. It requires a firebase.config.js file creating within the src folder with the relevant information provided by Firestore added to the following:

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

# Extra Feautures

As this was a time restricted project, there are additional features which have had to be removed to allow the app to be ready, now I have finished the course I am looking to include:

- A Personal Trainer sign up option which allows a PT to log their own information to the database.
- The search PT function currently uses a city, I would like to implement this with postcodes and a radius feature.
- Once Personal trainers have a log in, they can view clients progress easily via the dashboard.
