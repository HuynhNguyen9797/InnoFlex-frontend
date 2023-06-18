import { createContext, useState, useEffect, useContext } from "react";
import { IPost } from "../service/postService";

interface IUser {
  id: string;
  username: string;
}
interface IAuthenContext {
  user: IUser | null;
  editMode: boolean;
  reload: boolean,
  setReload: (reload: boolean) => void,
  setEditMode: (edit: boolean) => void,
  currentPost: IPost;
  setUser: (User: IUser) => void;
  setOpenSignModal: (isOpen: boolean) => void;
  isOpenSignModal: boolean;
  isOpenSignUpModal: boolean;
  setOpenSignUpModal: (isOpen: boolean) => void;
  isOpenCreatePostFormModal: boolean;
  setOpenCreatePostFormModal: (isOpen: boolean) => void;
  isOpenDelete: boolean;
  setOpenDelete: (isOpen: boolean) => void;
  setPost: (post: IPost) => void;
}

export const AuthenContext = createContext<IAuthenContext>({
  user: null,
  reload: false,
  setReload: () => {},
  editMode: false,
  setUser: () => {},
  isOpenSignModal: false,
  setOpenSignModal: () => {},
  isOpenSignUpModal: false,
  setOpenSignUpModal: () => {},
  isOpenCreatePostFormModal: false,
  setOpenCreatePostFormModal: () => {},
  isOpenDelete: false,
  setOpenDelete: () => {},
  currentPost: {
    id: "1",
    authorId: "1",
    authorUserName: "h",
    title: "1",
    content: "1",
    createAt: "1",
  },
  setPost: () => {},
  setEditMode: () => {}
});

export function AuthenProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isOpenSignModal, setOpenSignModal] = useState<boolean>(false);
  const [isOpenSignUpModal, setOpenSignUpModal] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);
  const [isOpenCreatePostFormModal, setOpenCreatePostFormModal] =
    useState<boolean>(false);
  const [currentPost, setPost] = useState({
    id: "",
    authorId: "",
    authorUserName: "",
    title: "",
    content: "",
    createAt: "",
  });
  const [isOpenDelete, setOpenDelete] = useState<boolean>(false);
  const [editMode, setEditMode] = useState(false)
  useEffect(() => {
    setUser(null);
  }, []);
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
        setOpenDelete,
        currentPost,
        setPost,
        editMode,
        setEditMode,
        reload,
        setReload
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
}

export function useAuthenContext() {
  return useContext(AuthenContext);
}
