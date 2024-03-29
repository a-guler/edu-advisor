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
import Advisors from "./Components/Advisors";
import AdvisorChat from "./Components/AdvisorChat";
import GraduateStudents from "./Components/GraduateStudents";
import GraduateStudentChat from "./Components/GraduateStudentChat";
import SelectGraduateFromSchool from "./Components/SelectGraduateFromSchool";
import TrainedModelChat from "./Components/TrainedModelChat";

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
          <Route path="/advisors" element={<Advisors/>} />
          <Route path="/advisors/:id" element={<AdvisorChat />} />
          <Route path="/selectGraduates" element={<SelectGraduateFromSchool/>} />
          <Route path="/graduates/:schoolId" element={<GraduateStudents/>} />
          <Route path="/graduates/:schoolId/:id" element={<GraduateStudentChat />} />
          <Route path="/trainedModel" element={<TrainedModelChat/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
