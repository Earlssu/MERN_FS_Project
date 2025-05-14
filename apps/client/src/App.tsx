import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AuthContext } from '@/shared/context/authContext.ts';
import { useCallback, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <RouterProvider router={router} />;
    </AuthContext.Provider>
  );
}

export default App;
