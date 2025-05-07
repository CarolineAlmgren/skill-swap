import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AddSkill } from "./pages/AddSkill";
import { SkillsList } from "./pages/SkillsList";
import { NavbarLoggedOut } from "./components/NavbarLoggedOut";
import { CreateAccount } from "./pages/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <NavbarLoggedOut />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddSkill />} />
        <Route path="/skills" element={<SkillsList />} />
        <Route path="/createaccount" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
