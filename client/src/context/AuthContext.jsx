import { createContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/auth/check', { credentials: 'include' });
        const data = await res.json();
        setAuthUser(data.user);
      } catch (error) {
        console.log(error);
        toast.error('An error occurred', error.message);
      } finally {
        setLoading(false);
      }
    };
    checkUserLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
