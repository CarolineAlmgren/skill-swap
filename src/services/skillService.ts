import { supabase } from "../supabaseClient";
import { Skill } from "../models/Skill";

// Hämta alla skills för inloggad användare
export const fetchUserSkills = async (userId: string): Promise<Skill[]> => {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error("Kunde inte hämta skills: " + error.message);
  return data || [];
};

// Lägg till en ny skill
export const addSkill = async (
  user_id: string,
  user_name: string,
  can_tech: string,
  wants_to_learn: string
) => {
  const { error } = await supabase.from("skills").insert([
    {
      user_id: user_id,
      user_name: user_name,
      can_tech,
      wants_to_learn,
    },
  ]);

  if (error) throw new Error("Kunde inte lägga till skill: " + error.message);
};

// Ta bort en skill
export const deleteSkill = async (id: number) => {
  const { error } = await supabase.from("skills").delete().eq("id", id);
  if (error) throw new Error("Kunde inte ta bort skill: " + error.message);
};
