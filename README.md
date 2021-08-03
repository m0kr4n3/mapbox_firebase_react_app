# a ReactJS app using MapBox and Firebase to show postion in maps

a reactJS applcation that uses Mapbox maps provider to show position, integrated with firestone database. 

It has 2 options:
    - Realtime position. (simultaneously changing position)
    - History position. (where it consumes many positions of a path for exemple, and we control
    it with a slider, like watching a video)

It needs a mapbox API access token, put in /src/mapboxAPItoken.js
```js
#/src/mapboxAPItoken.js
module.exports = "put the key here";
```

and firebase access initialization in /src/firebase.js
```js
#/src/components/firebase.js
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
});
export default firebase;
```

To run the app:
```bash
npm install
npm run start
```

