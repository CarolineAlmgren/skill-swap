import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useSession } from "@supabase/auth-helpers-react";

export const AddSkill = () => {
  const [canTech, setCanTech] = useState("");
  const [wantsToLearn, setWantsToLearn] = useState("");
  const session = useSession();

  const handleSubmit = async () => {
    if (!session) {
      alert("Du måste vara inloggad för att lägga till en skill.");
      return;
    }

    const { error } = await supabase.from("skills").insert([
      {
        can_tech: canTech,
        wants_to_learn: wantsToLearn,
        user_name: session.user.email, // eller annan identifierare
        user_id: session.user.id,
      },
    ]);

    if (error) alert("Fel: " + error.message);
    else {
      alert("Skill tillagd!");
      setCanTech("");
      setWantsToLearn("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Lägg till en skill</h2>
      <input
        placeholder="Vad kan jag?"
        value={canTech}
        onChange={(e) => setCanTech(e.target.value)}
      />
      <br />
      <input
        placeholder="Vad vill jag lära dig?"
        value={wantsToLearn}
        onChange={(e) => setWantsToLearn(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Lägg till</button>
    </div>
  );
};
