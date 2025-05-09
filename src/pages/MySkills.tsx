import { useEffect, useState } from "react";
import { fetchUserSkills, deleteSkill } from "../services/skillService";

import { Skill } from "../models/Skill";
import { getCurrentUser } from "../services/userService";
import { NavbarLoggedIn } from "../components/NavbarLoggedIn";

export const MySkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      const user = await getCurrentUser();
      if (!user) return;
      const userSkills = await fetchUserSkills(user.id);
      setSkills(userSkills);
    };

    loadSkills();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteSkill(id);
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div>
      <NavbarLoggedIn />
      <div className="my-skills-container p-5">
        <h2 className="skills-title">Mina skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <h4 className="skill-name">{skill.user_name}</h4>
              <p>
                <strong>Jag kan:</strong> {skill.can_tech}
              </p>
              <p>
                <strong>Jag vill lära mig:</strong> {skill.wants_to_learn}
              </p>
              <button
                className="delete-button"
                onClick={() => handleDelete(skill.id)}
              >
                Ta bort
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
