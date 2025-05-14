import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AuthContext } from '@/shared/context/authContext.ts';
import { useCallback, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    return saved === 'true';
  });
  const login = useCallback(() => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <RouterProvider router={router} />;
    </AuthContext.Provider>
  );
}

export default App;
