/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./Components/CreatePost";
import PostPage from "./Components/PostPage";
import Introduce from "./Pages/Introduce/Introduce";
import Quiz from "./Pages/Quiz/Quiz";
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
