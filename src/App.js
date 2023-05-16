import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Users from "./components/Users";
import Employees from "./components/Employees";
import Applicants from "./components/Applicants";
import Jobs from "./components/Jobs";
import Upload from "./components/Upload";



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/users" element={<Users/>} />
        <Route exact path="/employees" element={<Employees/>} />
        <Route exact path="/applicants" element={<Applicants/>} />
        <Route exact path="/jobs" element={<Jobs/>} />
        <Route exact path="/addjob" element={<Upload/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
