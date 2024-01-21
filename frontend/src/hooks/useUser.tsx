import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase.config";
import { useEffect, useState } from 'react';

const useUser = () => {
  useEffect(() => {
    const addUser = async () => {
      const userCollection = collection(db, 'users');
      const newUser = { name: 'John Doe', email: 'john@example.com' };

      try {
        const docRef = await addDoc(userCollection, newUser);
        console.log('Document written with ID:', docRef.id);
      } catch (error) {
        console.error('Error adding document:', error);
      }
    };

    addUser(); // Call the asynchronous function
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  // Your component logic here

  return (
    <div>
        <h1>HI</h1>
    </div>
  );
};

export default useUser;