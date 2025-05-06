import { useState } from "react";
import { supabase } from "../supabaseClient";

export const AddSkill = () => {
  const [skill, setSkill] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    const { error } = await supabase
      .from("skills")
      .insert([{ name: skill, description: desc }]);
    if (error) alert("Fel: " + error.message);
    else {
      alert("Skill tillagd!");
      setSkill("");
      setDesc("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Lägg till en skill</h2>
      <input
        placeholder="Namn"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <br />
      <input
        placeholder="Beskrivning"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Lägg till</button>
    </div>
  );
};
