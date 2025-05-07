import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert("Fel vid inloggning: " + error.message);
    } else {
      alert("Inloggning lyckades!");
    }
  };

  return (
    <div className="p-5 w-100" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Logga in</h2>
      <input
        type="email"
        placeholder="E-post"
        className="form-control mb-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Lösenord"
        className="form-control mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="btn btn-login text-white w-100 mb-2"
      >
        Logga in
      </button>
      <button
        className="btn btn-register text-dark w-100"
        onClick={() => navigate("/createaccount")}
      >
        Skapa konto
      </button>
    </div>
  );
};
