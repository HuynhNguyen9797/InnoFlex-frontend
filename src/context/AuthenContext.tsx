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
  setOpenSignModal: (isOpen: boolean) => void;
  isOpenSignModal: boolean,
  isLogedIn?: (User: IUser) => boolean;
}

export const AuthenContext = createContext<IAuthenContext>({
  user: null,
  isOpenSignModal: false,
  setOpenSignModal: () => {}
});

export function AuthenProvider({
  children
}: {children: JSX.Element}) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isOpenSignModal, setOpenSignModal] = useState<boolean>(false)
  const isAdmin = () => user ? user.role === UserRoles.ADMIN : false;
  const isMember = () => user ? user.role === UserRoles.MEMBER: false;
  const isLogedIn = () => !!user
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
        isLogedIn,
        isOpenSignModal,
        setOpenSignModal,
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
}

export function useAuthenContext(){return  useContext(AuthenContext)}
