import { createContext, useState, useEffect, useContext } from "react";

interface IUser {
  id: string;
  role: string;
  username: string;
}
enum UserRoles {
  ADMIN = "Admin",
  MEMBER = "Member",
}
 interface IAuthenContext {
  user: IUser | null;
  isAdmin?: (user: IUser) => boolean;
  isMember?: (user: IUser) => boolean;
  setUser?: (User: IUser) => void;
}

export const AuthenContext = createContext<IAuthenContext>({
  user: null,
});

export function AuthenProvider({
  children
}: {children: JSX.Element}) {
  const [user, setUser] = useState<IUser | null>(null);
  const isAdmin = (user: IUser) => user.role === UserRoles.ADMIN;
  const isMember = (user: IUser) => user.role === UserRoles.MEMBER;
  useEffect(() => {
    setUser(null)
  }, [])
  return (
    <AuthenContext.Provider
      value={{
        user,
        isAdmin,
        isMember,
        setUser,
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
}

export function useAuthenContext(){return  useContext(AuthenContext)}
