import { useState } from "react";
import { addSkill } from "../services/skillService";
import { getCurrentUser } from "../services/userService";
import { NavbarLoggedIn } from "../components/NavbarLoggedIn";

export const AddSkill = () => {
  const [canTech, setCanTech] = useState("");
  const [wantsToLearn, setWantsToLearn] = useState("");

  const handleSubmit = async () => {
    try {
      const user = await getCurrentUser();
      if (!user) throw new Error("Ingen användare inloggad");

      const userId = user.id;
      const userName = user.user_metadata.user_name || user.email; // eller något du sparar

      await addSkill(userId, userName, canTech, wantsToLearn);
      alert("Skill tillagd!");
      setCanTech("");
      setWantsToLearn("");
    } catch (error) {
      alert("Fel: " + error);
    }
  };

  return (
    <div>
      <NavbarLoggedIn />
      <div className="p-5" style={{ maxWidth: 500, margin: "0 auto" }}>
        <h2 className="mb-4">Lägg till en skill</h2>
        <input
          placeholder="Vad kan jag?"
          className="form-control mb-3"
          value={canTech}
          onChange={(e) => setCanTech(e.target.value)}
        />
        <input
          placeholder="Vad vill jag lära mig?"
          className="form-control mb-4"
          value={wantsToLearn}
          onChange={(e) => setWantsToLearn(e.target.value)}
        />
        <button onClick={handleSubmit} className="btn btn-dark w-100">
          Lägg till
        </button>
      </div>
    </div>
  );
};
