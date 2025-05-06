import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { AddSkill } from "./pages/AddSkill";
import SkillsList from "./pages/SkillsList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddSkill />} />
        <Route path="/skills" element={<SkillsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
