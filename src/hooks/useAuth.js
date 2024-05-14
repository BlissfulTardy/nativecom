
// IMPORT React
import { useEffect, useState } from 'react';
// IMPORT Firebase Auth
import { auth } from '../services/Firebase';
import { onAuthStateChanged } from 'firebase/auth';

/**
 * useAuth hooks responsible for handling user login status
 * returns, if logged in, current user reference
 */
export default function useAuth() {
  
  const [user, setUser]= useState(null);

  useEffect(() => {
      const unsub = onAuthStateChanged(auth , user => {
        console.log('got user:' , user);
        if(user) { setUser(user); }
        else { setUser(null); }
      });
      return unsub;
  }, [])

  return {user}

}