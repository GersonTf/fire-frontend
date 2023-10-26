import Link from "next/link";

export const revalidate = 5; // revalidate at most 5s

async function getData() {
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // 'force-cache' is the default, and can be omitted
  const res = await fetch("https://v2.jokeapi.dev/joke/Any", {
    cache: "force-cache",
    // next: { revalidate: 5 },
  });

  //  fetch('https://...', { next: { revalidate: 3600 } })

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
      <h1>joke page</h1>
      <p>{data.setup}</p>
      <p>{data.delivery}</p>
      <Link href="/wauth">wauth</Link>
    </div>
  );
}
