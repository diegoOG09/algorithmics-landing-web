import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAk9W7b3HUehVOJtAwfWi1rJGZ0NcboAI4",
  authDomain: "algorithmics-schedule.firebaseapp.com",
  projectId: "algorithmics-schedule",
  storageBucket: "algorithmics-schedule.appspot.com",
  messagingSenderId: "30793863409",
  appId: "1:30793863409:web:bbef8e28afe3c729a55950",
  measurementId: "G-V0DHQ9H4J5"
};

export const app = initializeApp(firebaseConfig);