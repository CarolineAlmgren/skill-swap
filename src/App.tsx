import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AddSkill } from "./pages/AddSkill";
import { MySkills } from "./pages/MySkills";
import { CreateAccount } from "./pages/CreateAccount";
import { LoggedIn } from "./pages/LoggedIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddSkill />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/loggedin" element={<LoggedIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
