import { useEffect, useState,useContext } from 'react';
import { Route, Routes, useLocation,Navigate } from 'react-router-dom';

import Loader from './common/Loader';
import authCtx from "./stores/auth/AuthContextProvider";
import routes from "./routes";
import useScrollToTop from "./hooks/useScrollToTop";
import useAxiosInterceptors from "./hooks/useAxiosInterceptors";


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useScrollToTop();
  const { authState } = useContext(authCtx);
  const adminRoutes = routes.filter((route) => route.layout === "private");
  const guestRoutes = routes.filter((route) => route.layout === "guest");
  useAxiosInterceptors();

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to={authState.isLoggedIn ? location.pathname : "/login"} />
          }
        />
        {!authState.isLoggedIn && (
          <Route>
            {guestRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
        )}

        {authState.isLoggedIn && (
          <Route>
            {adminRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
