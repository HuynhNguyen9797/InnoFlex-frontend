import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoutes";
import BlogList from "./pages/BlogList";
import Header from "./components/Header";
import { SinginModal } from "./components/SinginModal";
import { SignUpModal } from "./components/SignUpModal";
import { ConFirmDeleteModal } from "./components/ConfirmDeleteModal";
import { PostFrom } from "./components/CreatePostForm";
import { Profile } from "./pages/Profile";
import { useAuthenContext } from "./context/AuthenContext";

function App() {
  const {user} = useAuthenContext()
  const routers = (
    <div className="bg-gray-200 min-h-screen flex flex-col relative ">
      <SinginModal />
      <SignUpModal />
      <PostFrom />
      <ConFirmDeleteModal />
      <Header />
      <main className="container py-5 flex-1">
        <Routes>
          <Route element={<PrivateRoute isAccessible={!!user} />}>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
          <Route path="/" element={<BlogList />}></Route>
        </Routes>
      </main>
    </div>
  );
  return routers;
}

export default App;
