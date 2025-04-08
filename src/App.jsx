import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Layout from './components/Layout';

import NotFound from './notfound/NotFound';
import { toast } from 'sonner';
import WorkLeadsLayout from './components/WorkLeads/WorkLeadsLayout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated') === 'true';
    if (storedAuth !== isAuthenticated) {
      setIsAuthenticated(storedAuth);
    }
  }, [isAuthenticated]);

  const handleLogin = (email, password) => {
    if (email === 'agent@yopmail.com' && password === 'Test@123') {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    toast.success("loggedout successfully!")
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/work" replace /> : <Login onLogin={handleLogin} />}
      />

      <Route path="/" element={<Navigate to={isAuthenticated ? "/work" : "/login"} replace />} />

      {isAuthenticated ? (
        <Route element={<Layout handleLogout={handleLogout} />}>
          <Route path="/work" element={<WorkLeadsLayout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}

    </Routes>
  );
}

export default App;