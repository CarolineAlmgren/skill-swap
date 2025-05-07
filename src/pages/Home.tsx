import { LoginForm } from "../components/LoginForm";

export const Home = () => (
  <div>
    <div className="bg-dark text-light p-5">
      <h1>Välkommen till SkillSwap</h1>
      <p>Byt och dela kunskaper med andra.</p>
    </div>
    <div className="d-flex justify-content-center align-items-center bg-white m-5 ">
      <LoginForm />
    </div>
  </div>
);
