# This is the test example of connecting 'react-bootstrap-table' with firebase
1). Download the create-react-app
2). Install the firebase inside the project folder.
```
npm install firebase --save
```
3). Load a JSON file into the firebase (whatever way that you want to add data into the firebase)
4). Create a JavaScript file call database.js which will be the firebase configuration (Google makes things much easier, you can just copy it.)
```
import firebase from 'firebase';
const config = {
  apiKey: '......',
  authDomain: '......',
  databaseURL: '....',
  projectId: '....',
  storageBucket: '....',
  messagingSenderId: '....'
};
firebase.initializeApp(config);
const database = firebase.database();
export default database;
```
5). Inside the App.js will add the database and push() the data into each row of the table.
