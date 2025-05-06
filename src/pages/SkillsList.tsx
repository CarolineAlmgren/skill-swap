import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

type Skill = {
  id: number;
  user_name: string;
  can_tech: string;
  wants_to_learn: string;
};

export default function SkillsList() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase.from("skills").select("*");
      if (error) {
        console.error("Error fetching skills:", error);
      } else {
        setSkills(data);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.user_name}</strong> kan {skill.can_tech}, vill lära
            sig {skill.wants_to_learn}
          </li>
        ))}
      </ul>
    </div>
  );
}
