import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { signOut } from "next-auth/react";

async function getData() {
  const data = await getServerSession(authOptions);
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAXXXXXXXXXXXXXXXXXXXXXXXXXXX");
  console.log(data);

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // 'force-cache' is the default, and can be omitted
  const res = await fetch(
    "http://localhost:8080/expenses/category/63768f48862300055e769ea0",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${data?.user.access_token}`,
      },
      // cache: "force-cache",
      // next: { revalidate: 5 },
    }
  );

  //  fetch('https://...', { next: { revalidate: 3600 } })

  if (res.status === 401) {
    signOut();
    throw new Error("You are not auth primo");
  }

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>wauth page Hello, Next.js what's up! 222222</h1>
      <p>{data.name}</p>
      <Link href="/">home</Link>
    </div>
  );
}
