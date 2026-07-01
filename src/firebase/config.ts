import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs6NhgxYHpH3gdocT9OXN9xr6kmAcV-FA",
  authDomain: "my-auth-app-1d10e.firebaseapp.com",
  projectId: "my-auth-app-1d10e",
  storageBucket: "my-auth-app-1d10e.firebasestorage.app",
  messagingSenderId: "79146025753",
  appId: "1:79146025753:web:e9618464ad63fd8fda7b88"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;