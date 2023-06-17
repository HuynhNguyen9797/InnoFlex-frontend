import { createContext, useState, useEffect, useContext } from "react";

interface IUser {
  id: string;
  role: string;
  username: string;
}
 interface IAuthenContext {
  user: IUser | null;
  setUser?: (User: IUser) => void;
  setOpenSignModal: (isOpen: boolean) => void;
  isOpenSignModal: boolean,
  isOpenSignUpModal: boolean,
  setOpenSignUpModal: (isOpen: boolean) => void;
  isOpenCreatePostFormModal: boolean,
  setOpenCreatePostFormModal: (isOpen: boolean) => void,
  isOpenDelete: boolean,
  setOpenDelete: (isOpen: boolean) => void,
}

export const AuthenContext = createContext<IAuthenContext>({
  user: null,
  isOpenSignModal: false,
  setOpenSignModal: () => {},
  isOpenSignUpModal: false,
  setOpenSignUpModal: () => {},
  isOpenCreatePostFormModal: false,
  setOpenCreatePostFormModal: () => {},
  isOpenDelete: false,
  setOpenDelete: () => {}
});

export function AuthenProvider({
  children
}: {children: JSX.Element}) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isOpenSignModal, setOpenSignModal] = useState<boolean>(false)
  const [isOpenSignUpModal, setOpenSignUpModal] = useState<boolean>(false)
  const [isOpenCreatePostFormModal, setOpenCreatePostFormModal] = useState<boolean>(false)
  const [isOpenDelete, setOpenDelete] = useState<boolean>(false)
  useEffect(() => {
    setUser(null)
  }, [])
  return (
    <AuthenContext.Provider
      value={{
        user,
        setUser,
        isOpenSignModal,
        setOpenSignModal,
        isOpenSignUpModal,
        setOpenSignUpModal,
        isOpenCreatePostFormModal,
        setOpenCreatePostFormModal,
        isOpenDelete,
        setOpenDelete
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
}

export function useAuthenContext(){return  useContext(AuthenContext)}
