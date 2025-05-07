import { useState } from "react";
import { supabase } from "../supabaseClient";

export const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Fel vid registrering: " + error.message);
    } else {
      alert("Konto skapat! Kolla din e-post för bekräftelse.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div
        className="p-5 bg-white rounded shadow"
        style={{ minWidth: "350px" }}
      >
        <h2 className="mb-4">Skapa konto</h2>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-4"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignUp} className="btn btn-dark w-100">
          Skapa konto
        </button>
      </div>
    </div>
  );
};
