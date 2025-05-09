import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

import { NavbarLoggedIn } from "../components/NavbarLoggedIn";

export const LoggedIn = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Kunde inte hämta användare:", error.message);
      } else {
        setUserEmail(user?.email || null);
      }
    };

    getUser();
  }, []);

  return (
    <div>
      <NavbarLoggedIn />
      <div className="bg-dark text-light p-5">
        <h1>Välkommen {userEmail ? userEmail : "!"}</h1>
        <p>Byt och dela kunskaper med andra.</p>
      </div>
      <div className="bg-white text-dark p-5">
        <h3> Här kan du lägga till dina Skills och vad du vill lära dig</h3>
      </div>
    </div>
  );
};
