import { useEffect, useState } from "react";
import { Skill } from "../models/Skill";
import { supabase } from "../supabaseClient";
import { useSession } from "@supabase/auth-helpers-react";

export const SkillsList = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const session = useSession(); // Hämtar sessionen från hooken

  useEffect(() => {
    // Kontrollera om session är null innan vi hämtar skills
    if (session) {
      fetchSkills(); // Kalla fetchSkills när session finns
    } else {
      console.error("Användaren är inte inloggad.");
    }
  }, [session]); // Lägg till session som beroende så att den uppdateras om session ändras

  const fetchSkills = async () => {
    // Kontrollera om sessionen finns
    if (!session) {
      console.error("Användaren är inte inloggad.");
      return;
    }

    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .eq("user_id", session.user.id); // Hämta skills baserat på user_id

    if (error) {
      console.error("Fel vid hämtning:", error.message);
    } else {
      setSkills(data); // Sätt skills när vi får data
    }
  };

  const deleteSkill = async (id: number) => {
    if (!session) {
      console.error("Användaren är inte inloggad.");
      return;
    }

    const { error } = await supabase
      .from("skills")
      .delete()
      .eq("id", id)
      .eq("user_id", session.user.id); // Radera skillen baserat på user_id

    if (error) {
      console.error("Kunde inte ta bort:", error.message);
    } else {
      setSkills((prev) => prev.filter((s) => s.id !== id)); // Uppdatera UI efter borttagning
    }
  };

  return (
    <div>
      <h2>Mina skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.user_name}
            <button
              style={{ marginLeft: 10, color: "dark" }}
              onClick={() => deleteSkill(skill.id)}
            >
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
