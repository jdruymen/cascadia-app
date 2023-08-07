import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("/login");
    } else if (user && inAuthGroup) {
      router.replace("/home");
    }
  }, [user, segments]);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useProtectedRoute(user);

  const authContext = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}