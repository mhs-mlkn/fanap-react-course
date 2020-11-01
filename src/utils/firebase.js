import firebase from "firebase/app";
import "firebase/database";
import config from "config";

firebase.initializeApp(config.firebase);

export default firebase.database();
