"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { authenticatedFetch } from "../helpers/authClient";

const HomePage = () => {
  const { data: session } = useSession();
  const [expense, setExpense] = useState();

  const fetchExpense = async () => {
    const res = await authenticatedFetch(
      "http://localhost:8080/expenses/category/63768f48862300055e769ea0",
      {
        method: "GET",
        headers: {
          authorization: `bearer ${session?.user.access_token}`,
        },
        // cache: "force-cache",
        // next: { revalidate: 5 },
      }
    );

    if (!res || res.status === 401) {
      signOut();
    }

    const response = await res.json();
    setExpense(response);
  };

  return (
    <div>
      <button onClick={fetchExpense}>Get expense</button>
      {expense && JSON.stringify(expense)}
    </div>
  );
};

export default HomePage;
