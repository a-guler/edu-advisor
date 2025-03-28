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
import Results from "./Components/Results/Results";
import Quiz from "./Pages/Quiz/Quiz";
import Advisors from "./Components/Advisors";
import AdvisorChat from "./Components/AdvisorChat";
import GraduateStudents from "./Components/GraduateStudents";
import GraduateStudentChat from "./Components/GraduateStudentChat";
import SelectGraduateFromSchool from "./Components/SelectGraduateFromSchool";
import TrainedModelChat from "./Components/TrainedModelChat";
import UserMessageList from "./Components/UserMessageList";
import UserChat from "./Components/UserChat";
import { MessageContextProvider } from "./MessageContext";

import ResultSelected from "./Components/Results/ResultSelected";
import NewHome from "./Components/NewHome";

function App() {
  return (
    <UserContextProvider>
      <MessageContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<NewHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/advisors" element={<Advisors />} />
            <Route path="/advisors/:id" element={<AdvisorChat />} />
            <Route
              path="/selectGraduates"
              element={<SelectGraduateFromSchool />}
            />
            <Route path="/graduates/:schoolId" element={<GraduateStudents />} />
            <Route
              path="/graduates/:schoolId/:id"
              element={<GraduateStudentChat />}
            />
            <Route path="/trainedModel" element={<TrainedModelChat />} />
            <Route path="/userMessageList" element={<UserMessageList />} />
            <Route path="/userChat" element={<UserChat />} />
            <Route path="/results" element={<Results />} />
            <Route path="/result/:id" element={<ResultSelected />} />
            <Route path="/posts" element={<Home />} />
          </Route>
        </Routes>
      </MessageContextProvider>
    </UserContextProvider>
  );
}

export default App;
