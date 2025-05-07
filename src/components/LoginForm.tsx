export const LoginForm = () => {
  return (
    <div className="p-5 w-25">
      <h2 className="mb-4">Logga in</h2>
      <input placeholder="Användarnamn" className="form-control mb-3" />
      <input
        placeholder="Lösenord"
        type="password"
        className="form-control mb-4"
      />
      <button className="btn btn-login text-white w-100 mb-2">Logga in</button>
      <button className="btn btn-register text-dark w-100">Skapa konto</button>
    </div>
  );
};
